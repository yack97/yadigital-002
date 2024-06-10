<template>
  <div class="container mx-auto p-8">
    <Articulo2 />
  </div>
  <Footer />

</template>

<script>
import Footer from '../components/Footer.vue';
import Articulo2 from '../components/Articulo2.vue';

export default {
  components: {
    Footer,
    Articulo2
  }
}
</script>