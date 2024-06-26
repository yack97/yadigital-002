<template>
  <div>
    <NavbarAdmin />
    <CargarPost />
  </div>
</template>

<script>
import NavbarAdmin from '../components/NavbarAdmin.vue';
import CargarPost from '../components/CargarPost.vue';

export default {
  components: {
    NavbarAdmin,
    CargarPost,
  }
};
</script>

<style scoped>
/* Estilos adicionales según sea necesario */
</style>
