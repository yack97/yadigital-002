<template>
  <div class="relative p-4 sm:p-8 md:p-16 mt-20">
    <!-- Fondo - Gradiente superior -->
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[#7c3aed] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>

    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-8">
        <span class="shadow-lg underline">Proyectos</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <a href="https://carrito-compras-1-1.netlify.app"
          class="relative flex flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5 shadow-lg">
          <div class="h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
            <img src="../assets/premium_photo-1673429738836-b3581b1b6636.jpeg"
              alt="Desarrollo web, ecommerce, CRUD, página de pagos" class="object-cover w-full h-full" />
          </div>
          <h3 class="text-2xl font-semibold text-center text-gray-900 mb-2 sm:text-3xl">E-commerce</h3>
          <p class="text-sm leading-normal text-gray-600">
            Nuestro eCommerce simple, desarrollado en React.js, demuestra nuestra experiencia en la creación de tiendas
            online eficientes y escalables. Implementamos un sistema CRUD (Crear, Leer, Actualizar, Eliminar) para una
            gestión ágil de productos, integramos una API de terceros para obtener datos de productos en tiempo real y
            diseñamos una interfaz intuitiva para una experiencia de compra fluida. Este proyecto es un ejemplo de cómo
            podemos ayudarte a lanzar tu tienda online de forma rápida y efectiva.
          </p>
        </a>
        <a href="https://immersion-004.firebaseapp.com/"
          class="relative flex flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5 shadow-lg transition duration-300 ease-in-out">
          <div class="h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
            <img src="../assets/logoInmersion.webp"
              alt="Desarrollo de Landing Page para Marketing Digital" class="object-cover w-full h-full" />
          </div>
          <h3 class="text-2xl font-semibold text-center text-gray-900 mb-2 sm:text-3xl">Landing Page para Immersion</h3>
          <p class="text-sm leading-normal text-gray-600 sm:block">
            Descubre cómo estamos desarrollando una landing page para uno de nuestros clientes, Immersion. Esta página
            ofrecerá servicios de marketing digital, producción audiovisual, diseño y más.
            Nuestro enfoque se basa en una colaboración continua, utilizando una estructura atómica implementada en
            Firebase y Vue.js. Este trabajo refleja nuestra dedicación a proporcionar soluciones personalizadas que se
            adaptan a las necesidades de nuestros clientes.
          </p>
        </a>
        <a href="https://zenryoku-a4c46.firebaseapp.com/"
          class="relative flex flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5 shadow-lg transition duration-300 ease-in-out">
          <div class="h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
            <img src="../assets/logoZenryoku.webp"
              alt="Servicios de Superación Personal en Zenryoku" class="object-cover w-full h-full" />
          </div>
          <h3 class="text-2xl font-semibold text-center text-gray-900 mb-2 sm:text-3xl">Zenryoku</h3>
          <p class="text-sm leading-normal text-gray-600 sm:block">
            En este proyecto, estamos apoyando a un emprendedor en su sueño de ofrecer servicios de superación personal
            y entrenamiento físico. Estamos creando una plataforma que centraliza todos sus clientes, brindando un
            acompañamiento continuo, permitiendo la revisión y actualización de datos, y facilitando que ellos puedan
            visualizar su crecimiento a medida que trabajan con él.
          </p>
        </a>
      </div>
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
