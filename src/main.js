import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Define routes with dynamic imports for lazy loading
const routes = [
  { path: '/presentation-api', component: () => import('./components/PresentationAPI.vue') },
  { path: '/fonctionnalites', component: () => import('./components/Fonctionnalites.vue') },
  { path: '/cas-utilisation', component: () => import('./components/CasUtilisation.vue') },
  { path: '/acces-api', component: () => import('./components/AccesAPI.vue') },
  { path: '/configuration-compte', component: () => import('./components/ConfigurationCompte.vue') },
  { path: '/connaissances-techniques', component: () => import('./components/ConnaissancesTechniques.vue') },
  { path: '/installation', component: () => import('./components/Installation.vue') },
  { path: '/configuration-cles', component: () => import('./components/ConfigurationCles.vue') },
  { path: '/configuration-webhooks', component: () => import('./components/ConfigurationWebhooks.vue') },
  { path: '/modele-donnees', component: () => import('./components/ModeleDonnees.vue') },
  { path: '/concepts-cles', component: () => import('./components/ConceptsCles.vue') },
  { path: '/gestion-sessions', component: () => import('./components/GestionSessions.vue') },
  { path: '/envoi-messages', component: () => import('./components/EnvoiMessages.vue') },
  { path: '/utilisation-modeles', component: () => import('./components/UtilisationModeles.vue') },
  { path: '/gestion-contacts', component: () => import('./components/GestionContacts.vue') },
  { path: '/suivi-messages', component: () => import('./components/SuiviMessages.vue') },
  // Add more routes if needed
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create Vue app
const app = createApp(App);

// Use router
app.use(router);

// Mount Vue app
app.mount('#app');

