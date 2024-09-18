<template>
    <div class="documentation-page">
      <!-- Navbar -->
      <nav class="navbar">
        <!-- Logo à gauche -->
        <img class="logo" src="../../public/newlogo.png" alt="" />
        <!-- Boîte de recherche à droite -->
        <div class="search-box">
          <input type="text" placeholder="Rechercher..." v-model="searchQuery" />
          <i class="search-icon"></i> <!-- Icône de recherche -->
        </div>
      </nav>
  
      <!-- Contenu de la documentation -->
      <div class="documentation-content">
        <!-- Colonne gauche : Titres et Sous-titres (plus courte) -->
        <div class="titles-column">
          <h2>Partner Documentation</h2>
          <ul>
            <li v-for="title in filteredTitles" :key="title.id" @click="selectTitle(title)">
              {{ title.name }}
              <ul>
                <li v-for="subtitle in title.subtitles" :key="subtitle.id" @click="selectSubtitle(subtitle)">
                  {{ subtitle.name }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
  
        <!-- Colonne centrale : Détails du titre sélectionné -->
        <div class="details-column">
          <h2>Détails</h2>
          <div v-if="selectedTitle">
            <h3>{{ selectedTitle.name }}</h3>
            <p>{{ selectedTitle.details }}</p>
            <div v-if="selectedSubtitle">
              <h4>{{ selectedSubtitle.name }}</h4>
              <p>{{ selectedSubtitle.details }}</p>
            </div>
          </div>
          <div v-else>
            <p> Sélectionnez un titre pour voir les détails</p>
          </div>
        </div>
  
        <!-- Colonne droite : Axes des sous-titres sélectionnés -->
        <div class="axes-column">
          <h2> </h2>
          <div v-if="selectedSubtitle">
            <h3>{{ selectedSubtitle.name }}</h3>
            <ul>
              <li v-for="axe in selectedSubtitle.axes" :key="axe">{{ axe }}</li>
            </ul>
          </div>
          <div v-else>
            <p>Sélectionnez un sous-titre pour voir les axes</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IndexDigi',
    data() {
      return {
        searchQuery: "",
        titles: [
          {
            id: 1,
            name: "Introduction",
            details: "Cette section introduit l'API WhatsApp et présente un aperçu de ses fonctionnalités pour les services marketing.",
            subtitles: [
              {
                id: 1,
                name: "Présentation de l'API WhatsApp pour les services marketing",
                details: "L'API WhatsApp permet aux entreprises d'envoyer des messages automatisés à grande échelle tout en respectant les politiques de WhatsApp.",
                axes: ["Envoi de messages", "Modèles approuvés", "Suivi des performances"],
              },
              {
                id: 2,
                name: "Aperçu des fonctionnalités principales",
                details: "Les principales fonctionnalités incluent l'envoi de messages personnalisés, les modèles de message et la gestion des sessions utilisateur.",
                axes: ["Personnalisation", "Automatisation", "Gestion des réponses"],
              },
              {
                id: 3,
                name: "Cas d'utilisation typiques",
                details: "Les cas d'utilisation incluent les notifications de commande, le support client, et les mises à jour de produit.",
                axes: ["Notifications", "Support", "Alertes produit"],
              },
            ],
          },
          {
            id: 2,
            name: "Prérequis",
            details: "Cette section couvre les prérequis pour utiliser l'API WhatsApp, y compris les conditions d'accès et les connaissances techniques.",
            subtitles: [
              {
                id: 4,
                name: "Accès API et authentification",
                details: "Vous devez obtenir des clés API valides et configurer l'authentification via OAuth pour sécuriser les communications.",
                axes: ["Clés API", "OAuth 2.0", "Sécurité"],
              },
              {
                id: 5,
                name: "Configuration du compte WhatsApp Business",
                details: "Un compte WhatsApp Business est requis pour accéder à l'API. Il doit être configuré avec un numéro WhatsApp valide.",
                axes: ["Compte Business", "Numéro valide", "Vérification"],
              },
              {
                id: 6,
                name: "Connaissances requises en programmation",
                details: "Des connaissances en REST et JSON sont nécessaires pour comprendre les requêtes et réponses de l'API.",
                axes: ["REST", "JSON", "HTTP"],
              },
            ],
          },
          {
            id: 3,
            name: "Installation et Configuration",
            details: "Cette section décrit les étapes pour installer et configurer l'environnement de développement pour l'API.",
            subtitles: [
              {
                id: 7,
                name: "Installation de l'environnement de développement",
                details: "Vous devez installer Node.js et NPM pour configurer l'environnement de développement pour l'API.",
                axes: ["Node.js", "NPM", "IDE"],
              },
              {
                id: 8,
                name: "Guide pour obtenir et configurer les clés d'API",
                details: "Cette section explique comment obtenir les clés d'API et les configurer pour l'intégration.",
                axes: ["Obtenir des clés", "Configuration", "Sécurité"],
              },
              {
                id: 9,
                name: "Configuration des webhooks",
                details: "Les webhooks permettent à l'API de notifier votre système en temps réel. Cette section couvre la configuration des endpoints.",
                axes: ["Endpoints", "Réponses en temps réel", "Sécurité"],
              },
            ],
          },
          {
            id: 4,
            name: "Concepts de Base",
            details: "Introduction aux concepts essentiels de l'API, y compris les messages, templates et gestion des utilisateurs.",
            subtitles: [
              {
                id: 10,
                name: "Modèle de données de l'API WhatsApp",
                details: "L'API suit un modèle de données structuré pour les messages, les utilisateurs, et les templates.",
                axes: ["Messages", "Utilisateurs", "Templates"],
              },
              {
                id: 11,
                name: "Explication des concepts clés",
                details: "Cette section explique les principaux concepts comme les messages, templates, et sessions dans l'API.",
                axes: ["Messages", "Templates", "Sessions"],
              },
              {
                id: 12,
                name: "Gestion des sessions et des utilisateurs",
                details: "Les sessions utilisateur sont gérées automatiquement par l'API et ont une durée limitée.",
                axes: ["Durée de session", "Expiration", "Reconnexion"],
              },
            ],
          },
          // Continuer pour les autres sections
          {
            id: 5,
            name: "Guide d'Utilisation",
            details: "Instructions détaillées pour utiliser l'API WhatsApp, incluant l'envoi de messages, la gestion des contacts et la récupération des messages.",
            subtitles: [
              {
                id: 13,
                name: "Envoi de messages simples",
                details: "Cette section explique comment envoyer des messages texte via l'API WhatsApp.",
                axes: ["Texte", "Multimédia", "Confirmation d'envoi"],
              },
              {
                id: 14,
                name: "Utilisation des modèles de message",
                details: "Vous pouvez utiliser des modèles de message pré-approuvés pour envoyer des notifications aux utilisateurs.",
                axes: ["Modèles", "Personnalisation", "Approvals"],
              },
              {
                id: 15,
                name: "Gestion des contacts et des listes de diffusion",
                details: "L'API permet de gérer les contacts et d'envoyer des messages à des listes de diffusion.",
                axes: ["Groupes", "Diffusion", "Segmentation"],
              },
              {
                id: 16,
                name: "Suivi et récupération des messages",
                details: "Cette section couvre comment suivre l'état des messages envoyés et récupérer les réponses.",
                axes: ["Statut", "Réponses", "Rapports"],
              },
            ],
          },
        ],
        selectedTitle: null,
        selectedSubtitle: null,
      };
    },
    computed: {
      filteredTitles() {
        if (this.searchQuery === "") return this.titles;
        return this.titles.filter((title) =>
          title.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      selectTitle(title) {
        this.selectedTitle = title;
        this.selectedSubtitle = null;
      },
      selectSubtitle(subtitle) {
        this.selectedSubtitle = subtitle;
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Arial, sans-serif;
  }
  
  .documentation-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
 
  }
  
 
  .navbar {
    height: 100px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: white;
    position: sticky;
    top: 0 ; }
  
  .logo {
    height: 50px;
    width: 300px;
  }
  
  .search-box {
    position: relative;
    width: 450px;
  }
  
  .search-box input {
    width: 100%;
    padding: 0.5rem 2rem;
    border-radius: 4px 6px;
    border: none;
    background-color: #f1f1f1;
    color : rgba(89,71,255,255);
  }
  
  .search-box .search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 1.2rem;
    height: 1.2rem;
    background-image: url('https://img.icons8.com/ios-filled/50/search.png');
    background-size: contain;
    background-repeat: no-repeat;
    color : rgba(89,71,255,255);
  }
  
  .documentation-content {
    display: flex;
    flex-grow: 1;
  }
  
  .titles-column,
  .axes-column {
    width: 20%;
    padding: 1rem;
    overflow-y: auto;
  }
  
  .titles-column {
    background-color: white;
    border-radius: 30px;
  }
  
  .titles-column ul,
  .axes-column ul {
    list-style-type: none;
    padding-top: 2px;
  }
  
  .titles-column li,
  .axes-column li {
    padding: 0.5rem 0;
    cursor: pointer;
  }
  
  /* Hover différencié */
  .titles-column li:hover {
    background-color: #f1f1f1 ; 
  }
  
  .titles-column li:active {
    background-color:  rgba(89,71,255,255); ; 
    color : rgba(89,71,255,255);;
  }

  .titles-column li ul li:hover {
    background-color:  white; 
  }
  
  .axes-column li:hover {
    background-color: #ff6347; /* Rouge */
  }
  
  .details-column {
    padding: 70px ;
    width: 60%;
   margin:  10px 10 px;
    overflow-y: auto;
  }
  
  .axes-column {
    background-color: #f9f9f9;
    border-radius: 30px;
  }
  
  .axes-column ul {
    list-style-type: disc;
    padding-left: 1rem;
  }
  </style>
  