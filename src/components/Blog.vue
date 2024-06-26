<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-100 p-6  pt-32 ">
    <div class="max-w-screen-xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">Blog de
            Roninmez: Conocimiento Experto en Desarrollo Web, SEO y Análisis de Datos
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-800">Explora nuestros artículos y descubre cómo impulsar tu negocio online.</p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <article v-for="articulo in paginatedArticulos" :key="articulo.id"
            class="article-container relative p-6 rounded-lg border shadow-md dark:border-gray-700"
            :style="{ 'background-image': 'url(' + articulo.imageUrl + ')' }">
            <!-- Contenido del artículo -->
            <div class="absolute inset-0 rounded-lg overflow-hidden">
              <img v-if="articulo.imageUrl" :src="articulo.imageUrl" alt="Imagen del artículo"
                class="w-full h-full object-cover">
            </div>

            <!-- Contenedor de texto con fondo blanco -->
            <div class="relative z-10 bg-white bg-opacity-80 p-6 rounded-lg">
              <div class="flex justify-between items-center mb-5">
                <span
                  class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M2 5a2 2 0 012 2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  Artículo
                </span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-black">
                <!-- Enlace hacia el artículo individual -->
                <router-link :to="`/articulo/${articulo.id}`">{{ articulo.titulo }}</router-link>
              </h2>
              <p class="mb-5 font-light text-black">{{ articulo.Descripcion }}</p>
              <div class="flex justify-between items-center">
                <!-- Enlace hacia el artículo individual -->
                <router-link :to="`/articulo/${articulo.id}`"
                  class="inline-flex items-center font-medium text-black hover:underline">
                  Leer más...
                  <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

  </section>
  <Footer /> <!-- Aquí se añade el componente Footer -->

</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../components/Footer.vue';


export default {
  name: 'ListarArticulos',
  setup() {
    const articulos = ref([]);
    const paginatedArticulos = ref([]);
    const pageSize = 10;
    const currentPage = ref(1);

    const fetchArticulos = async () => {
      try {
        const articulosSnapshot = await getDocs(collection(db, 'posts'));
        articulos.value = articulosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        paginateArticulos();
      } catch (error) {
        console.error('Error fetching articles: ', error);
      }
    };

    const paginateArticulos = () => {
      const startIndex = (currentPage.value - 1) * pageSize;
      paginatedArticulos.value = articulos.value.slice(startIndex, startIndex + pageSize);
    };

    onMounted(fetchArticulos);

    return {
      articulos,
      paginatedArticulos,
      currentPage,
      pageSize
    };
  }
};
</script>

<style>
/* Estilos adicionales según sea necesario */
.article-container {
  position: relative;
  background-size: cover;
  background-position: center;
}

.article-container .relative {
  border: 1px solid #e2e8f0;
  /* Borde alrededor del contenedor de texto */
}
</style>
