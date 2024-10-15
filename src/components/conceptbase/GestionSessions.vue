<template>
    <div>
      <h1>Gestion des Sessions et des Utilisateurs</h1>
      <p>
        La gestion des sessions et des utilisateurs est cruciale pour maintenir une communication fluide et sécurisée via l'API WhatsApp. Vous pouvez gérer les sessions des utilisateurs, suivre leur activité et garantir la sécurité des interactions.
      </p>
  
      <h2>Créer une Session</h2>
      <p>
        Pour créer une nouvelle session pour un utilisateur, envoyez une requête POST à l'API avec les informations nécessaires pour initier une session.
      </p>
      <pre>
        POST /sessions
        {
          "user_id": "identifiant_utilisateur",
          "session_data": {
            "paramètre1": "valeur1",
            "paramètre2": "valeur2"
          }
        }
      </pre>
  
      <h2>Consulter les Sessions Actives</h2>
      <p>
        Pour obtenir la liste des sessions actives, envoyez une requête GET à l'API. Cela vous permettra de suivre les sessions actuellement en cours.
      </p>
      <pre>
        GET /sessions
      </pre>
  
      <h2>Supprimer une Session</h2>
      <p>
        Pour supprimer une session spécifique, envoyez une requête DELETE à l'API avec l'identifiant de la session que vous souhaitez supprimer.
      </p>
      <pre>
        DELETE /sessions/identifiant_session
      </pre>
  
      <h2>Gérer les Utilisateurs</h2>
      <p>
        Vous pouvez gérer les utilisateurs en ajoutant, supprimant ou mettant à jour les informations de leurs sessions.
      </p>
      <pre>
        PUT /users/identifiant_utilisateur
        {
          "user_data": {
            "paramètre1": "valeur1",
            "paramètre2": "valeur2"
          }
        }
      </pre>
    </div>
  </template>
  
  <script>
  export default {
    name: "GestionSession"
  };
  </script>
  
  <style scoped>
  pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
  }
  </style>
  