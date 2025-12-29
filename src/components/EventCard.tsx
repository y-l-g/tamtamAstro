'use client';

import { motion } from 'motion/react';
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

  const categoryEmoji: Record<string, string> = {
    'Cours': '💃',
    'Soirée': '🎉',
    'Stage': '🎓',
    'Spectacle': '🎭',
  };

  return (
    <motion.div
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
        <div className="flex">
          {/* Date Badge */}
          <motion.div 
            className="flex w-24 flex-shrink-0 flex-col items-center justify-center bg-primary p-4 text-primary-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl font-black">{day}</span>
            <span className="text-sm font-bold">{month}</span>
          </motion.div>
          
          {/* Content */}
          <div className="flex-1">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold leading-tight text-foreground">
                  {title}
                </h3>
                {category && (
                  <Badge variant="secondary" className="flex-shrink-0 font-bold">
                    {categoryEmoji[category] || '🎈'} {category}
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
                <div className="flex items-center gap-1.5 font-medium">
                  <span>🕐</span>
                  <span>{time}</span>
                </div>
                
                {/* Location */}
                <div className="flex items-center gap-1.5 font-medium">
                  <span>📍</span>
                  <span>{location}</span>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
