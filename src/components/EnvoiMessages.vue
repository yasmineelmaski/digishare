<template>
    <div>
      <h1>Envoi de Messages Simples</h1>
      <p>
        L'API WhatsApp permet d'envoyer des messages simples à vos utilisateurs de manière efficace. Voici un aperçu des étapes nécessaires pour envoyer un message texte basique :
      </p>
  
      <h2>Étapes pour l'envoi d'un message texte</h2>
      <ol>
        <li><strong>Authentification :</strong> Assurez-vous d'avoir correctement configuré votre clé d'API et vos jetons d'authentification.</li>
        <li><strong>Créer la requête :</strong> Utilisez un point de terminaison pour envoyer un message texte à un utilisateur spécifique. La requête doit contenir le numéro de téléphone du destinataire, le type de message et le contenu.</li>
        <li><strong>Envoyer la requête :</strong> Utilisez le format JSON pour structurer votre message et envoyez-le via une requête POST au point de terminaison de l'API.</li>
        <li><strong>Recevoir la confirmation :</strong> Après l'envoi, l'API renverra une réponse avec le statut de livraison du message.</li>
      </ol>
  
      <h2>Exemple de requête API</h2>
      <pre>
        POST /messages
        {
          "recipient_type": "individual",
          "to": "numéro_de_téléphone_utilisateur",
          "type": "text",
          "text": {
            "body": "Bonjour, ceci est un message envoyé via l'API WhatsApp !"
          }
        }
      </pre>
  
      <p>
        Ce format permet d'envoyer des messages texte, mais vous pouvez également utiliser l'API pour envoyer des images, des vidéos et d'autres types de contenu.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "EnvoieMessages"
  };
  </script>
  