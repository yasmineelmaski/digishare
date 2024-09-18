<template>
    <div>
      <h1>Suivi et Récupération des Messages</h1>
      <p>
        Le suivi des messages permet de surveiller l'état des messages envoyés et de récupérer les réponses des utilisateurs. Cela vous aide à assurer une communication efficace et à analyser les interactions.
      </p>
  
      <h2>Suivi des Messages</h2>
      <p>
        Pour suivre l'état des messages envoyés, envoyez une requête GET à l'API avec l'identifiant du message. Vous recevrez des informations sur le statut de livraison et la lecture.
      </p>
      <pre>
        GET /messages/identifiant_message/status
      </pre>
  
      <h2>Récupérer les Réponses</h2>
      <p>
        Pour récupérer les réponses des utilisateurs, envoyez une requête GET à l'API. Les réponses incluront les messages reçus ainsi que les informations sur l'expéditeur.
      </p>
      <pre>
        GET /messages
      </pre>
  
      <h2>Consulter les Rapports</h2>
      <p>
        Vous pouvez consulter les rapports détaillés sur les performances des messages envoyés, y compris les taux de livraison et de lecture.
      </p>
      <pre>
        GET /reports
      </pre>
    </div>
  </template>
  
  <script>
  export default {
    name: "SuiviMessages"
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
  