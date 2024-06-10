<template>
    <div class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right" data-aos-duration="800">
              <!-- Fondo - Morado -->
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[#7c3aed] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
        <div class="pr-2 md:mb-14 py-14 md:py-0">
            <h1 class="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">Impulsa tu negocio con desarrollo web, SEO y análisis de datos personalizados</h1>
            <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
                Aumenta tus ventas, atrae más clientes y domina el mercado online con nuestras soluciones digitales a medida
            </p>
            <div class="mt-4">
                <RouterLink to="/Presupuesto"
                    class="px-5 py-3 text-lg tracking-wider text-white bg-indigo-900 rounded-lg md:px-8 hover:bg-indigo-600 group"><span>Solicitar Presupuesto</span> </RouterLink>
            </div>
        </div>

        <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img id="heroImg1"
                class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
                src="../assets/seccion-hero.svg"           
                alt="Representación visual de nuestros servicios de análisis de datos, desarrollo web y SEO para impulsar tu negocio en línea, Expertos en desarrollo web, SEO y análisis de datos trabajando en un proyecto digital" width="500" height="488"/>
                
        </div>
    </div>
</template>