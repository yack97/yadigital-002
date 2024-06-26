<template>
  <div class="container mx-auto pt-20">
    <div class="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4">
      <!-- Contenido de la primera columna -->
      <div class="md:col-span-1 md:order-1 flex flex-col items-start">
        <ul class="bg-gray-100 p-4 rounded-md space-y-2 w-full">
          <li>
            <a href="#" class="flex items-center p-2 text-black-900 rounded-lg dark:text-black hover:bg-indigo-100 dark:hover:bg-indigo-600 group">
              <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span class="ml-3">Listar</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-black-900 rounded-lg dark:text-black hover:bg-indigo-100 dark:hover:bg-indigo-600 group dark:group-hover:text-white">
              <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="ml-3">Postear</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-black-900 rounded-lg dark:text-black hover:bg-indigo-100 dark:hover:bg-indigo-600 group">
              <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
              </svg>
              <span class="ml-3">Cargar</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Contenido de la segunda columna con CKEditor -->
      <div class="bg-gray-100 p-6 md:p-12 rounded-md md:col-span-1 md:order-2">
        <div class="mx-1 bg-white shadow-sm rounded-lg p-8">
          <form @submit.prevent="submitForm" class="space-y-8">
            <div class="mb-4">
              <label for="title" class="block text-xl text-gray-600">Titulo <span class="text-red-500">*</span></label>
              <input type="text" id="title" v-model="titulo" class="border-2 border-gray-300 p-2 w-full rounded-md" required>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <imagenDownload @upload="handleImageUpload" /> 
            </div>

            <div class="mb-8">
              <label for="editor" class="block text-xl text-gray-600">Descripcion <span class="text-red-500">*</span></label>
              <textarea id="editor" v-model="Descripcion" rows="6" class="border-2 border-gray-300 p-2 w-full rounded-md"></textarea>
            </div>
            <div class="mb-8">

              <h2 class="block text-xl text-gray-600">Contenido</h2>

              <editorCK v-model="contenido" /> 

            </div>
            <div class="flex items-center space-x-8">
              <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400">Guardar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import imagenDownload from './imagenDownload.vue';
import editorCK from './editorCK.vue';

export default {
  components: {
    imagenDownload,
    editorCK
  },
  setup() {
    const titulo = ref('');
    const Descripcion = ref('');
    const contenido = ref('');
    const imageUrl = ref('');

    const handleImageUpload = (url) => {
      imageUrl.value = url; // Asigna la URL de la imagen cargada al campo del formulario
    };

    const submitForm = async () => {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          titulo: titulo.value,
          Descripcion: Descripcion.value,
          contenido: contenido.value,
          imageUrl: imageUrl.value,
          createdAt: new Date()
        });
        console.log('Documento agregado con ID: ', docRef.id); // ID del documento generado
        alert('Post guardado exitosamente con ID: ' + docRef.id);
        titulo.value = '';
        Descripcion.value = '';
        contenido.value = '';
        imageUrl.value = ''; // Limpia la URL de la imagen después de guardar el post

        // Refresca la página después de 1 segundo
        setTimeout(() => {
          window.location.reload();
        }, 1000);

      } catch (error) {
        console.error('Error al guardar el post: ', error);
      }
    };

    return {
      titulo,
      Descripcion,
      contenido,
      imageUrl,
      handleImageUpload,
      submitForm
    };
  }
};

</script>



