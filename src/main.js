import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'swagger-ui/dist/swagger-ui.css';

// Define routes with dynamic imports for lazy loading
const routes = [
  { path: '/presentation-api', component: () => import('./components/premierspas/PresentationAPI.vue') },
  { path: '/fonctionnalites', component: () => import('./components/premierspas/Fonctionnalites.vue') },
  { path: '/cas-utilisation', component: () => import('./components/premierspas/CasUtilisation.vue') },
  { path: '/acces-api', component: () => import('./components/prerequis/AccesAPI.vue') },
  { path: '/configuration-compte', component: () => import('./components/prerequis/ConfigurationCompte.vue') },
  { path: '/connaissances-techniques', component: () => import('./components/prerequis/ConnaissancesTechniques.vue') },
  { path: '/installation', component: () => import('./components/installationconf/Installation.vue') },
  { path: '/configuration-cles', component: () => import('./components/installationconf/ConfigurationCles.vue') },
  { path: '/configuration-webhooks', component: () => import('./components/installationconf/ConfigurationWebhooks.vue') },
  { path: '/modele-donnees', component: () => import('./components/conceptbase/ModeleDonnees.vue') },
  { path: '/concepts-cles', component: () => import('./components/conceptbase/ConceptsCles.vue') },
  { path: '/gestion-sessions', component: () => import('./components/conceptbase/GestionSessions.vue') },
  { path: '/envoi-messages', component: () => import('./components/guideuse/EnvoiMessages.vue') },
  { path: '/utilisation-modeles', component: () => import('./components/guideuse/UtilisationModeles.vue') },
  { path: '/gestion-contacts', component: () => import('./components/guideuse/GestionContacts.vue') },
  { path: '/suivi-messages', component: () => import('./components/guideuse/SuiviMessages.vue') },
  { path: '/documentation-endpoints', component: () => import('./components/documentationendpoint/DocumentationEndpoints.vue') },
  { path: '/parametres-reponse', component: () => import('./components/documentationendpoint/ParametresReponse.vue') },
  { path: '/gestion-erreurs', component: () => import('./components/documentationendpoint/GestionErreurs.vue') },
  { path: '/exemples-requetes', component: () => import('./components/documentationendpoint/ExemplesRequetes.vue') },
  { path: '/envoi-messages-textuels', component: () => import('./components/envoimessage/EnvoiMessagesTextuels.vue') },
  { path: '/envoi-messages-multimedia', component: () => import('./components/envoimessage/EnvoiMessagesMultimedia.vue') },
  { path: '/integration-autres-systemes', component: () => import('./components/envoimessage/IntegrationAutresSystemes.vue') },
  { path: '/scenarios-automation', component: () => import('./components/envoimessage/ScenariosAutomation.vue') },
  { path: '/optimisation-performances', component: () => import('./components/optimisationsecurite/OptimisationPerformances.vue') },
  { path: '/securisation-communications', component: () => import('./components/optimisationsecurite/SecurisationCommunications.vue') },
  { path: '/politiques-whatsapp', component: () => import('./components/optimisationsecurite/PolitiquesWhatsApp.vue') },
  { path: '/problemes-authentification', component: () => import('./components/resolutiondesproleme/ProblemesAuthentification.vue') },
  { path: '/erreurs-courantes', component: () => import('./components/resolutiondesproleme/ErreursCourantes.vue') },
  { path: '/problemes-connectivite', component: () => import('./components/resolutiondesproleme/ProblemesConnectivite.vue') },
  { path: '/aide-technique', component: () => import('./components/supportassistance/AideTechnique.vue') },
  { path: '/support-client', component: () => import('./components/supportassistance/SupportClient.vue') },
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

