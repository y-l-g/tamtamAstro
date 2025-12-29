import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  slug: string;
}

export function NewsCard({ title, excerpt, date, imageUrl, slug }: NewsCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-muted">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
            <svg className="h-12 w-12 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <p className="text-xs font-medium text-muted-foreground">{date}</p>
        <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>
      </CardContent>
      
      <CardFooter>
        <a 
          href={`/actualites/${slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Lire la suite →
        </a>
      </CardFooter>
    </Card>
  );
}
