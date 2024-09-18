<template>
    <div class="sidebar">
      <ul>
        <li><router-link to="/introduction">Introduction</router-link></li>
        <li><router-link to="/prerequisites">Prérequis</router-link></li>
        <li><router-link to="/installation-configuration">Installation et Configuration</router-link></li>
        <li><router-link to="/concepts-cles">Concepts de Base</router-link></li>
        <li><router-link to="/utilisation-modeles">Utilisation des Modèles</router-link></li>
        <li><router-link to="/gestion-contacts">Gestion des Contacts</router-link></li>
        <li><router-link to="/gestion-sessions">Gestion des Sessions</router-link></li>
        <li><router-link to="/suivi-messages">Suivi des Messages</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar-t'
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #f4f4f4;
    padding: 20px;
    border-right: 1px solid #ddd;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar li {
    margin-bottom: 10px;
  }
  
  .sidebar a {
    text-decoration: none;
    color: #333;
  }
  
  .sidebar a.active {
    font-weight: bold;
    color: #007bff;
  }
  </style>
  