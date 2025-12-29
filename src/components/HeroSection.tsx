import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-20 sm:py-32">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            currentColor 10px,
            currentColor 11px
          )`
        }} />
      </div>
      
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="mr-2">🥁</span>
            Découvrez la danse africaine
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Bienvenue chez{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              TAMTAMA
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Plongez dans l'énergie vibrante de la danse africaine. Rejoignez notre association 
            et découvrez les rythmes envoûtants du continent à travers nos cours, spectacles et événements.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Découvrir nos cours
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              En savoir plus
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/50 pt-8">
            <div>
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Années d'expérience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Élèves formés</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Spectacles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
