<template>
    <div>
      <h1>Explication des Concepts Clés</h1>
      <p>
        L'API WhatsApp Business repose sur plusieurs concepts clés que vous devez comprendre pour une intégration réussie :
      </p>
      <ul>
        <li><strong>Messages :</strong> Les messages sont au cœur de l'API. Ils peuvent être des textes, des images, des vidéos ou des documents.</li>
        <li><strong>Templates :</strong> Les modèles de messages permettent d'envoyer des messages pré-approuvés par WhatsApp pour des cas spécifiques comme des notifications.</li>
        <li><strong>Sessions :</strong> Les sessions sont initiées lorsqu'un utilisateur envoie un message à l'entreprise. Elles durent 24 heures et permettent l'envoi de messages sans modèles spécifiques.</li>
        <li><strong>Webhooks :</strong> Ce sont des points de terminaison configurés par l'entreprise pour recevoir des notifications en temps réel de l'API, comme la réception de messages ou les statuts des messages envoyés.</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConceptsCles"
  };
  </script>
  