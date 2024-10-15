<template>
    <div>
      <h1>Utilisation des Modèles de Message</h1>
      <p>
        Les modèles de message sont des messages pré-approuvés que vous pouvez utiliser pour envoyer des notifications ou des communications importantes à vos utilisateurs. L'utilisation des modèles facilite la conformité avec les politiques de WhatsApp tout en permettant une personnalisation efficace.
      </p>
  
      <h2>Qu'est-ce qu'un Modèle de Message ?</h2>
      <p>
        Un modèle de message est un modèle de message pré-défini que vous devez créer et faire approuver par WhatsApp avant de l'utiliser pour envoyer des messages aux utilisateurs. Ces modèles peuvent inclure des variables dynamiques pour personnaliser le contenu en fonction des besoins.
      </p>
  
      <h2>Créer un Modèle de Message</h2>
      <p>
        Pour créer un modèle de message, vous devez soumettre une demande via le tableau de bord WhatsApp Business ou via l'API. Assurez-vous d'inclure les variables nécessaires et de suivre les directives de WhatsApp.
      </p>
      <pre>
        POST /message_templates
        {
          "name": "nom_du_modèle",
          "language": "langue",
          "components": [
            {
              "type": "body",
              "text": "Bonjour {{1}}, vous avez un nouvel avis !"
            }   
          ]
        }
      </pre>
  
      <h2>Utiliser un Modèle de Message</h2>
      <p>
        Une fois le modèle approuvé, vous pouvez l'utiliser pour envoyer des messages en utilisant son identifiant. Remplacez les variables dans le modèle avec les données réelles avant d'envoyer le message.
      </p>
      <pre>
        POST /messages
        {
          "to": "numéro_utilisateur",
          "type": "template",
          "template": {
            "name": "nom_du_modèle",
            "language": {
              "code": "code_langue"
            },
            "components": [
              {
                "type": "body",
                "parameters": [
                  {
                    "type": "text",
                    "text": "John Doe"
                  }
                ]
              }
            ]
          }
        }
      </pre>
  
      <h2>Gérer les Modèles de Message</h2>
      <p>
        Vous pouvez consulter, mettre à jour ou supprimer des modèles de message existants via l'API ou le tableau de bord WhatsApp Business.
      </p>
      <pre>
        GET /message_templates
        PUT /message_templates/identifiant
        DELETE /message_templates/identifiant
      </pre>
  
      <h2>Considérations Importantes</h2>
      <ul>
        <li>Les modèles doivent être approuvés par WhatsApp avant utilisation.</li>
        <li>Assurez-vous de respecter les politiques de contenu de WhatsApp pour éviter le rejet des modèles.</li>
        <li>Les variables dans les modèles doivent être correctement remplacées par des valeurs réelles avant l'envoi.</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "UtilisationModeles"
  };
  </script>
  
  <style scoped>
  pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
  }
  
  ul {
    margin-top: 1rem;
    padding-left: 1rem;
  }
  </style>
  