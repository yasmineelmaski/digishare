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
        <h2>Documentation</h2>
        <ul>
          <li><router-link to="/presentation-api">Présentation de l'API WhatsApp</router-link></li>
          <li><router-link to="/fonctionnalites">Fonctionnalités</router-link></li>
          <li><router-link to="/cas-utilisation">Cas d'utilisation</router-link></li>
          <li><router-link to="/acces-api">Accès API</router-link></li>
          <li><router-link to="/configuration-compte">Configuration du compte</router-link></li>
          <li><router-link to="/connaissances-techniques">Connaissances techniques</router-link></li>
          <li><router-link to="/installation">Installation</router-link></li>
          <li><router-link to="/configuration-cles">Configuration des clés</router-link></li>
          <li><router-link to="/configuration-webhooks">Configuration des webhooks</router-link></li>
          <li><router-link to="/modele-donnees">Modèle de données</router-link></li>
          <li><router-link to="/concepts-cles">Concepts clés</router-link></li>
          <li><router-link to="/gestion-sessions">Gestion des sessions</router-link></li>
          <li><router-link to="/envoi-messages">Envoi de messages</router-link></li>
          <li><router-link to="/utilisation-modeles">Utilisation des modèles</router-link></li>
          <li><router-link to="/gestion-contacts">Gestion des contacts</router-link></li>
          <li><router-link to="/suivi-messages">Suivi des messages</router-link></li>
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
});
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
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  position: sticky;
  top: 0;
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
  background-color: rgba(89, 71, 255, 1);
  color: white;
}

.details-column {
  padding: 70px;
  width: 60%;
  margin: 10px;
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
