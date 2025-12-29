import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  category?: string;
}

export function EventCard({ title, date, time, location, description, category }: EventCardProps) {
  // Parse date for display
  const eventDate = new Date(date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex">
        {/* Date Badge */}
        <div className="flex w-24 flex-shrink-0 flex-col items-center justify-center bg-primary p-4 text-primary-foreground">
          <span className="text-3xl font-bold">{day}</span>
          <span className="text-sm font-medium">{month}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              {category && (
                <Badge variant="secondary" className="flex-shrink-0">
                  {category}
                </Badge>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-2 pb-4">
            {description && (
              <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
            )}
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {/* Time */}
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{time}</span>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{location}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
