export type CTA = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type StoryBlock = {
  title: string;
  text: string;
};

export type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

export const siteContent = {
  headerTagline: "Menuiseries & vitrages d'exception en Corse",
  footerNote:
    "Apertura di Corsica est une signature du groupe VISTA, en synergie avec SIAL et Isula Vitrage. Un écosystème discret, au service de la maîtrise et de la durabilité.",
  home: {
    hero: {
      title: "Apertura di Corsica",
      subtitle:
        "Des ouvertures pensées comme des paysages. Lignes sobres, lumière maîtrisée, protection et silence — pour une architecture insulaire exigeante.",
      cta: {
        label: "Découvrir notre vision",
        href: "/vision"
      }
    },
    sections: [
      {
        id: "territoire",
        title: "Le territoire comme matière",
        text:
          "Chaque maison en Corse dialogue avec un vent, un relief, un horizon. Nous concevons des ouvertures qui respectent cette géographie intime : généreuses sur la lumière, précises sur les seuils, silencieuses face aux vents.",
        image: "/media/territoire-1.jpg"
      },
      {
        id: "atelier",
        title: "L'atelier, cœur du geste",
        text:
          "Nos ateliers assemblent la précision industrielle et l'attention artisanale. Les profils sont ajustés pour durer, les vitrages sélectionnés pour protéger et sublimer la vie quotidienne.",
        image: "/media/atelier-1.jpg"
      },
      {
        id: "projet",
        title: "Des projets sur mesure",
        text:
          "Résidences privées, rénovation patrimoniale, villas contemporaines : nous accompagnons des projets exigeants, avec une coordination fluide entre conception, fabrication et pose.",
        image: "/media/gallery-1.jpg"
      },
      {
        id: "casapertura",
        title: "Cas'Apertura, l'expérience",
        text:
          "Une approche concierge : rendez-vous, maquettes, choix des teintes, visites atelier, suivi des équipes. L'ouverture devient un parcours clair et rassurant.",
        image: "/media/gallery-2.jpg"
      }
    ],
    cta: {
      title: "Imaginer votre ouverture idéale",
      description:
        "Un besoin précis, un projet en cours, ou simplement l'envie d'en parler ? Nos équipes répondent avec transparence et sens du détail.",
      href: "/contact",
      label: "Prendre rendez-vous"
    }
  },
  vision: {
    hero: {
      title: "Notre vision",
      subtitle:
        "Entre la mer et le maquis, l'ouverture est un art du dosage : laisser entrer la lumière sans perdre la fraîcheur, se protéger sans s'enfermer.",
      image: "/media/hero-vision.jpg"
    },
    manifesto: [
      {
        title: "Le silence comme luxe",
        text:
          "Nous privilégions des vitrages et des profils qui étouffent les vibrations, filtrent les sons et laissent le paysage respirer. Le confort acoustique devient un geste d'hospitalité pour la maison.",
        cta: "Explorer notre approche vitrage"
      },
      {
        title: "Une esthétique du peu",
        text:
          "Cadres fins, joints maîtrisés, teintes naturelles : les ouvertures s'effacent pour mieux révéler les matières. La lumière devient la première décoration.",
        cta: "Découvrir les gammes"
      },
      {
        title: "Un réseau discret",
        text:
          "Le groupe VISTA, SIAL et Isula Vitrage constituent une chaîne de savoir-faire locale. Cette proximité garantit des délais maîtrisés et une traçabilité honnête.",
        cta: "Comprendre la fabrication"
      }
    ],
    floatingGallery: [
      {
        image: "/media/gallery-3.jpg",
        title: "Lumière cadrée",
        description: "Baies panoramiques à ouvrants discrets, pour un cadre net."
      },
      {
        image: "/media/gallery-4.jpg",
        title: "Fraîcheur préservée",
        description: "Ventilation douce, inertie thermique, confort quotidien."
      },
      {
        image: "/media/territoire-2.jpg",
        title: "Ancrage insulaire",
        description: "Matériaux robustes, teintes inspirées du maquis."
      }
    ],
    cta: {
      title: "Faire exister une vision durable",
      description:
        "Discutons de l'architecture, des usages, de la manière dont votre maison se vit au quotidien.",
      href: "/contact",
      label: "Échanger avec un expert"
    }
  },
  besoins: {
    hero: {
      title: "Besoins & pièces",
      subtitle:
        "Chaque pièce a ses exigences. Nous traduisons les usages réels en solutions d'ouverture intelligentes, sans compromis sur l'esthétique.",
      image: "/media/hero-besoins.jpg"
    },
    needs: [
      {
        title: "Lumière maîtrisée",
        text:
          "Optimiser l'apport solaire tout en évitant l'éblouissement et la surchauffe grâce aux vitrages sélectifs et aux protections intégrées."
      },
      {
        title: "Confort acoustique",
        text:
          "Réduire les nuisances de route ou de voisinage par des verres feuilletés et des joints continus."
      },
      {
        title: "Sécurité sereine",
        text:
          "Systèmes anti-effraction, fermetures multipoints, vitrages retardateurs : une protection discrète, sans lourdeur visuelle."
      },
      {
        title: "Intimité modulable",
        text:
          "Occultation partielle, vitrages décoratifs, rideaux intégrés pour préserver les moments intimes."
      },
      {
        title: "Ventilation naturelle",
        text:
          "Ouvrants maîtrisés, micro-ventilation, circulation d'air pour un confort d'été sans surconsommation."
      },
      {
        title: "Entretien & durabilité",
        text:
          "Matériaux stables, finitions faciles à nettoyer, résistance aux embruns et au soleil."
      }
    ],
    rooms: [
      {
        title: "Salon / Séjour",
        text:
          "Privilégier des baies généreuses avec seuils affleurants et vitrages hautes performances. L'objectif : panorama, silence, douceur thermique."
      },
      {
        title: "Cuisine",
        text:
          "Ouvrants faciles à manipuler, ventilation efficace, vitrage résistant aux projections. L'apport lumineux doit rester constant sans excès."
      },
      {
        title: "Chambre",
        text:
          "Ambiance feutrée : vitrages acoustiques, occultations intégrées, cadre minimal pour favoriser la quiétude."
      },
      {
        title: "Salle de bain",
        text:
          "Préserver l'intimité sans renoncer à la lumière. Vitrage décoratif, ouvertures hautes, ventilation discrète."
      },
      {
        title: "Entrée",
        text:
          "Sécurité et mise en scène. Porte vitrée sécurisée, lumière rasante, signal d'accueil."
      },
      {
        title: "Terrasse",
        text:
          "Ouvertures coulissantes fluides, performances face au vent et aux embruns, seuils confortables pieds nus."
      }
    ],
    gallery: [
      {
        image: "/media/territoire-3.jpg",
        title: "Lumière filtrée",
        description: "Maîtrise solaire adaptée aux expositions corses."
      },
      {
        image: "/media/atelier-2.jpg",
        title: "Gestes précis",
        description: "Finitions soignées et confort de manœuvre."
      }
    ],
    cta: {
      title: "Cartographier vos usages",
      description:
        "Nous transformons les besoins en préconisations claires, pièce par pièce.",
      href: "/contact",
      label: "Établir un diagnostic"
    }
  },
  gammes: {
    hero: {
      title: "Nos gammes",
      subtitle:
        "Quatre signatures pour répondre à des projets distincts, toujours avec la même exigence de précision et de durabilité.",
      image: "/media/hero-gammes.jpg"
    },
    ranges: [
      {
        title: "Essentielle",
        text:
          "L'équilibre juste : des lignes sobres, une performance fiable, idéale pour les rénovations maîtrisées ou les résidences secondaires exigeantes.",
        points: [
          "Design intemporel",
          "Rapport qualité/prix équilibré",
          "Entretien simplifié"
        ],
        audience: "Pour les projets où chaque euro doit être utile, sans céder sur la qualité.",
        example: "Maison de village, rénovation thermique, extensions lumineuses."
      },
      {
        title: "Harmoniosa",
        text:
          "Une écriture douce : profils fins, finitions naturelles, intégration discrète. La gamme idéale pour un intérieur sensible à la matière.",
        points: [
          "Finitions texturées",
          "Isolation renforcée",
          "Options d'occultation intégrées"
        ],
        audience: "Pour les propriétaires attentifs à l'ambiance et au confort global.",
        example: "Villa familiale, appartements haut de gamme, rénovations patrimoniales."
      },
      {
        title: "Vista",
        text:
          "La signature panoramique : grandes portées, cadres minimisés, vitrage performant. Un choix pour ouvrir la maison sur le paysage.",
        points: [
          "Grandes dimensions",
          "Performance thermique et acoustique avancée",
          "Seuils affleurants"
        ],
        audience: "Pour les architectes et propriétaires cherchant une relation directe au paysage.",
        example: "Villas contemporaines, hôtels de charme, maisons d'architecte."
      },
      {
        title: "Seconda Vita",
        text:
          "La gamme circulaire : éléments reconditionnés, contrôlés, remis à niveau esthétique et technique. Une solution responsable.",
        points: [
          "Réemploi contrôlé",
          "Traçabilité claire",
          "Garantie adaptée"
        ],
        audience: "Pour les projets sensibles à l'impact environnemental et au budget.",
        example: "Réhabilitation, projets associatifs, maisons de famille."
      }
    ],
    comparison: [
      {
        title: "Performance",
        content:
          "Toutes les gammes répondent aux exigences de confort thermique et acoustique. Vista et Harmoniosa offrent le niveau le plus élevé, Essentielle reste très compétitive, Seconda Vita est optimisée selon disponibilité."
      },
      {
        title: "Esthétique",
        content:
          "De la sobriété maîtrisée d'Essentielle aux lignes panoramiques de Vista, chaque gamme conserve une cohérence minimaliste."
      },
      {
        title: "Budget",
        content:
          "Essentielle et Seconda Vita permettent de sécuriser un budget, Harmoniosa et Vista investissent sur l'effet architectural."
      }
    ],
    cta: {
      title: "Choisir la gamme juste",
      description:
        "Nous vous aidons à faire correspondre usage, budget et esthétique, sans compromis invisible.",
      href: "/contact",
      label: "Parler d'une gamme"
    }
  },
  fabrication: {
    hero: {
      title: "Fabrication",
      subtitle:
        "Une chaîne courte, entre atelier et chantier. La qualité se mesure autant dans l'assemblage que dans le suivi.",
      image: "/media/hero-fabrication.jpg"
    },
    story: [
      {
        title: "Étude et relevés",
        text:
          "Chaque projet débute par une écoute attentive. Les relevés sont pris sur site, la lumière observée, les usages discutés."
      },
      {
        title: "Conception technique",
        text:
          "Nos équipes traduisent l'intention architecturale en plans précis. Les tolérances sont définies pour anticiper la pose."
      },
      {
        title: "Assemblage en atelier",
        text:
          "Les profils sont coupés, assemblés, ajustés. Les vitrages sont posés avec des contrôles continus."
      },
      {
        title: "Contrôle & préparation",
        text:
          "Chaque ensemble est vérifié, puis préparé pour le transport. Les délais sont réalistes et communiqués en amont."
      }
    ],
    quality: [
      {
        title: "Traçabilité",
        content:
          "Chaque menuiserie est associée à un dossier : références, vitrages, finitions, contrôle. Transparence et historique clair."
      },
      {
        title: "Tests de manœuvre",
        content:
          "Ouvertures, fermetures, étanchéité. Nous validons le confort d'usage avant la pose."
      },
      {
        title: "Pose coordonnée",
        content:
          "Les équipes de pose connaissent l'atelier. Les ajustements sont rapides, les finitions maîtrisées."
      }
    ],
    floatingGallery: [
      {
        image: "/media/atelier-1.jpg",
        title: "Précision",
        description: "Des gestes réguliers pour un alignement parfait."
      },
      {
        image: "/media/atelier-3.jpg",
        title: "Contrôle",
        description: "Chaque pièce passe un contrôle qualité."
      },
      {
        image: "/media/atelier-2.jpg",
        title: "Finitions",
        description: "Textures sobres et durables."
      }
    ],
    cta: {
      title: "Voir la fabrication autrement",
      description:
        "Prenez rendez-vous pour visiter notre atelier ou échanger avec nos équipes techniques.",
      href: "/contact",
      label: "Visiter l'atelier"
    }
  },
  vitrage: {
    hero: {
      title: "Vitrage",
      subtitle:
        "Le vitrage n'est pas un simple remplissage : il conditionne la température, le bruit et la sensation d'espace.",
      image: "/media/hero-vitrage.jpg"
    },
    story: [
      {
        title: "Isolation thermique",
        text:
          "Les vitrages performants limitent les pertes en hiver et réduisent la surchauffe en été. Un confort stable, sans effort."
      },
      {
        title: "Confort acoustique",
        text:
          "Verres feuilletés, intercalaires spécifiques : nous réduisons les nuisances sans alourdir les cadres."
      },
      {
        title: "Sécurité",
        text:
          "Les verres retardateurs d'effraction protègent, tout en conservant la transparence."
      }
    ],
    tabs: [
      {
        title: "Thermique",
        content:
          "Traitements basse émissivité, intercalaires chauds, remplissages optimisés : la performance s'accorde avec la finesse des profils."
      },
      {
        title: "Acoustique",
        content:
          "Solutions spécifiques pour zones urbaines ou littorales exposées. La maison reste silencieuse même ouverte sur l'extérieur."
      },
      {
        title: "Sécurité",
        content:
          "Vitrages feuilletés, anti-effraction, contrôle d'accès. Une protection intelligente, sans aspect défensif."
      },
      {
        title: "Décoratif",
        content:
          "Opacités, textures, teintes discrètes. L'intimité se construit avec élégance."
      }
    ],
    gallery: [
      {
        image: "/media/vitrage-1.jpg",
        title: "Clarté",
        description: "Une transparence nette et durable."
      },
      {
        image: "/media/vitrage-2.jpg",
        title: "Protection",
        description: "Un confort thermique stable."
      },
      {
        image: "/media/vitrage-3.jpg",
        title: "Silence",
        description: "Des ambiances apaisées."
      }
    ],
    cta: {
      title: "Comprendre vos options vitrage",
      description:
        "Nous expliquons chaque choix de verre en fonction de votre quotidien.",
      href: "/contact",
      label: "Choisir un vitrage"
    }
  },
  secondaVita: {
    hero: {
      title: "Seconda Vita",
      subtitle:
        "Une démarche circulaire, pour donner une seconde vie aux menuiseries tout en conservant une exigence esthétique.",
      image: "/media/hero-seconda.jpg"
    },
    story: [
      {
        title: "Réemploi contrôlé",
        text:
          "Nous sélectionnons des ensembles qui peuvent être remis à niveau. Chaque pièce est inspectée, rénovée et ajustée."
      },
      {
        title: "Rénovation responsable",
        text:
          "Seconda Vita réduit l'empreinte carbone sans sacrifier le confort. Les finitions sont sobres et maîtrisées."
      },
      {
        title: "Disponibilité réaliste",
        text:
          "Les stocks varient. Nous vous conseillons selon la disponibilité réelle, sans promesse hasardeuse."
      }
    ],
    cards: [
      {
        title: "Tri et contrôle",
        text:
          "Chaque élément est vérifié : étanchéité, quincaillerie, vitrage."
      },
      {
        title: "Reconditionnement",
        text:
          "Remise à niveau des joints, nettoyage, reprise des finitions."
      },
      {
        title: "Garantie adaptée",
        text:
          "Une garantie spécifique est proposée, claire et transparente."
      },
      {
        title: "Impact réduit",
        text:
          "Moins de matière première, un cycle de vie prolongé."
      }
    ],
    faq: [
      {
        question: "Les performances sont-elles comparables au neuf ?",
        answer:
          "Chaque produit reconditionné est validé selon un niveau de performance identifié. Nous vous informons clairement des caractéristiques et usages recommandés."
      },
      {
        question: "Puis-je personnaliser les finitions ?",
        answer:
          "Certaines finitions sont possibles selon les supports disponibles. Nous privilégions des teintes intemporelles et faciles à entretenir."
      },
      {
        question: "Quels délais prévoir ?",
        answer:
          "Les délais dépendent des stocks et du projet. Nous vous fournissons un calendrier réaliste dès la phase de sélection."
      }
    ],
    cta: {
      title: "Explorer la voie circulaire",
      description:
        "Seconda Vita est une alternative sérieuse pour conjuguer élégance et responsabilité.",
      href: "/contact",
      label: "Découvrir Seconda Vita"
    }
  },
  casapertura: {
    hero: {
      title: "Cas'Apertura",
      subtitle:
        "Un parcours client premium, de la première intention à la pose. Une relation claire, un projet apaisé.",
      image: "/media/hero-casapertura.jpg"
    },
    story: [
      {
        title: "Premier rendez-vous",
        text:
          "Nous écoutons votre usage, votre architecture, vos contraintes. La conversation établit un cadre honnête."
      },
      {
        title: "Projection",
        text:
          "Plans, échantillons, mise en situation. Vous visualisez les teintes, les profils, la luminosité."
      },
      {
        title: "Coordination",
        text:
          "Un interlocuteur unique assure la fluidité entre l'atelier, les fournisseurs et les équipes de pose."
      }
    ],
    services: [
      {
        title: "Conseil architectural",
        text:
          "Un accompagnement pour aligner ouvertures et volumes, en respectant l'esprit du lieu."
      },
      {
        title: "Gestion des interfaces",
        text:
          "Coordination avec les artisans et architectes pour éviter les retards."
      },
      {
        title: "Suivi post-pose",
        text:
          "Visite de réception, conseils d'entretien, disponibilité dans la durée."
      }
    ],
    agencies: [
      {
        title: "Ajaccio",
        text: "Showroom confidentiel sur rendez-vous."
      },
      {
        title: "Bastia",
        text: "Point de contact pour le Cap et la Balagne."
      },
      {
        title: "Porto-Vecchio",
        text: "Coordination sud et chantiers littoraux."
      }
    ],
    floatingGallery: [
      {
        image: "/media/gallery-1.jpg",
        title: "Immersion",
        description: "Visualisez les proportions et les matières."
      },
      {
        image: "/media/gallery-2.jpg",
        title: "Échantillons",
        description: "Teintes naturelles, textures maîtrisées."
      },
      {
        image: "/media/gallery-3.jpg",
        title: "Suivi",
        description: "Un accompagnement fluide jusqu'à la pose."
      }
    ],
    cta: {
      title: "Vivre l'expérience Cas'Apertura",
      description:
        "Une relation claire, une esthétique maîtrisée, un calendrier respecté.",
      href: "/contact",
      label: "Planifier un rendez-vous"
    }
  },
  pro: {
    hero: {
      title: "Espace Pro",
      subtitle:
        "Un portail réservé aux professionnels pour accéder rapidement aux informations clés.",
      image: "/media/hero-pro.jpg"
    },
    description:
      "Cet espace centralise les documents techniques, les tarifs, les stocks disponibles et le suivi SAV. L'accès se fait via un identifiant sécurisé. Il s'agit d'une interface de démonstration, sans connexion réelle.",
    panels: [
      {
        title: "Catalogue",
        text: "Fiches techniques, finitions, options disponibles."
      },
      {
        title: "Tarifs",
        text: "Grilles tarifaires par gamme et par configuration."
      },
      {
        title: "Stock",
        text: "Disponibilités en temps réel et délais estimés."
      },
      {
        title: "Commandes",
        text: "Suivi des commandes et historique des projets."
      },
      {
        title: "SAV",
        text: "Tickets ouverts, assistance technique, documentation."
      }
    ]
  },
  contact: {
    hero: {
      title: "Contact",
      subtitle:
        "Un projet en Corse ? Parlons d'ouverture, de lumière et de confort.",
      image: "/media/hero-contact.jpg"
    },
    info: [
      {
        title: "Coordonnées",
        text:
          "Apertura di Corsica — Ajaccio, Bastia, Porto-Vecchio. Échanges sur rendez-vous pour une écoute qualitative."
      },
      {
        title: "Accompagnement",
        text:
          "Nous répondons aux architectes, maîtres d'œuvre et particuliers, avec un même niveau de précision."
      }
    ]
  },
  mentions: {
    title: "Mentions légales",
    text:
      "Apertura di Corsica est une marque du groupe VISTA. Les informations présentées sont fournies à titre indicatif et peuvent évoluer. Pour toute demande, contactez-nous directement."
  }
};
