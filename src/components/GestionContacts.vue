<template>
    <div>
      <h1>Gestion des Contacts et des Listes de Diffusion</h1>
      <p>
        La gestion des contacts et des listes de diffusion est essentielle pour envoyer des messages à plusieurs utilisateurs en même temps. Avec l'API WhatsApp, vous pouvez ajouter, supprimer et gérer vos contacts ainsi que créer des listes de diffusion pour organiser vos communications.
      </p>
  
      <h2>Ajouter un Contact</h2>
      <p>
        Pour ajouter un nouveau contact, vous devez envoyer une requête à l'API pour enregistrer les informations du contact, telles que le numéro de téléphone et le nom. Assurez-vous que le numéro de téléphone est au format international.
      </p>
      <pre>
        POST /contacts
        {
          "contacts": [
            {
              "input": "numéro_de_téléphone_utilisateur",
              "wa_id": "identifiant_wa_du_contact"
            }
          ]
        }
      </pre>
  
      <h2>Supprimer un Contact</h2>
      <p>
        Pour supprimer un contact de votre liste, envoyez une requête DELETE à l'API avec l'identifiant du contact que vous souhaitez supprimer.
      </p>
      <pre>
        DELETE /contacts/identifiant_wa_du_contact
      </pre>
  
      <h2>Créer une Liste de Diffusion</h2>
      <p>
        Les listes de diffusion vous permettent d'envoyer des messages à un groupe de contacts. Vous devez créer une liste en incluant les identifiants des contacts que vous souhaitez ajouter à cette liste.
      </p>
      <pre>
        POST /broadcasts
        {
          "to": [
            "numéro_de_téléphone_utilisateur_1",
            "numéro_de_téléphone_utilisateur_2"
          ],
          "type": "text",
          "text": {
            "body": "Message envoyé à une liste de diffusion"
          }
        }
      </pre>
  
      <h2>Consulter les Contacts</h2>
      <p>
        Pour obtenir la liste de tous vos contacts, envoyez une requête GET à l'API. Vous recevrez une réponse contenant les informations sur chaque contact enregistré.
      </p>
      <pre>
        GET /contacts
      </pre>
    </div>
  </template>
  
  <script>
  export default {
    name: "GestionContacts"
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
  