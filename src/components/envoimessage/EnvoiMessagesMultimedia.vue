<template>
    <div>
      <h1>Envoi de messages multimédias</h1>
      <p>
        Cette page décrit comment envoyer des messages multimédias tels que des images, vidéos ou documents 
        via l'API. Vous apprendrez à formater les requêtes pour inclure des fichiers multimédias.
      </p>
      <h2>Format de la requête</h2>
      <pre><code>
      POST /messages
      {
        "recipient": "+123456789",
        "message": {
          "type": "image",
          "url": "https://example.com/image.jpg"
        }
      }
      </code></pre>
      <p>
        Les fichiers multimédias doivent être accessibles via une URL ou être inclus directement dans 
        la requête sous forme de données binaires.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "EnvoiMessagesMultimedia"
  };
  </script>
  