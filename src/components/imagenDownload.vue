<template>
    <div class="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-sm flex flex-col items-center justify-center">
      <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
              clip-rule="evenodd" />
          <path fill-rule="evenodd"
              d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
              clip-rule="evenodd" />
      </svg>
  
      <!-- Vista previa de la imagen -->
      <img id="image-preview" :src="imageUrl" alt="Vista previa de la imagen" class="w-full h-auto rounded-md"
          v-if="imageUrl">
  
      <!-- Opción para cambiar la imagen -->
      <label for="image-upload" class="cursor-pointer">
          <span class="text-gray-100 dark:text-gray-300">Arrastra y suelta una imagen aquí o haz clic para
              seleccionar</span>
      </label>
      <input id="image-upload" type="file" accept="image/*" @change="handleFileUpload" class="hidden">
  
      <!-- Opción para eliminar la imagen actual con confirmación -->
      <button @click="showConfirmationModal" v-if="imageUrl">Eliminar imagen</button>
  
      <!-- Modal de confirmación -->
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white p-4 rounded-lg shadow-lg max-w-md">
          <p class="mb-4">¿Estás seguro que deseas eliminar la imagen?</p>
          <div class="flex justify-end">
            <button @click="deleteImage" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2">Eliminar</button>
            <button @click="closeModal" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, defineComponent } from 'vue';
  import { uploadImage, deleteImageFromStorage } from '../firebaseConfig';
  
  export default defineComponent({
    emits: ['upload', 'delete'], // Define los eventos que emitirá este componente
  
    setup(_, { emit }) {
      const imageUrl = ref(null);
      const showModal = ref(false);
  
      const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
          try {
            const url = await uploadImage(file); // Sube la imagen y obtiene la URL
            imageUrl.value = url; // Asigna la URL a la referencia reactiva
            emit('upload', url); // Emite el evento 'upload' con la URL de la imagen
          } catch (error) {
            console.error("Error al cargar la imagen:", error);
          }
        }
      };
  
      const showConfirmationModal = () => {
        showModal.value = true;
      };
  
      const closeModal = () => {
        showModal.value = false;
      };
  
      const deleteImage = async () => {
        if (imageUrl.value) {
          try {
            await deleteImageFromStorage(imageUrl.value); // Elimina la imagen del almacenamiento
            imageUrl.value = null; // Borra la URL de la imagen
            emit('delete'); // Emite el evento 'delete' para indicar que la imagen fue eliminada
            closeModal(); // Cierra el modal después de eliminar la imagen
            console.log("Imagen eliminada correctamente.");
          } catch (error) {
            console.error("Error al eliminar la imagen:", error);
          }
        }
      };
  
      return { imageUrl, handleFileUpload, showConfirmationModal, closeModal, deleteImage, showModal };
    }
  });
  </script>
  