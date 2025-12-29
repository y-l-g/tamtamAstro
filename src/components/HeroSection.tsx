'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-dance.png" 
          alt="Danseurs africains" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-4 h-4 rounded-full bg-primary"
        animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-40 right-40 w-3 h-3 rounded-full bg-secondary"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-32 right-32 w-5 h-5 rounded-full bg-accent"
        animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-bold text-primary"
          >
            <motion.span 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              🥁
            </motion.span>
            Découvrez la danse africaine !
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Bienvenue chez{' '}
            <motion.span 
              className="gradient-text inline-block"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              TAMTAMA
            </motion.span>
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
            >
              ✨
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-muted-foreground sm:text-xl leading-relaxed"
          >
            Plongez dans l'énergie vibrante de la danse africaine ! 
            Rejoignez notre association et découvrez les rythmes envoûtants 
            du continent. 🌍💃🏿
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-start gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-base font-bold px-8 animate-pulse-glow">
                🎉 Découvrir nos cours
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="text-base font-bold px-8 border-2">
                En savoir plus →
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            {[
              { value: "10+", label: "Années", emoji: "🎊" },
              { value: "500+", label: "Élèves", emoji: "👯" },
              { value: "50+", label: "Spectacles", emoji: "🎭" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-center sm:text-left"
              >
                <p className="text-3xl sm:text-4xl font-black text-primary">
                  {stat.value} <span className="text-xl">{stat.emoji}</span>
                </p>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
