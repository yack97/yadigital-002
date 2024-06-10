<template>
  <footer class="bg-white dark:bg-zinc-300">
    <div class="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="mb-6 text-lg font-semibold text-gray-900 text-center">
            Mapa del sitio
          </h2>
          <ul class="text-gray-500 dark:text-gray-800 font-medium text-center">
            <li class="mb-4">
              <router-link to="/">Página Principal</router-link>
            </li>
            <li class="mb-4">
              <router-link to="/Presupuesto">Soliciar presupuesto</router-link>
            </li>
            <li>
              <router-link to="/blog">Blog</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-lg font-semibold text-gray-900  text-center">
            Información de Contacto
          </h2>
          <ul class="text-gray-500 dark:text-gray-800 font-medium text-center">
            <li class="mb-4">
              Av Cabildo 2553
            </li>
            <li class="mb-4">
              <p>Celular: 11-3487-6862</p>
            </li>
            <li class="mb-4">
              <p>info@roninmez.net</p>
            </li>
          </ul>
        </div>
        <div>
          <div class="flex justify-center md:justify-start">
            <router-link to="/">

              <img src="../assets/logo-roninmez.svg" class="h-24 md:h-32"
                alt="RONINMEZ - Soluciones digitales en desarrollo web y análisis de datos, posicionamiento SEO" />
            </router-link>
          </div>
          <div class="flex justify-center mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/yadir-acuna-pinzon/" target="_blank" rel="noopener">
              <img src="../assets/icons8-linkedin.svg" alt="LinkedIn de roninmez" class="w-6 h-6" />
            </a>
            <a href="https://github.com/yack97" target="_blank" rel="noopener">
              <img src="../assets/icons8-github.svg" alt="GitHub de roninmez" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-400">© 2024 RONINMEZ. Todos los derechos reservados.</span>
      </div>
    </div>
  </footer>
</template>
