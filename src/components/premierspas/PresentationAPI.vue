<template>
    <section>
      <h1>Présentation de l'API WhatsApp</h1>
      <p>L'API WhatsApp permet aux entreprises d'envoyer et de recevoir des messages à leurs clients via la plateforme WhatsApp. Cette API est conçue pour intégrer une communication instantanée et sécurisée directement dans vos systèmes d'entreprise. Elle est utilisée pour des cas tels que l'automatisation des messages, les notifications d'achat, et bien plus encore.</p>
  
      <h2>Fonctionnalités principales</h2>
      <p>Avec l'API WhatsApp, vous avez accès à plusieurs fonctionnalités clés, adaptées à différents besoins :</p>
      <ul>
        <li><strong>Messages texte</strong> : Envoyez des messages texte simples à vos utilisateurs avec des fonctionnalités comme la personnalisation du contenu et des modèles prédéfinis.</li>
        <li><strong>Messages multimédias</strong> : Partagez des images, des vidéos, des documents et des fichiers audios avec vos clients pour une communication plus engageante.</li>
        <li><strong>Notifications en temps réel</strong> : Recevez des confirmations de livraison et de lecture en utilisant les webhooks configurés pour surveiller l'activité des messages envoyés.</li>
        <li><strong>Utilisation de modèles</strong> : Envoyez des modèles de messages prédéfinis approuvés par WhatsApp pour les cas d'utilisation récurrents comme des mises à jour de commandes, des rappels d'événements, etc.</li>
      </ul>
  
      <h2>Pourquoi utiliser l'API WhatsApp ?</h2>
      <p>WhatsApp est l'une des plateformes de messagerie les plus utilisées au monde, avec plus de 2 milliards d'utilisateurs. Voici pourquoi l'intégration de l'API WhatsApp peut être bénéfique pour votre entreprise :</p>
      <ul>
        <li><strong>Portée mondiale</strong> : WhatsApp est utilisé par des millions de personnes chaque jour, ce qui vous permet d'atteindre un large public à l'échelle mondiale.</li>
        <li><strong>Sécurité et confidentialité</strong> : WhatsApp garantit un chiffrement de bout en bout pour toutes les communications, assurant ainsi la sécurité des données échangées avec vos clients.</li>
        <li><strong>Automatisation</strong> : Grâce aux webhooks et aux modèles de messages, vous pouvez automatiser vos communications avec les clients tout en garantissant une réponse rapide et efficace.</li>
        <li><strong>Intégration simple</strong> : Avec les SDK disponibles dans des langages comme Node.js, Python, PHP, et Java, l'intégration de l'API WhatsApp dans votre infrastructure est rapide et facile.</li>
      </ul>
  
      <h2>Architecture de l'API</h2>
      <p>L'API WhatsApp repose sur une architecture RESTful, permettant une intégration fluide avec les systèmes backend modernes. Chaque appel à l'API est effectué via des requêtes HTTP, et nécessite un en-tête d'authentification comprenant une clé API. Voici un aperçu des méthodes courantes utilisées :</p>
      <ul>
        <li><strong>POST</strong> : Utilisé pour envoyer des messages ou créer des entités comme des contacts.</li>
        <li><strong>GET</strong> : Utilisé pour récupérer des informations sur les messages, les contacts, ou les sessions en cours.</li>
        <li><strong>PUT</strong> : Permet de mettre à jour des entités existantes, comme des informations sur les contacts ou les modèles de message.</li>
        <li><strong>DELETE</strong> : Utilisé pour supprimer des entités, comme des contacts ou des modèles de message.</li>
      </ul>
  
      <h2>Exemple d'intégration avec Node.js</h2>
      <p>Voici un exemple simple d'intégration de l'API WhatsApp pour envoyer un message texte en utilisant Node.js et Axios :</p>
      <pre><code>
  // Installation du SDK et Axios
  npm install axios dotenv
  
  // Exemple de code Node.js
  require('dotenv').config();
  const axios = require('axios');
  const apiKey = process.env.WHATSAPP_API_KEY;
  
  const sendMessage = async () => {
    try {
      const response = await axios.post('https://api.whatsapp.com/v1/messages', {
        to: '+1234567890',
        type: 'text',
        text: {
          body: 'Bonjour depuis l\'API WhatsApp!'
        }
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Message envoyé avec succès :', response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error.response.data);
    }
  };
  
  sendMessage();
      </code></pre>
      <p>Dans cet exemple, nous utilisons Axios pour envoyer une requête HTTP POST à l'API WhatsApp. La clé API est stockée de manière sécurisée dans une variable d'environnement grâce à dotenv. Ce code envoie un message texte à un utilisateur WhatsApp et affiche la réponse de l'API dans la console.</p>
  
      <h2>Envoi de messages multimédias</h2>
      <p>L'API permet également d'envoyer des fichiers multimédias. Voici un exemple pour envoyer une image :</p>
      <pre><code>
  // Envoi d'une image avec Node.js
  const sendMediaMessage = async () => {
    try {
      const response = await axios.post('https://api.whatsapp.com/v1/messages', {
        to: '+1234567890',
        type: 'image',
        image: {
          link: 'https://example.com/image.jpg',
          caption: 'Voici une image'
        }
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('Message multimédia envoyé avec succès :', response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message multimédia :', error.response.data);
    }
  };
  
  sendMediaMessage();
      </code></pre>
      <p>Ce message envoie un lien vers une image hébergée et permet d'ajouter une légende (caption) pour contextualiser le média. Ce processus fonctionne de manière similaire à l'envoi de messages texte.</p>
  
      <h2>Conclusion</h2>
      <p>Cette présentation de l'API WhatsApp vous a donné un aperçu des fonctionnalités principales et des méthodes d'intégration. Explorez les autres sections de cette documentation pour en savoir plus sur la gestion des erreurs, la configuration des webhooks, et l'optimisation des performances de l'API.</p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PresentationAPI'
  };
  </script>
  
  <style scoped>
  h1, h2 {
    color: #333;
  }
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  pre {
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
  }
  </style>
  