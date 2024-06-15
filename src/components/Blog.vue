
import { RouterLink } from 'vue-router';
<template>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <!-- Fondo - Gradiente superior -->
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[#7c3aed] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
      <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Blog de Roninmez: Conocimiento
        Experto en Desarrollo Web, SEO y Análisis de Datos</h2>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-600">Explora nuestros artículos y descubre cómo
        impulsar tu negocio online.</p>
    </div>
    <div class="grid gap-8 lg:grid-cols-2">

      <article class="article-container relative p-6 rounded-lg border shadow-md dark:border-gray-700">
        <!-- Imagen de fondo con efecto diagonal -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 clip-diagonal"></div>

        <!-- Contenido del artículo -->
        <div class="relative z-10 article-content flex flex-col justify-between h-full text-gray-500">
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
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-black"><RouterLink to="/Articulo1">Cómo el Desarrollo Web a Medida
              Puede Impulsar el Crecimiento de Tu Negocio</RouterLink></h2>
          <p class="mb-5 font-light text-black"> Explica cómo un sitio web personalizado puede ayudar
            a las empresas a diferenciarse de la competencia, mejorar la experiencia del usuario y aumentar las
            conversiones.</p>
          <div class="flex justify-between items-center">
            <RouterLink to="/Articulo1" class="inline-flex items-center font-medium text-black hover:underline">
              Leer más...
              <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </RouterLink>
          </div>
        </div>
      </article>

      <article class="article-container1 relative p-6 rounded-lg border shadow-md dark:border-gray-700">
        <!-- Imagen de fondo con efecto diagonal -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 clip-diagonal"></div>

        <!-- Contenido del artículo -->
        <div class="relative z-10 article-content flex flex-col justify-between h-full text-gray-500">
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
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-black"><RouterLink to="/Articulo2">Guía Completa de SEO para Pymes:
            Cómo Mejorar Tu Posicionamiento en Google</RouterLink></h2>
          <p class="mb-5 font-light text-black"> Este articulo Ofrece una guía paso a paso sobre cómo
          las pequeñas y medianas empresas pueden optimizar su sitio web para los motores de búsqueda y mejorar su
          visibilidad en Google.</p>
          <div class="flex justify-between items-center">
            <RouterLink to="Articulo2" class="inline-flex items-center font-medium text-black hover:underline">
              Leer más...
              <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </RouterLink>
          </div>
        </div>
      </article>


      <article class="article-container2 relative p-6 rounded-lg border shadow-md dark:border-gray-700">
        <!-- Imagen de fondo con efecto diagonal -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 clip-diagonal"></div>

        <!-- Contenido del artículo -->
        <div class="relative z-10 article-content flex flex-col justify-between h-full text-gray-500">
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
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-black"><RouterLink to="Articulo3">El Poder del Análisis de Datos
            para Tomar Decisiones de Negocio Inteligentes</RouterLink></h2>
          <p class="mb-5 font-light text-black">Explica cómo el análisis de datos puede ayudar a las
          empresas a comprender mejor a sus clientes, identificar tendencias y tomar decisiones informadas para mejorar
          sus resultados.</p>
          <div class="flex justify-between items-center">
            <RouterLink to="Articulo3" class="inline-flex items-center font-medium text-black hover:underline">
              Leer más...
              <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </RouterLink>
          </div>
        </div>
      </article>

    </div>
        <!-- Fondo - Gradiente inferior -->
        <div class="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

</script>


<style>
.article-container {
  background-image: url('../assets/primerArticulo.webp');
  background-size: cover;
  background-position: center;
}

.article-content {
  background-color: rgba(255, 255, 255, 0.7);
  /* ajusta la opacidad según necesites */
}

.article-container1 {
  background-image: url('../assets/articulo2.webp');
  background-size: cover;
  background-position: center;
}

.article-content1 {
  background-color: rgba(255, 255, 255, 0.7);
  /* ajusta la opacidad según necesites */
}

.article-container2 {
  background-image: url('../assets/articulo3.webp');
  background-size: cover;
  background-position: center;
}

.article-content2 {
  background-color: rgba(255, 255, 255, 0.7);
  /* ajusta la opacidad según necesites */
}
</style>