<template>
  <div class="flex flex-col lg:flex-row items-center">
    <div class="lg:w-1/2">
      <img class="mx-auto lg:mx-0 max-w-full h-auto rounded-lg shadow-lg" src="../assets/Contacto-form.jpg"
        alt="Profesionales de Roninmez asesorando a un cliente sobre soluciones de desarrollo web, SEO y análisis de datos." />
    </div>
    <div class="isolate bg-white px-6 py-8 sm:py-12 lg:px-8 lg:w-1/2">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Listo para hablar sobre tu próximo proyecto digital?</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Déjanos tus datos y te contactaremos para ofrecerte una asesoría gratuita y personalizada sobre cómo podemos ayudarte a lograr tus objetivos digitales.</p>
      </div>

      <form @submit.prevent="handleSubmit" class="mx-auto mt-16 max-w-xl sm:mt-20 w-full">
        <div v-if="error" class="error">{{ error }}</div>
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="nombre" class="block text-sm font-semibold leading-6 text-gray-900">Nombre:</label>
            <div class="mt-2.5">
              <input type="text" id="nombre" v-model="nombre" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
            </div>
          </div>
          <div>
            <label for="apellido" class="block text-sm font-semibold leading-6 text-gray-900">Apellido:</label>
            <div class="mt-2.5">
              <input type="text" id="apellido" v-model="apellido" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
            </div>
          </div>
          <div>
            <label for="link" class="block text-sm font-semibold leading-6 text-gray-900">Link:</label>
            <div class="mt-2.5">
              <input type="text" id="link" v-model="link" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email:</label>
            <div class="mt-2.5">
              <input type="email" id="email" v-model="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="mensaje" class="block text-sm font-semibold leading-6 text-gray-900">Mensaje:</label>
            <div class="mt-2.5">
              <textarea id="mensaje" v-model="mensaje" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
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
    };
  },
  methods: {
    async handleSubmit() {
      this.error = null; // Limpia el error anterior

      // Validar el correo y el enlace
      if (!this.isValidEmail(this.email)) {
        this.error = 'Por favor, ingrese un correo electrónico válido.';
        return;
      }
      if (this.link && !this.isValidURL(this.link)) {
        this.error = 'Por favor, ingrese un enlace válido.';
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
          text: 'Su formulario ha sido enviado con éxito. nos pondremos en contacto a la brevedad',
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
