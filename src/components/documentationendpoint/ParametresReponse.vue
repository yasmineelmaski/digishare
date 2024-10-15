<!-- src/components/ParametresReponse.vue -->
<template>
  <div class="swagger-ui">
    <div class="opblock opblock-get">
      <h1 class="opblock-title">Paramètres d'entrée et types de réponse</h1>
      <div v-if="paths" class="opblock-body">
        <div v-for="(pathData, pathName) in paths" :key="pathName" class="operation-tag-content">
          <h2 class="opblock-summary-path">{{ pathName }}</h2>
          <div v-for="(methodData, methodName) in pathData" :key="methodName">
            <h3 class="opblock-summary-method">{{ methodName.toUpperCase() }}</h3>
            
            <!-- Parameters Section -->
            <div class="parameters-container">
              <h4>Parameters</h4>
              <table class="parameters">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="param in methodData.parameters" :key="param.name">
                    <td>{{ param.name }}</td>
                    <td>{{ param.in }}</td>
                    <td>{{ param.schema.type }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Responses Section -->
            <div class="responses-container">
              <h4>Response Type</h4>
              <table class="responses">
                <thead>
                  <tr>
                    <th>Content-Type</th>
                    <th>Schema</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(contentType, contentKey) in methodData.responses['200'].content" :key="contentKey">
                    <td>{{ contentKey }}</td>
                    <td>{{ contentType.schema.type }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
      paths: null,
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
        this.paths = yamlContent.paths;
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

.parameters-container, .responses-container {
  margin-top: 20px;
}

.parameters, .responses {
  width: 100%;
  border-collapse: collapse;
}

.parameters th, .parameters td, .responses th, .responses td {
  border: 1px solid #ddd;
  padding: 8px;
}

.parameters th, .responses th {
  background-color: #f2f2f2;
}

.opblock-summary-method {
  color: #61affe;
  font-size: 18px;
  margin-top: 20px;
}
</style>
