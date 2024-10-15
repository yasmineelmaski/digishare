<template>
    <div>
      <h1>Envoi de messages textuels</h1>
      <p>
        Cette page explique comment envoyer des messages textuels via l'API. Vous apprendrez 
        les étapes nécessaires pour formuler une requête correcte et les paramètres requis.
      </p>
      <h2>Format de la requête</h2>
      <pre><code>
      POST /messages
      {
        "recipient": "+123456789",
        "message": "Bonjour, comment puis-je vous aider ?",
        "type": "text"
      }
      </code></pre>
      <p>
        Assurez-vous de spécifier le numéro du destinataire et le contenu du message. Les messages 
        textuels doivent être encodés en UTF-8.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "EnvoiMessagesTextuels"
  };
  </script>
  