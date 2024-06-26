<template>
  <NavbarBlog/>
  <div>
    <Blog />
  </div>
  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue';
import Blog from '../components/Blog.vue';
import NavbarBlog from '../components/NavbarBlog.vue';

export default {
  components: {
    Footer,
    Blog,
    NavbarBlog,
  }
}
</script>
