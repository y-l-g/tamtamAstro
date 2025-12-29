'use client';

import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ x: 4 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <span className="text-2xl font-black text-primary-foreground">T</span>
              </div>
              <span className="text-2xl font-black gradient-text">TAMTAMA</span>
              <span className="text-xl">🥁</span>
            </motion.div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Association de danse africaine dédiée à la promotion et au partage 
              des cultures africaines à travers la danse, la musique et les arts. 💃🏿✨
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Navigation 🧭</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Accueil', href: '/', emoji: '🏠' },
                { name: 'Nos Cours', href: '/cours', emoji: '💃' },
                { name: 'La Troupe', href: '/troupe', emoji: '🎭' },
                { name: 'Actualités', href: '/actualites', emoji: '📰' },
                { name: 'Événements', href: '/evenements', emoji: '🎉' },
                { name: 'Contact', href: '/contact', emoji: '📧' },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="text-muted-foreground font-medium transition-colors hover:text-primary inline-flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    <span>{link.emoji}</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact 📞</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 font-medium">
                <span>📧</span>
                contact@tamtama.fr
              </li>
              <li className="flex items-center gap-2 font-medium">
                <span>📍</span>
                Paris, France
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {[
                { name: 'Facebook', icon: 'fb', emoji: '👍' },
                { name: 'Instagram', icon: 'ig', emoji: '📸' },
                { name: 'YouTube', icon: 'yt', emoji: '🎬' },
              ].map((social) => (
                <motion.a 
                  key={social.name}
                  href="#" 
                  className="w-10 h-10 rounded-xl border-2 border-border bg-background flex items-center justify-center text-lg hover:border-primary hover:bg-primary/5 transition-colors"
                  aria-label={social.name}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.emoji}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t-2 border-border text-center">
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} TAMTAMA - Association de Danse Africaine 🌍 Tous droits réservés ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
