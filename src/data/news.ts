// Sample news data - in production, this would come from a CMS
export const newsData = [
  {
    slug: "stage-sabar-mamadou-diallo",
    title: "Stage de danse Sabar avec Mamadou Diallo",
    excerpt: "Un week-end intensif pour découvrir les rythmes traditionnels du Sénégal avec notre maître invité.",
    date: "2024-12-28",
    dateFormatted: "28 Décembre 2024",
    category: "Stage",
    content: `
      <p>Nous avons le plaisir d'accueillir <strong>Mamadou Diallo</strong>, maître danseur sénégalais, pour un stage exceptionnel de danse Sabar les 11 et 12 janvier 2025.</p>
      
      <h2>Programme du week-end</h2>
      <p>Ce stage intensif s'adresse à tous les niveaux et vous permettra de découvrir ou d'approfondir votre pratique du Sabar, cette danse traditionnelle sénégalaise aux rythmes endiablés.</p>
      
      <ul>
        <li><strong>Samedi 11 janvier</strong> : 10h-13h et 14h30-17h30 - Initiation aux pas de base et travail des rythmes</li>
        <li><strong>Dimanche 12 janvier</strong> : 10h-13h et 14h30-17h30 - Enchaînements et chorégraphie</li>
      </ul>
      
      <h2>À propos de Mamadou Diallo</h2>
      <p>Originaire de Dakar, Mamadou Diallo a commencé la danse dès son plus jeune âge dans les cérémonies traditionnelles. Il a ensuite intégré le Ballet National du Sénégal avant de parcourir le monde pour partager son art.</p>
      
      <h2>Informations pratiques</h2>
      <ul>
        <li><strong>Lieu</strong> : Studio TAMTAMA, 42 Rue de la Danse, 75011 Paris</li>
        <li><strong>Tarif</strong> : 80€ le week-end complet / 45€ la journée</li>
        <li><strong>Inscription</strong> : contact@tamtama.fr ou 01 23 45 67 89</li>
      </ul>
      
      <p>Places limitées à 25 participants - Réservez vite !</p>
    `,
  },
  {
    slug: "nouveau-cours-coupe-decale",
    title: "Nouveau cours de danse Coupé-Décalé",
    excerpt: "À partir de janvier, découvrez les mouvements entraînants de la Côte d'Ivoire chaque mercredi soir.",
    date: "2024-12-20",
    dateFormatted: "20 Décembre 2024",
    category: "Cours",
    content: `
      <p>Grande nouvelle ! À partir du <strong>8 janvier 2025</strong>, TAMTAMA lance un nouveau cours hebdomadaire dédié au <strong>Coupé-Décalé</strong>.</p>
      
      <h2>Le Coupé-Décalé, c'est quoi ?</h2>
      <p>Né dans les années 2000 en Côte d'Ivoire, le Coupé-Décalé est une danse festive et expressive qui a conquis le monde entier. Caractérisé par ses mouvements fluides, ses pas de danse créatifs et son énergie communicative, c'est la danse parfaite pour s'amuser tout en se dépensant !</p>
      
      <h2>Infos pratiques</h2>
      <ul>
        <li><strong>Jour</strong> : Chaque mercredi</li>
        <li><strong>Horaire</strong> : 19h00 - 20h00</li>
        <li><strong>Niveau</strong> : Débutants bienvenus</li>
        <li><strong>Professeur</strong> : Serge Beynaud</li>
      </ul>
      
      <p>Premier cours d'essai gratuit ! Inscrivez-vous dès maintenant.</p>
    `,
  },
  {
    slug: "spectacle-fin-annee-2024",
    title: "Retour sur notre spectacle de fin d'année",
    excerpt: "Merci à tous les participants et spectateurs pour cette soirée mémorable au Théâtre de la Ville.",
    date: "2024-12-15",
    dateFormatted: "15 Décembre 2024",
    category: "Spectacle",
    content: `
      <p>Quelle soirée incroyable ! Le vendredi 13 décembre, la troupe TAMTAMA et tous nos élèves ont offert un spectacle époustouflant au Théâtre de la Ville.</p>
      
      <h2>Un spectacle haut en couleurs</h2>
      <p>Plus de 50 danseurs sur scène, des costumes traditionnels magnifiques, des percussions envoûtantes... Cette édition 2024 restera dans les mémoires !</p>
      
      <p>Le programme comprenait :</p>
      <ul>
        <li>Ouverture par la troupe professionnelle</li>
        <li>Démonstrations des élèves de tous les cours</li>
        <li>Numéro spécial Sabar par le groupe avancé</li>
        <li>Grand final avec tous les participants</li>
      </ul>
      
      <h2>Merci à tous !</h2>
      <p>Un immense merci à nos 300 spectateurs qui ont rempli la salle, à nos danseurs qui ont donné le meilleur d'eux-mêmes, et à toute l'équipe technique qui a rendu ce spectacle possible.</p>
      
      <p>Rendez-vous l'année prochaine pour une édition encore plus spectaculaire !</p>
    `,
  },
  {
    slug: "partenariat-festival-africolor",
    title: "TAMTAMA partenaire du festival Africolor",
    excerpt: "Nous sommes fiers d'annoncer notre partenariat avec le célèbre festival de musiques africaines.",
    date: "2024-12-10",
    dateFormatted: "10 Décembre 2024",
    category: "Partenariat",
    content: `
      <p>TAMTAMA est officiellement partenaire du <strong>Festival Africolor</strong> pour l'édition 2025 !</p>
      
      <h2>Un partenariat naturel</h2>
      <p>Africolor, festival de référence des musiques africaines en Île-de-France depuis plus de 30 ans, partage nos valeurs de transmission et de célébration des cultures africaines.</p>
      
      <h2>Ce que cela signifie</h2>
      <ul>
        <li>Des ateliers de danse TAMTAMA pendant le festival</li>
        <li>Des spectacles de notre troupe en première partie de concerts</li>
        <li>Des tarifs préférentiels pour nos adhérents</li>
      </ul>
      
      <p>Plus d'informations à venir début 2025. Restez connectés !</p>
    `,
  },
];

export function getNewsItem(slug: string) {
  return newsData.find(item => item.slug === slug);
}

export function getAllNewsSlugs() {
  return newsData.map(item => item.slug);
}
