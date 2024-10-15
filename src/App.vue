<template>
  <div class="documentation-page">
    <!-- Navbar -->
    <nav class="navbar">
      <!-- Logo à gauche -->
      <img class="logo" src="../public/newlogo.png" alt="Logo" />
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
        <h2>Digi Documentation</h2>
        <ul>
          
          <li v-for="(section, index) in filteredSections" :key="index">
            
              <div class="bigt">
                
              <b>{{ section.title }}</b>
              <li class="element" v-for="(item, subIndex) in section.items" :key="subIndex">
                <router-link :to="item.link">{{ item.label }} </router-link>
              </li></div>
            
          </li>
        </ul>
      </div>

      <!-- Colonne centrale : Contenu des routes -->
      <div class="details-column">
        <router-view></router-view>
      
      </div>

      <!-- Colonne droite : Axes des sous-titres sélectionnés -->
      <div class="axes-column">
        <h2>Axes</h2>
        <p>Sélectionnez un élément dans le menu de gauche pour voir les détails.</p>
      </div>
    </div>
  </div>




  
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      searchQuery: '',
      sections: [
        {
          title: 'Premiers pas',
          items: [
            { label: 'Présentation de l\'API WhatsApp', link: '/presentation-api' },
            { label: 'Fonctionnalités', link: '/fonctionnalites' },
            { label: 'Cas d\'utilisation', link: '/cas-utilisation' },
          ]
        },
        {
          title: 'Prérequis techniques',
          items: [
            { label: 'Accès API', link: '/acces-api' },
            { label: 'Configuration du compte', link: '/configuration-compte' },
            { label: 'Connaissances techniques', link: '/connaissances-techniques' },
          ]
        },
        {
          title: 'Installation et Configuration',
          items: [
            { label: 'Installation', link: '/installation' },
            { label: 'Configuration des clés', link: '/configuration-cles' },
            { label: 'Configuration des webhooks', link: '/configuration-webhooks' },
          ]
        },
        {
          title: 'Concepts de base',
          items: [
            { label: 'Modèle de données', link: '/modele-donnees' },
            { label: 'Concepts clés', link: '/concepts-cles' },
            { label: 'Gestion des sessions', link: '/gestion-sessions' },
          ]
        },
        {
          title: 'Guide d\'utilisation',
          items: [
            { label: 'Envoi de messages', link: '/envoi-messages' },
            { label: 'Utilisation des modèles', link: '/utilisation-modeles' },
            { label: 'Gestion des contacts', link: '/gestion-contacts' },
            { label: 'Suivi des messages', link: '/suivi-messages' },
          ]
        },
        {
          title: 'Documentation des Endpoints',
          items: [
            { label: 'Documentation des Endpoints', link: '/documentation-endpoints' },
            { label: 'Paramètres d\'entrée et types de réponse', link: '/parametres-reponse' },
            { label: 'Gestion des erreurs et codes d\'erreur', link: '/gestion-erreurs' },
            { label: 'Exemples de requêtes et réponses', link: '/exemples-requetes' },
          ]
        },
        {
          title: 'Envoi de Messages',
          items: [
            { label: 'Envoi de messages textuels', link: '/envoi-messages-textuels' },
            { label: 'Envoi de messages multimédias', link: '/envoi-messages-multimedia' },
            { label: 'Intégration avec d\'autres systèmes', link: '/integration-autres-systemes' },
            { label: 'Scénarios d\'automatisation courants', link: '/scenarios-automation' },
          ]
        },
        {
          title: 'Optimisation et Sécurité',
          items: [
            { label: 'Optimisation des performances API', link: '/optimisation-performances' },
            { label: 'Sécurisation des communications', link: '/securisation-communications' },
            { label: 'Respect des politiques WhatsApp Business', link: '/politiques-whatsapp' },
          ]
        },
        {
          title: 'Résolution des Problèmes',
          items: [
            { label: 'Résolution des problèmes d\'authentification', link: '/problemes-authentification' },
            { label: 'Gestion des erreurs courantes', link: '/erreurs-courantes' },
            { label: 'Diagnostic des problèmes de connectivité', link: '/problemes-connectivite' },
          ]
        },
        {
          title: 'Support et Assistance',
          items: [
            { label: 'Comment obtenir de l\'aide technique', link: '/aide-technique' },
            { label: 'Support client et options de service', link: '/support-client' },
          ]
        }
      ]
    };
  },
  computed: {
    filteredSections() {
      if (this.searchQuery.trim() === '') {
        return this.sections;
      }
      const query = this.searchQuery.toLowerCase();
      return this.sections.map(section => ({
        title: section.title,
        items: section.items.filter(item =>
          item.label.toLowerCase().includes(query)
        )
      })).filter(section => section.items.length > 0);
    }
  }
});
</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

body, html {
 
  height: 100%;
  margin: 0;
  overflow: hidden; /* Prevents the body from scrolling */
}
.documentation-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

 
.navbar {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
 
}

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
  color: rgba(89, 71, 255, 1);
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
  color: rgba(89, 71, 255, 1);
}

.documentation-content {
  display: flex;
  flex-grow: 1;
  overflow-y: hidden; /* Prevents the entire page from scrolling */
}

.titles-column {
  width: 20%;
  background-color: white;
  border-radius: 30px;
  padding: 10px 0 ;
  position: fixed; /* Sidebar fixed */
  top: 100px; /* Adjusts to sit below the navbar */
  left: 0;
  bottom: 0; /* Ensures it stretches to the bottom */
  overflow-y: auto; /* Makes the sidebar scrollable */
}

/* .titles-column {
  background-color: white;
  border-radius: 30px;
} */

.titles-column ul {
  list-style-type: none;
  padding-top: 2px;
}

.titles-column li {
  padding: 0.5rem 0;
}

.titles-column a {
  text-decoration: none;
  color: black;
  display: block;
}

.titles-column a:hover {
  background-color: #f1f1f1;
}

.titles-column a:active {
  background-color: #f5f4f4;
  
}
 .element{
  background-color: white; /* Light background color */
  padding: 0px 0px 0px 10px;
  transition: box-shadow 0.5s ease; /* Smooth transition for shadow effect */
  width: 100%;
 
}

.titles-column h2{
  font-size: 15px  ;
  font-weight: bolder;
  font-family: Verdana;
  margin-left: 7px;
  margin-bottom: 15px ;
 
}
.bigt{
  padding: 5px;
  margin-left: 3px;
}

.bigt b {
  margin-bottom: 10px; /* Adds space after <b> */
  display: block; /* Ensure space after <b> */
  color: rgba(89, 71, 255, 1);
  font-size: 16px;
  padding: 3px;
}

.bigt:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
}


.details-column {
  .details-column {
  width: 60%;
  padding: 70px;
  margin-left: 20%; /* Ensures content moves aside for the sidebar */
  overflow-y: auto; /* Makes the main content scrollable */
  height: calc(100vh - 100px); /* Adjusts height based on navbar */
}
}

.axes-column {
  width: 20%;
  padding: 1rem;
  overflow-y: auto;
  margin-left: 60%;
  background-color: #f9f9f9;
  height: calc(100vh - 100px); /* Adjusts height based on navbar */
}

.axes-column ul {
  list-style-type: disc;
  padding-left: 1rem;
}
.documentation-content {
  display: flex;
  flex-grow: 1;
  overflow-y: hidden; /* Prevents the entire page from scrolling */
}

.titles-column {
  width: 20%;
  background-color: white;
  padding: 0.5rem;
  position: fixed; /* Sidebar fixed */
  top: 100px; /* Adjusts to sit below the navbar */
  left: 0;
  bottom: 0; /* Ensures it stretches to the bottom */
  overflow-y: auto; /* Makes the sidebar scrollable */
  z-index: 1; /* Keeps it above the main content */
}

.details-column {
  width: 70%;
  padding: 0px 20px;
  margin-left: 22%; /* Moves the content to the right of the sidebar */
  overflow-y: auto; /* Makes the main content scrollable */
  height: calc(100vh - 100px); /* Adjusts height based on navbar */
}

.axes-column {
  width: 20%;
  padding: 1rem;
  overflow-y: auto;
  margin-left: auto; /* Ensures it stays on the right side */
  background-color: #f9f9f9;
  height: calc(100vh - 100px); /* Adjusts height based on navbar */
}

/* Scrollbar styles for WebKit browsers */
.documentation-content::-webkit-scrollbar {
  width: 6px; /* Width of the scrollbar */
}

.documentation-content::-webkit-scrollbar-track {
  background: #000000; /* Background color of the scrollbar track */
}

.documentation-content::-webkit-scrollbar-thumb {
  background:  rgba(89, 71, 255, 1);; /* Color of the scrollbar thumb */
  border-radius: 25px; /* Rounds the edges of the scrollbar thumb */
  height: 20px;
}

.documentation-content::-webkit-scrollbar-thumb:hover {
  background:  rgb(73, 58, 206);; /* Darker color when hovering over the scrollbar thumb */
}

/* Apply scrollbar styles to specific columns */
.titles-column::-webkit-scrollbar,
.details-column::-webkit-scrollbar,
.axes-column::-webkit-scrollbar {
  width: 6px;
  height: 10px;
}

.titles-column::-webkit-scrollbar-track,
.details-column::-webkit-scrollbar-track,
.axes-column::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.titles-column::-webkit-scrollbar-thumb,
.details-column::-webkit-scrollbar-thumb,
.axes-column::-webkit-scrollbar-thumb {
  background: rgb(101, 84, 255);;
  border-radius: 10px;
}
</style>

