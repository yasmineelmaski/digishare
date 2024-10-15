<!-- src/components/DocumentationEndpoints.vue -->
<template>
  <div>
    <h1>Documentation des Endpoints</h1>
    <SwaggerUIWrapper :spec-url="apiUrl" />
  </div>
</template>

<script>
import SwaggerUIWrapper from './SwaggerUIWrapper.vue';  // Import the custom wrapper

export default {
  components: {
    SwaggerUIWrapper,  // Register the wrapper
  },
  data() {
    return {
      apiUrl: '/api/swagger.yaml',  // Path to your YAML file
    };
  },
};
</script>
