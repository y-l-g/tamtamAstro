'use client';

import { motion } from 'motion/react';
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
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <a href={`/actualites/${slug}`} className="block">
        <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
          {/* Image */}
          <div className="aspect-video overflow-hidden bg-muted">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                <span className="text-4xl">📰</span>
              </div>
            )}
          </div>
          
          <CardHeader className="pb-2">
            <p className="text-xs font-bold text-primary">{date}</p>
            <h3 className="line-clamp-2 text-lg font-bold leading-tight text-foreground">
              {title}
            </h3>
          </CardHeader>
          
          <CardContent className="pb-3">
            <p className="line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>
          </CardContent>
          
          <CardFooter>
            <span className="text-sm font-bold text-primary">
              Lire la suite →
            </span>
          </CardFooter>
        </Card>
      </a>
    </motion.div>
  );
}
