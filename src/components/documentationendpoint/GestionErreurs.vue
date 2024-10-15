<!-- src/components/GestionErreurs.vue -->
<template>
  <div class="swagger-ui">
    <div class="opblock opblock-post">
      <h1 class="opblock-title">Gestion des erreurs et codes d'erreur</h1>
      <div v-if="errors" class="opblock-body">
        <div v-for="(error, index) in errors" :key="index" class="operation-tag-content">
          <h2 class="opblock-summary-path">Path: {{ error.path }}</h2>
          <p class="opblock-summary-method">Method: {{ error.method.toUpperCase() }}</p>
          <table class="responses">
            <thead>
              <tr>
                <th>Status Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="response-status">{{ error.statusCode }}</td>
                <td>{{ error.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import yaml from 'js-yaml';
import axios from 'axios';

export default {
  data() {
    return {
      errors: null,
    };
  },
  mounted() {
    this.loadYaml();
  },
  methods: {
    async loadYaml() {
      try {
        const response = await axios.get('/api/swagger.yaml');
        const yamlContent = yaml.load(response.data);
        const errors = [];

        Object.keys(yamlContent.paths).forEach((path) => {
          const methods = yamlContent.paths[path];
          Object.keys(methods).forEach((method) => {
            const responses = methods[method].responses;
            if (responses) {
              Object.keys(responses).forEach((statusCode) => {
                if (statusCode.startsWith('4') || statusCode.startsWith('5')) {
                  errors.push({
                    path,
                    method,
                    statusCode,
                    description: responses[statusCode].description || 'No description provided',
                  });
                }
              });
            }
          });
        });

        this.errors = errors;
      } catch (error) {
        console.error('Error loading YAML:', error);
      }
    },
  },
};
</script>

<style scoped>
.opblock-title {
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
  color: #3b4151;
}

.responses {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.responses th, .responses td {
  border: 1px solid #ddd;
  padding: 8px;
}

.responses th {
  background-color: #f2f2f2;
}

.response-status {
  color: red;
}

.opblock-summary-method {
  color: #61affe;
  font-size: 18px;
  margin-top: 20px;
}
</style>
