<!-- src/components/ExemplesRequetes.vue -->
<template>
  <div class="swagger-ui">
    <div class="opblock opblock-get">
      <h1 class="opblock-title">Exemples de requêtes et réponses</h1>
      <div v-if="examples" class="opblock-body">
        <div v-for="(example, path) in examples" :key="path" class="operation-tag-content">
          <h2 class="opblock-summary-path">Path: {{ path }}</h2>
          <p class="opblock-summary-method">Method: {{ example.method.toUpperCase() }}</p>

          <h4>Request Example:</h4>
          <pre class="example-code">{{ example.request }}</pre>

          <h4>Response Example:</h4>
          <pre class="example-code">{{ example.response }}</pre>
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
      examples: null,
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
        const examples = {};

        Object.keys(yamlContent.paths).forEach((path) => {
          const methods = yamlContent.paths[path];
          Object.keys(methods).forEach((method) => {
            const requestBody = methods[method].requestBody?.content;
            const responseBody = methods[method].responses['200']?.content;

            examples[path] = {
              method,
              request: requestBody
                ? JSON.stringify(requestBody['application/json']?.example || 'No request example', null, 2)
                : 'No request example',
              response: responseBody
                ? JSON.stringify(responseBody['application/json']?.example || 'No response example', null, 2)
                : 'No response example',
            };
          });
        });

        this.examples = examples;
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

.opblock-get {
  border: none;
  background-color: white;
}

.example-code {
  background-color: #ffffff; /* Changed to white */
 
  border-radius: 5px;
  font-family: monospace;
}

.opblock-summary-method {
  background-color: white;
  color:#61affe;
  font-size: 18px;
  margin-top: 20px;
}
</style>

