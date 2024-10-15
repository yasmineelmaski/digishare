<!-- src/components/SwaggerUIWrapper.vue -->
<template>
    <div ref="swaggerContainer"></div>
  </template>
  
  <script>
  import SwaggerUI from 'swagger-ui';
  import 'swagger-ui/dist/swagger-ui.css';
  
  export default {
    props: {
      specUrl: {
        type: String,
        required: true
      }
    },
    mounted() {
      // Initialize Swagger UI when the component is mounted
      SwaggerUI({
        domNode: this.$refs.swaggerContainer,  // Where Swagger UI will be rendered
        url: this.specUrl,  // The URL of the Swagger/OpenAPI spec (your YAML file)
      });
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styling if needed */
  </style>
  