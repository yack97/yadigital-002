<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6 pt-32">
    <div class="max-w-screen-xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="p-6">
        <div v-if="loading">
          <p>Cargando artículo...</p>
        </div>
        <div v-else-if="articulo">
          <!-- Mostrar la imagen antes del título -->
          <img v-if="articulo.imageUrl" :src="articulo.imageUrl" alt="Imagen del artículo" class="mb-4 rounded-lg w-full">

          <h2 class="text-4xl font-bold mb-4">{{ articulo.titulo }}</h2> <!-- Tamaño del título más grande -->

          <!-- Renderizar contenido HTML -->
          <div v-html="articulo.contenido"></div>
        </div>
        <div v-else>
          <p>El artículo no existe o hubo un error al cargarlo.</p>
        </div>
      </div>
    </div>
  </div>
  <Footer /> <!-- Aquí se añade el componente Footer -->
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Footer from '../components/Footer.vue';

export default {
  name: 'MostrarArticulo',
  components: {
    Footer // Registrando el componente Footer para poder usarlo
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true);
    const articulo = ref(null);

    const fetchArticulo = async () => {
      try {
        const docRef = doc(db, 'posts', props.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          articulo.value = {
            id: docSnap.id,
            titulo: data.titulo,
            contenido: data.contenido,
            imageUrl: data.imageUrl // Asegúrate de tener esta propiedad en tu documento Firebase
          };
        } else {
          console.log("No se encontró el artículo en la base de datos.");
        }
      } catch (error) {
        console.error("Error al obtener el artículo:", error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchArticulo();
    });

    return {
      loading,
      articulo
    };
  }
};
</script>

<style>
/* Estilos adicionales según sea necesario */
</style>
