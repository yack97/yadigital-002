<template>
    <div class="container mx-auto p-6">
          <Formulario />
    </div>
          <Footer />

  </template>
  
  <script>
  import Formulario from '../components/Formulario.vue' // Asegúrate de que la ruta es correcta
  import Footer from '../components/Footer.vue' // Asegúrate de que la ruta es correcta
  
  export default {
    name: 'Presupuesto',
    components: {
      Formulario,
      Footer
    }
  }
  </script>
  
  <style scoped>
  /* Añade tus estilos aquí si es necesario */
  </style>
  