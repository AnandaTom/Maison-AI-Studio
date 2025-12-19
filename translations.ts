/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const translations = {
  en: {
    nav: {
      solutions: "Solutions",
      results: "Results",
      about: "About",
      cta: "Book a Call"
    },
    hero: {
      badge: "Maison IA Studio • Bali",
      title: "The AI Automation Partner for",
      titleSpan1: "Hospitality",
      titleSpan2: "Wellness",
      titleSpan3: "Retail",
      subtitle: "We build intelligent automation systems that eliminate repetitive tasks, cut platform fees, and let your team focus on what matters — delivering exceptional guest experiences.",
      cta: "Book Your Free Discovery Call",
      cardLabel: "E-Com Automation",
      cardValue: "+$120K Generated"
    },
    socialProof: {
      stats: [
        { val: "+$120K", label: "generated in e-com revenue" },
        { val: "80%", label: "admin time reduced" },
        { val: "5x", label: "more bookings" },
        { val: "+300%", label: "revenue growth" },
      ],
      trust: {
        jobSuccess: "100% Job Success",
        topRated: "Top Rated",
        certified: "Certified n8n Expert",
        maker: "Part of #1 AI Automation Paid Community in the world"
      }
    },
    solutions: {
      headline: "Tailored AI Systems for Your Industry",
      subheadline: "We specialize in hospitality, wellness, and retail. Here's how we help each industry thrive.",
      tabs: {
        restaurants: "Restaurants & Cafés",
        hotels: "Hotels & Villas",
        wellness: "Wellness & Fitness",
        retail: "Shops & Retail"
      },
      content: {
        restaurants: {
          tag: "RESTAURANTS & CAFÉS SOLUTION",
          headline: "Stop Losing 25-30% to Delivery Platforms",
          subheadline: "Every Grab or Gojek order costs you 25-30% in commissions. For a café doing 350 orders/month at 200K IDR average, that's ~20M IDR/month ($1,200) going to platforms — $14,400/year you could keep.",
          videoLabel: "We create an AI-powered system connected with WhatsApp & Grab Express API to drastically reduce commissions.",
          whatWeBuild: {
            title: "What we build:",
            items: [
              { title: "AI WhatsApp Chatbot", desc: "Customers order directly via WhatsApp with natural conversation (not just forms)" },
              { title: "POS Integration", desc: "Orders go straight to your kitchen system (Take App, Square, Toast, etc.)" },
              { title: "Grab Express API", desc: "Automatic delivery booking + real-time tracking sent to customers" },
              { title: "Customer Database", desc: "Capture emails, phones, order history (platforms give you zero data)" },
              { title: "Multi-language", desc: "Auto-detects English, Indonesian, French" }
            ]
          },
          howItWorks: {
            title: "How it works:",
            steps: [
              { title: "Connect", desc: "Customer messages WhatsApp via Google Maps, QR code, or Instagram." },
              { title: "AI Order", desc: "AI takes order conversationally." },
              { title: "POS Sync", desc: "Order automatically hits your POS and kitchen screen. If you don't have a POS, we create one for you linked to WhatsApp." },
              { title: "Driver Booking", desc: "System auto-books a Grab driver once the order is marked ready." },
              { title: "Live Tracking", desc: "Customer gets real-time updates: 'Driver assigned → Picked up → Arriving'." },
              { title: "Reputation", desc: "We automatically send a review request for better reputations and more testimonies on google to drive more revenue." }
            ]
          },
          impact: {
            title: "Expected Impact (for 350 orders/month with Grab):",
            rows: [
              { label: "Commission saved", val: "~$1,200/month" },
              { label: "Staff time saved", val: "~$1,000/month" }
            ],
            total: "~$2,200/month | $26,400/year",
            cta: "See How It Works →"
          }
        },
        hotels: {
          tag: "HOTELS & VILLAS SOLUTION",
          headline: "The 24/7 Concierge that Never Sleeps",
          subheadline: "Guests expect instant answers. If they wait hours for check-in info or pool hours, they've already checked out mentally. Our AI handles 80% of guest inquiries instantly across your Website and WhatsApp.",
          videoLabel: "Our Multilingual AI Concierge integrates seamlessly into your website and WhatsApp to boost direct bookings.",
          whatWeBuild: {
            title: "What we build:",
            items: [
              { title: "Multilingual AI Concierge", desc: "Integrated on your website and WhatsApp to handle inquiries 24/7 in 15+ languages." },
              { title: "Real-time PMS Sync", desc: "Direct connection to your PMS (Cloudbeds, Mews, Little Hotelier) for bookings." },
              { title: "Digital Guest Guide", desc: "Instant answers for breakfast, WiFi, transfers, and hyper-local recommendations." },
              { title: "Maintenance Ticketing", desc: "Guests report AC or plumbing issues via chat; system logs it for your team." },
              { title: "Direct Booking Engine", desc: "Reduce OTA commissions by capturing bookings directly within the chat." }
            ]
          },
          howItWorks: {
            title: "How it works:",
            steps: [
              { title: "Inquiry", desc: "Guest asks a question on your website or WhatsApp (e.g., 'Do you have late check-out?')." },
              { title: "AI Response", desc: "AI answers instantly based on your custom house rules and local knowledge." },
              { title: "Direct Booking", desc: "If they want to stay, AI checks live availability via PMS and takes the booking." },
              { title: "Stay Support", desc: "During stay, guests request towels or book tours through the same AI thread." },
              { title: "Seamless Checkout", desc: "AI handles checkout info and automatically sends a personalized review link." }
            ]
          },
          impact: {
            title: "Expected Impact for a 20-Unit Property:",
            rows: [
              { label: "Direct booking increase", val: "+15-20%" },
              { label: "Staff workload saved", val: "60-80%" },
              { label: "Guest response time", val: "< 3 sec" }
            ],
            total: "Higher Direct Revenue | 5-Star Reputation",
            cta: "Transform Your Guest Experience →"
          }
        },
        wellness: {
          tag: "WELLNESS & FITNESS SOLUTION",
          headline: "Fill Your Schedule, Kill the No-Shows",
          subheadline: "Running a spa, yoga studio, or gym means constant back-and-forth on bookings. We automate the entire journey from initial inquiry to upfront payment, letting your team focus on the service.",
          videoLabel: "Automate your entire booking flow with WhatsApp AI that handles scheduling, payments, and reminders.",
          whatWeBuild: {
            title: "What we build:",
            items: [
              { title: "Conversational Booking Bot", desc: "Clients check availability and book sessions directly via WhatsApp conversation." },
              { title: "Upfront Payments", desc: "Take deposits or full payments in-chat to secure spots and eliminate no-shows." },
              { title: "Smart Reminder System", desc: "Automated multi-step reminders (24h and 2h before) to ensure attendance." },
              { title: "Practitioner Sync", desc: "Real-time calendar sync for all your teachers, therapists, or trainers." },
              { title: "Re-engagement Flows", desc: "AI follows up with clients 2 weeks after their last visit to suggest a re-booking." }
            ]
          },
          howItWorks: {
            title: "How it works:",
            steps: [
              { title: "The Chat", desc: "Customer messages you to book a massage or class." },
              { title: "Live Calendar", desc: "AI checks your schedule and suggests available time slots." },
              { title: "Instant Payment", desc: "AI sends a payment link; booking is only confirmed once paid." },
              { title: "Confirmation", desc: "Guest gets a calendar invite and a WhatsApp confirmation instantly." },
              { title: "Reminders", desc: "Strategic reminders are sent to ensure the guest shows up on time." },
              { title: "Next Visit", desc: "AI follows up after the session to ask for a review and suggest the next date." }
            ]
          },
          impact: {
            title: "Expected Impact for a Busy Studio:",
            rows: [
              { label: "No-show reduction", val: "40-60%" },
              { label: "Admin time saved", val: "15+ hours/week" },
              { label: "Average ticket value", val: "+12%" }
            ],
            total: "Full Calendar | Zero Admin Friction",
            cta: "Automate Your Bookings Now →"
          }
        },
        retail: {
          headline: "Stop Drowning in Inventory Chaos & Manual Tasks",
          description: "Running a retail business in Bali means juggling inventory across locations, managing staff schedules, and trying to keep up with customer inquiries — all while actually selling. Most shop owners spend 15+ hours a week on tasks that could be automated.",
          features: [
            { title: "Smart Inventory Management", desc: "Real-time stock tracking across all locations with automatic low-stock alerts sent to WhatsApp." },
            { title: "Auto-Reordering System", desc: "AI predicts stock needs and generates supplier orders automatically — never run out of bestsellers." },
            { title: "AI Shopping Assistant", desc: "Website or WhatsApp chatbot that answers product questions, checks availability, and recommends items 24/7." },
            { title: "Abandoned Cart Recovery", desc: "Automatic WhatsApp/email follow-ups that recover 10-15% of abandoned carts." },
            { title: "Staff Scheduling & Payroll", desc: "Automated shift planning, time tracking, and payroll calculations across multiple locations." },
            { title: "E-commerce Sync", desc: "Seamless integration with Shopify, WooCommerce, Tokopedia — inventory synced everywhere." }
          ],
          impact: ["Save 15+ hours/week on inventory management", "Never miss a sale due to stockouts", "Turn browsers into buyers with 24/7 AI assistance"],
          ctaLabel: "Book a Free Inventory Audit",
          howItWorks: [
            { title: "Connect Your Systems", desc: "We integrate with your POS, e-commerce platform, and existing tools (Shopify, Square, Airtable, Google Sheets, etc.)" },
            { title: "Set Your Rules", desc: "Define stock thresholds, alert preferences, reorder quantities, and staff scheduling rules." },
            { title: "Let AI Handle the Rest", desc: "Stock drops below threshold → You get a WhatsApp alert. Customer asks about a product → AI chatbot responds instantly." },
            { title: "Review & Optimize", desc: "Monthly reports show time saved, sales recovered, and stockouts prevented. We continuously improve your systems." }
          ],
          expectedImpact: {
             rows: [
               { label: "saved on admin tasks", val: "15+ hours/week" },
               { label: "abandoned carts recovered", val: "10-15%" },
               { label: "stock accuracy achieved", val: "95%+" },
               { label: "fewer stockouts", val: "40-60%" },
               { label: "in recovered revenue", val: "$500-2,000/month" },
             ],
             result: "Real result: We helped a Bali swimwear brand save 15 hours/week on inventory management alone."
          }
        }
      },
      solutionLabel: "Solution",
      whatWeBuild: "What We Build",
      seeHow: "See How It Works",
      howItWorksTitle: "How It Works",
      expectedImpactTitle: "Expected Impact"
    },
    services: {
      headline: "Beyond Industry-Specific Solutions",
      subheadline: "We build custom automation systems for any operational challenge.",
      items: [
        { title: "Lead Gen", desc: "Capture & qualify prospects automatically." },
        { title: "Client Onboarding", desc: "Smooth, automated welcome journeys." },
        { title: "Content Creation", desc: "AI-generated blogs, emails & socials." },
        { title: "Sales Pipelines", desc: "Automated CRM workflows & deal tracking." },
        { title: "Invoicing", desc: "Auto-quotes, invoices & payment reminders." },
        { title: "Custom Integrations", desc: "Connecting all your tools via API." },
      ],
      cta: "Have a specific need? Let's talk"
    },
    caseStudies: {
      headline: "Case Studies",
      subheadline: "Real results from intelligent automation.",
      items: [
        {
          tags: ["Agency", "GHL", "Finance"],
          title: "$10K to $40K/mo in 3 months",
          result: "+300% growth",
          detail: "Helped a digital marketing agency scale operations with automated client management, reporting, and sales pipelines."
        },
        {
          tags: ["Wellness", "Bookings", "Growth"],
          title: "5x Bookings & $5K/mo",
          result: "-80% admin time",
          detail: "Transformed a therapist's practice with automated booking, reminders, and client follow-up."
        },
        {
          tags: ["Typeform", "Reporting", "Scoring"],
          title: "AI Survey Reports & Scoring",
          result: "100% autonomous",
          detail: "Built a system that automatically analyzes survey responses and generates scored reports."
        },
        {
          tags: ["E-com", "Logistics", "Time-Saving"],
          title: "15 Hours Saved Per Week",
          result: "One single automation",
          detail: "Automated inventory and supplier management for a Bali swimwear brand."
        },
        {
          tags: ["E-com", "Gen AI", "Profitability"],
          title: "+$120K in One Year",
          result: "AI-powered e-commerce",
          detail: "Integrated AI into an e-commerce store for optimized funnels and operations."
        }
      ]
    },
    techStack: {
      headline: "Tech Stack & Integrations",
      subheadline: "We integrate with hundreds of tools. Here are some we use daily.",
      note: "Don't see your tool? We probably integrate with it. Ask us."
    },
    about: {
      headline: "A Partner, Not Just a Vendor",
      p1: "We're a two-person team based in Bali, obsessed with building systems that actually work.",
      p2: "We've helped a marketing agency scale from $10K to $40K/month in 3 months. We've built inventory systems that save 15 hours a week. We've created AI chatbots that handle hundreds of customer conversations daily.",
      list: [
        "Full transparency — you know exactly what we build and why",
        "Simple systems — no overcomplicated setups, just solutions that last",
        "Measurable results — we talk in hours saved and dollars earned"
      ],
      p3: "We're not a big agency with layers of account managers. We're two builders who care deeply about your results."
    },
    finalCTA: {
      headline: "Ready to Automate Your Operations?",
      text: "Book a free 30-minute discovery call. We'll analyze your processes together and show you exactly what can be automated — and how much you could save.",
      button: "Book Your Free Call"
    },
    footer: {
      copyright: "© 2025 Maison IA Studio. All rights reserved."
    },
    chatbot: {
      online: "AI Assistant • Online",
      placeholder: "Type your message...",
      welcome: "Hey! 👋 Welcome to Maison IA Studio. I'm here to help you learn about our AI automation solutions for hospitality and wellness businesses in Bali.\n\nWhat brings you here today?",
      quickReplies: {
        restaurant: "I run a restaurant 🍽️",
        hotel: "I run a hotel 🏨",
        wellness: "I run a wellness business 🧘",
        solutions: "Tell me about solutions 💬",
        howWork: "How does it work?",
        bookCall: "Book a discovery call",
        whatsapp: "Chat on WhatsApp"
      }
    }
  },
  fr: {
    nav: {
      solutions: "Solutions",
      results: "Résultats",
      about: "À Propos",
      cta: "Réserver un Appel"
    },
    hero: {
      badge: "Maison IA Studio • Bali",
      title: "Le Partenaire d'Automatisation IA pour",
      titleSpan1: "l'Hospitalité",
      titleSpan2: "le Bien-être",
      titleSpan3: "le Retail",
      subtitle: "Nous créons des systèmes intelligents qui éliminent les tâches répétitives, réduisent les frais de plateforme et permettent à votre équipe de se concentrer sur l'essentiel : l'expérience client.",
      cta: "Réserver un Appel Découverte",
      cardLabel: "Automatisation E-Com",
      cardValue: "+120K$ Générés"
    },
    socialProof: {
      stats: [
        { val: "+120K$", label: "générés en revenus e-com" },
        { val: "80%", label: "de temps admin réduit" },
        { val: "5x", label: "plus de réservations" },
        { val: "+300%", label: "croissance du CA" },
      ],
      trust: {
        jobSuccess: "100% Job Success",
        topRated: "Top Rated",
        certified: "Expert Certifié n8n",
        maker: "Membre de la 1ère communauté payante d'automatisation IA au monde"
      }
    },
    solutions: {
      headline: "Systèmes IA sur-mesure pour votre industrie",
      subheadline: "Nous sommes spécialisés dans l'hospitalité, le bien-être et le retail. Voici comment nous aidons chaque industrie.",
      tabs: {
        restaurants: "Restaurants & Cafés",
        hotels: "Hôtels & Villas",
        wellness: "Bien-être & Fitness",
        retail: "Boutiques & Retail"
      },
      content: {
        restaurants: {
          tag: "SOLUTION RESTAURANTS & CAFÉS",
          headline: "Arrêtez de perdre 25-30% sur les plateformes",
          subheadline: "Chaque commande Grab ou Gojek vous coûte 25-30% de commission. Pour un café faisant 350 commandes/mois à 200K IDR, c'est ~20M IDR/mois (1 200 $) qui partent aux plateformes — 14 400 $/an que vous pourriez garder.",
          videoLabel: "Nous créons un système piloté par l'IA connecté aux API WhatsApp et Grab Express pour réduire radicalement vos commissions.",
          whatWeBuild: {
            title: "Ce que nous créons :",
            items: [
              { title: "Chatbot WhatsApp IA", desc: "Les clients commandent directement sur WhatsApp par conversation naturelle (pas seulement des formulaires)" },
              { title: "Intégration POS", desc: "Les commandes arrivent direct en cuisine (Take App, Square, Toast, etc.)" },
              { title: "API Grab Express", desc: "Réservation auto du livreur + suivi temps réel envoyé aux clients" },
              { title: "Base de Données Clients", desc: "Capture emails, téléphones, historique (les plateformes ne vous donnent rien)" },
              { title: "Multi-langue", desc: "Détection auto Anglais, Indonésien, Français" }
            ]
          },
          howItWorks: {
            title: "Comment ça marche :",
            steps: [
              { title: "Connexion", desc: "Le client envoie un message (via Google Maps, QR code, Instagram)." },
              { title: "Commande IA", desc: "L'IA prend la commande en langage naturel." },
              { title: "Sync POS", desc: "La commande arrive direct au POS / en cuisine. Si vous n'avez pas de POS, nous en créons un pour vous lié à WhatsApp." },
              { title: "Livreur Auto", desc: "Le système réserve un chauffeur Grab dès que c'est prêt." },
              { title: "Suivi Live", desc: "Mises à jour : 'Chauffeur assigné → Récupéré → Arrive dans 5 min'." },
              { title: "Réputation", desc: "Nous envoyons automatiquement une demande d'avis pour améliorer votre réputation Google et obtenir plus de témoignages, boostant ainsi votre chiffre d'affaires." }
            ]
          },
          impact: {
            title: "Impact Attendu (pour 350 commandes/mois avec Grab) :",
            rows: [
              { label: "Commissions économisées", val: "~1 200 $/mois" },
              { label: "Temps staff gagné", val: "~1 000 $/mois" }
            ],
            total: "~2 200 $/mois | 26 400 $/an",
            cta: "Voir comment ça marche →"
          }
        },
        hotels: {
          tag: "SOLUTION HÔTELS & VILLAS",
          headline: "Le Concierge 24/7 qui ne dort jamais",
          subheadline: "Les clients attendent des réponses immédiates. S'ils attendent des heures pour une info check-in, ils sont déjà ailleurs. Notre IA gère 80% des demandes instantanément sur votre Site et WhatsApp.",
          videoLabel: "Notre Concierge IA Multilingue s'intègre à votre site web et WhatsApp pour booster les réservations directes.",
          whatWeBuild: {
            title: "Ce que nous créons :",
            items: [
              { title: "Concierge IA Multilingue", desc: "Intégré sur votre site et WhatsApp pour gérer les demandes 24/7 en 15+ langues." },
              { title: "Sync PMS Temps Réel", desc: "Connexion directe à votre PMS (Cloudbeds, Mews) pour les réservations." },
              { title: "Guide Digital Invité", desc: "Réponses instantanées (petit-déjeuner, WiFi, transferts) et recommandations locales." },
              { title: "Tickets Maintenance", desc: "Les clients signalent un souci via chat ; le système l'enregistre pour votre équipe." },
              { title: "Moteur de Réservation Direct", desc: "Réduisez les commissions OTA en capturant les réservations direct dans le chat." }
            ]
          },
          howItWorks: {
            title: "Comment ça marche :",
            steps: [
              { title: "Demande", desc: "Le client pose une question sur votre site ou WhatsApp (ex: 'Puis-je avoir un check-out tardif ?')." },
              { title: "Réponse IA", desc: "L'IA répond instantanément selon vos règles et connaissances locales." },
              { title: "Réservation", desc: "S'il veut séjourner, l'IA vérifie les disponibilités PMS et prend la réservation." },
              { title: "Support Séjour", desc: "Pendant le séjour, les clients demandent des services ou réservent des tours via le chat." },
              { title: "Check-out Fluide", desc: "L'IA gère les infos de départ et envoie un lien d'avis Google personnalisé." }
            ]
          },
          impact: {
            title: "Impact Attendu pour une Propriété de 20 Unités :",
            rows: [
              { label: "Hausse réservations directes", val: "+15-20%" },
              { label: "Temps staff gagné", val: "60-80%" },
              { label: "Temps de réponse", val: "< 3 sec" }
            ],
            total: "Revenus Directs Max | Réputation 5 Étoiles",
            cta: "Transformez l'Expérience Client →"
          }
        },
        wellness: {
          tag: "SOLUTION BIEN-ÊTRE & FITNESS",
          headline: "Remplissez votre agenda, tuez les No-Shows",
          subheadline: "Gérer un spa ou studio demande des allers-retours constants. Nous automatisons tout le parcours, de la demande au paiement, pour que votre équipe se concentre sur le soin.",
          videoLabel: "Automatisez tout votre flux de réservation avec une IA WhatsApp qui gère planning, paiements et rappels.",
          whatWeBuild: {
            title: "Ce que nous créons :",
            items: [
              { title: "Bot de Réservation Conversationnel", desc: "Les clients vérifient les dispos et réservent directement via une conversation WhatsApp." },
              { title: "Paiements d'Acompte", desc: "Prenez des acomptes ou paiements complets dans le chat pour sécuriser les créneaux." },
              { title: "Système de Rappels Intelligent", desc: "Rappels auto multi-étapes (24h et 2h avant) pour garantir la présence." },
              { title: "Sync Praticiens", desc: "Synchronisation calendrier temps réel pour tous vos profs ou thérapeutes." },
              { title: "Relances Automatiques", desc: "L'IA recontacte les clients 2 semaines après leur visite pour suggérer un nouveau RDV." }
            ]
          },
          howItWorks: {
            title: "Comment ça marche :",
            steps: [
              { title: "Le Chat", desc: "Le client envoie un message pour réserver un massage ou un cours." },
              { title: "Calendrier Live", desc: "L'IA vérifie votre planning et suggère des créneaux disponibles." },
              { title: "Paiement Instantané", desc: "L'IA envoie un lien de paiement ; le créneau n'est bloqué qu'une fois payé." },
              { title: "Confirmation", desc: "Le client reçoit une invitation calendrier et une confirmation WhatsApp." },
              { title: "Rappels", desc: "Des rappels stratégiques sont envoyés pour garantir la venue du client." },
              { title: "Prochaine Visite", desc: "L'IA assure le suivi post-séance pour demander un avis et suggérer une date." }
            ]
          },
          impact: {
            title: "Impact Attendu pour un Studio Actif :",
            rows: [
              { label: "Réduction des No-shows", val: "40-60%" },
              { label: "Temps admin gagné", val: "15+ heures/semaine" },
              { label: "Panier moyen", val: "+12%" }
            ],
            total: "Agenda Complet | Zéro Friction Admin",
            cta: "Automatisez Vos Réservations →"
          }
        },
        retail: {
          headline: "Ne vous noyez plus dans le chaos des stocks & les tâches manuelles",
          description: "Gérer un commerce à Bali signifie jongler avec les stocks entre plusieurs lieux, gérer les plannings et répondre aux clients — tout en essayant de vendre. La plupart des propriétaires passent 15h+ par semaine sur des tâches automatisables.",
          features: [
            { title: "Gestion de Stock Intelligente", desc: "Suivi temps réel multi-sites avec alertes stock bas sur WhatsApp." },
            { title: "Réapprovisionnement Auto", desc: "L'IA prédit les besoins et génère les commandes fournisseurs." },
            { title: "Assistant Shopping IA", desc: "Chatbot site/WhatsApp qui répond aux questions produits et recommande des articles 24/7." },
            { title: "Relance Paniers Abandonnés", desc: "Suivi auto WhatsApp/email récupérant 10-15% des paniers." },
            { title: "Planning & Paie Staff", desc: "Planification auto, suivi des heures et calcul des paies." },
            { title: "Sync E-commerce", desc: "Intégration fluide Shopify, WooCommerce, Tokopedia — stock synchronisé partout." }
          ],
          impact: ["Économisez 15+ heures/semaine sur la gestion de stock", "Ne ratez jamais une vente par manque de stock", "Transformez les visiteurs en acheteurs avec une assistance IA 24/7"],
          ctaLabel: "Réserver un Audit d'Inventaire Gratuit",
          howItWorks: [
            { title: "Connectez vos outils", desc: "Nous intégrons votre POS, e-commerce (Shopify, Square) et outils actuels." },
            { title: "Définissez vos règles", desc: "Seuils de stock, préférences d'alertes, quantités de réappro, règles staff." },
            { title: "Laissez l'IA gérer", desc: "Stock bas = alerte WhatsApp. Question client = réponse IA instantanée." },
            { title: "Optimisez", desc: "Rapports mensuels sur le temps gagné et les ventes récupérées. Nous améliorons continuellement." }
          ],
          expectedImpact: {
             rows: [
               { label: "économisées sur l'admin", val: "15+ heures/semaine" },
               { label: "paniers abandonnés récupérés", val: "10-15%" },
               { label: "précision de stock", val: "95%+" },
               { label: "moins de ruptures de stock", val: "40-60%" },
               { label: "de revenus récupérés", val: "500-2 000 $/mois" },
             ],
             result: "Résultat réel : Une marque de maillots à Bali a économisé 15h/semaine juste sur l'inventaire."
          }
        }
      },
      solutionLabel: "Solution",
      whatWeBuild: "Ce que nous créons",
      seeHow: "Voir comment ça marche",
      howItWorksTitle: "How It Works",
      expectedImpactTitle: "Expected Impact"
    },
    services: {
      headline: "Au-delà des Solutions Industrielles",
      subheadline: "Nous construisons des systèmes sur-mesure pour tout défi opérationnel.",
      items: [
        { title: "Génération de Leads", desc: "Capturez & qualifiez les prospects automatiquement." },
        { title: "Onboarding Client", desc: "Parcours de bienvenue fluides et automatisés." },
        { title: "Création de Contenu", desc: "Blogs, emails & réseaux sociaux générés par IA." },
        { title: "Pipelines de Vente", desc: "Flux CRM automatisés & suivi des deals." },
        { title: "Facturation", desc: "Devis auto, factures & rappels de paiement." },
        { title: "Intégrations Sur-Mesure", desc: "Connexion de tous vos outils via API." },
      ],
      cta: "Vous avez un besoin spécifique ? Discutons-en"
    },
    caseStudies: {
      headline: "Case Studies",
      subheadline: "Real results from intelligent automation.",
      items: [
        {
          tags: ["Agence", "GHL", "Finance"],
          title: "10K$ à 40K$/mois en 3 mois",
          result: "+300% croissance",
          detail: "Aidé une agence marketing à scaler ses opérations avec gestion client, reporting et pipelines de vente automatisés."
        },
        {
          tags: ["Bien-être", "Booking", "Croissance"],
          title: "5x Réservations & 5K$/mois",
          result: "-80% temps admin",
          detail: "Transformé l'activité d'un thérapeute avec réservation automatisée, rappels et suivi client."
        },
        {
          tags: ["Typeform", "Reporting", "Scoring"],
          title: "Rapports d'Enquête IA",
          result: "100% autonome",
          detail: "Création d'un système analysant automatiquement les réponses aux enquêtes et générant des rapports notés."
        },
        {
          tags: ["E-com", "Logistique", "Gain de temps"],
          title: "15 Heures Gagnées par Semaine",
          result: "Une seule automation",
          detail: "Automatisation de l'inventaire et de la gestion fournisseurs pour une marque de maillots à Bali."
        },
        {
          tags: ["E-com", "Gen AI", "Profitability"],
          title: "+120K$ en un an",
          result: "E-commerce propulsé par IA",
          detail: "Intégration de l'IA dans une boutique e-commerce pour optimiser les funnels et les opérations."
        }
      ]
    },
    techStack: {
      headline: "Tech Stack & Integrations",
      subheadline: "Nous intégrons des centaines d'outils. Voici ceux que nous utilisons quotidiennement.",
      note: "Vous ne voyez pas votre outil ? Nous l'intégrons probablement. Demandez-nous."
    },
    about: {
      headline: "Un Partenaire, pas juste un Prestataire",
      p1: "Nous sommes une équipe de deux basée à Bali, obsédée par la création de systèmes qui fonctionnent vraiment.",
      p2: "Nous avons aidé une agence à passer de 10K à 40K$/mois. Nous avons créé des systèmes d'inventaire économisant 15h/semaine. Nous avons déployé des chatbots gérant des centaines de conversations.",
      list: [
        "Transparence totale — vous savez exactement ce qu'on construit",
        "Systèmes simples — pas d'usines à gaz, juste des solutions durables",
        "Résultats mesurables — on parle en heures gagnées et dollars générés"
      ],
      p3: "Nous ne sommes pas une grosse agence avec des gestionnaires de compte. Nous sommes deux 'builders' investis dans vos résultats."
    },
    finalCTA: {
      headline: "Prêt à Automatiser Vos Opérations ?",
      text: "Réservez un appel découverte gratuit de 30 min. Nous analyserons vos processus et vous montrerons exactement ce qui peut être automatisé — et combien vous pourriez économiser.",
      button: "Réserver Votre Appel Gratuit"
    },
    footer: {
      copyright: "© 2025 Maison IA Studio. Tous droits réservés."
    },
    chatbot: {
      online: "Assistant IA • En ligne",
      placeholder: "Écrivez votre message...",
      welcome: "Bonjour ! 👋 Bienvenue chez Maison IA Studio. Je suis là pour vous renseigner sur nos solutions d'automatisation IA pour l'hospitalité et le bien-être à Bali.\n\nQue puis-je faire pour vous ?",
      quickReplies: {
        restaurant: "Je gère un restaurant 🍽️",
        hotel: "Je gère un hôtel 🏨",
        wellness: "Je gère un business bien-être 🧘",
        solutions: "Parlez-moi des solutions 💬",
        howWork: "Comment ça marche ?",
        bookCall: "Réserver un appel",
        whatsapp: "Discuter sur WhatsApp"
      }
    }
  }
};
