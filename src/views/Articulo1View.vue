<template>
  <div class="container mx-auto p-8">
    <Articulo1 />
  </div>
  <Footer />

</template>

<script>
import Footer from '../components/Footer.vue';
import Articulo1 from '../components/Articulo1.vue';

export default {
  components: {
    Footer,
    Articulo1
  }
}
</script>