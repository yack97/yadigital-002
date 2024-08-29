<template>
  <div class="flex flex-col lg:flex-row items-center">
    <div class="lg:w-1/2">
      <img class="mx-auto lg:mx-0 max-w-full h-auto rounded-lg shadow-lg" src="../assets/Contacto-form.jpg"
        alt="Profesionales de Roninmez asesorando a un cliente sobre soluciones de desarrollo web, SEO y análisis de datos." />
    </div>
    <div class="isolate bg-white px-6 py-8 sm:py-12 lg:px-8 lg:w-1/2">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Listo para hablar sobre tu próximo
          proyecto digital?</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Déjanos tus datos y te contactaremos para ofrecerte una asesoría
          gratuita y personalizada sobre cómo podemos ayudarte a lograr tus objetivos digitales.</p>
      </div>

      <form @submit.prevent="handleSubmit" class="mx-auto mt-16 max-w-xl sm:mt-20 w-full">
        <div v-if="error" class="error">{{ error }}</div>
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="nombre" class="block text-sm font-semibold leading-6 text-gray-900">Nombre:</label>
            <div class="mt-2.5">
              <input type="text" id="nombre" v-model="nombre"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required>
            </div>
          </div>
          <div>
            <label for="apellido" class="block text-sm font-semibold leading-6 text-gray-900">Apellido:</label>
            <div class="mt-2.5">
              <input type="text" id="apellido" v-model="apellido"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required>
            </div>
          </div>
          <div>
            <label for="link" class="block text-sm font-semibold leading-6 text-gray-900">Link:</label>
            <div class="mt-2.5">
              <input type="text" id="link" v-model="link"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email:</label>
            <div class="mt-2.5">
              <input type="email" id="email" v-model="email"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="mensaje" class="block text-sm font-semibold leading-6 text-gray-900">Mensaje:</label>
            <div class="mt-2.5">
              <textarea id="mensaje" v-model="mensaje"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
        </div>
        <div class="mt-10 flex justify-between">
          <button type="submit"
            class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            :disabled="isLoading">
            Enviar
          </button>
          <div role="status" v-if="isLoading" >
            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600 pl-3"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
            </svg>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      link: '',
      email: '',
      mensaje: '',
      error: null,
      isLoading: false, // Nueva propiedad
    };
  },
  methods: {
    async handleSubmit() {
      this.error = null; // Limpia el error anterior
      this.isLoading = true; // Inicia el estado de carga

      // Validar el correo y el enlace
      if (!this.isValidEmail(this.email)) {
        this.error = 'Por favor, ingrese un correo electrónico válido.';
        this.isLoading = false; // Detiene el estado de carga
        return;
      }
      if (this.link && !this.isValidURL(this.link)) {
        this.error = 'Por favor, ingrese un enlace válido.';
        this.isLoading = false; // Detiene el estado de carga
        return;
      }

      try {
        const usuariosCollection = collection(db, 'usuarios');

        await addDoc(usuariosCollection, {
          nombre: this.nombre,
          apellido: this.apellido,
          link: this.link,
          email: this.email,
          mensaje: this.mensaje,
          createdAt: Timestamp.now(), // Marca de tiempo actual
        });

        Swal.fire({
          icon: 'success',
          title: 'Formulario enviado',
          text: 'Su formulario ha sido enviado con éxito. Nos pondremos en contacto a la brevedad',
        });

        console.log('Formulario guardado');
        // Limpia los campos del formulario después de guardarlos
        this.nombre = '';
        this.apellido = '';
        this.link = '';
        this.email = '';
        this.mensaje = '';
      } catch (error) {
        console.error('Error al guardar el formulario:', error);
        this.error = 'Error al guardar. Inténtalo de nuevo.';
      } finally {
        this.isLoading = false; // Detiene el estado de carga al finalizar
      }
    },
    isValidEmail(email) {
      // Validar el formato del correo electrónico
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    isValidURL(url) {
      // Validar el formato del enlace (URL)
      try {
        new URL(url);
        return true;
      } catch (_) {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>