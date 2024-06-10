<template>
  <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg
        class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1"
            patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-indigo-600">Desarrollo Ágil y Seguro</p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Desarrollo Web a Medida y
              Estrategias SEO para Impulsar tu Negocio Online</h2>
            <p class="mt-6 text-xl leading-8 text-gray-700">En RONINMEZ, creamos soluciones digitales personalizadas
              que impulsan el crecimiento de tu negocio. Nuestro equipo de expertos en desarrollo web, SEO y análisis de
              datos te ayudará a alcanzar tus objetivos online.</p>
          </div>
        </div>
      </div>
      <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="../assets/premium_photo-1664298145390-fa6018ad4093.webp"
          alt="Equipo de expertos en desarrollo web y SEO trabajando en un proyecto digita" />
      </div>
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>Nuestro enfoque comienza con el desarrollo web a medida. Utilizando tecnologías de vanguardia como
              Vue.js, Python, Java, y JavaScript, transformamos tus ideas en realidad, creando sitios web personalizados
              que se adaptan a tus necesidades y objetivos específicos. Desde el diseño hasta la implementación, nos
              aseguramos de que cada paso del proceso refleje tus valores y visión empresarial.

              Nuestro compromiso con la excelencia se refleja en todo lo que hacemos. ¿Por qué elegirnos?
            </p>
            <ul role="list" class="mt-8 space-y-8 text-gray-600">
              <li class="flex gap-x-3">
                <ForwardIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Desarrollo Web Personalizado:</strong> Creamos sitios
                  web a medida con Vue.js, Python, Java y JavaScript que se adaptan a tus necesidades y
                  objetivos.</span>
              </li>
              <li class="flex gap-x-3">
                <ForwardIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Estrategias SEO Avanzadas:</strong> Mejoramos tu
                  visibilidad en buscadores con análisis de datos y técnicas SEO de vanguardia.</span>
              </li>
              <li class="flex gap-x-3">
                <ForwardIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Análisis de Datos:</strong> Utilizamos Google Cloud
                  Platform, Power BI y otras herramientas para obtener insights valiosos y optimizar tu estrategia
                  digital.</span>
              </li>
              <li class="flex gap-x-3">
                <ForwardIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Seguridad y Escalabilidad:</strong> Garantizamos la
                  seguridad y escalabilidad de tus soluciones digitales para un crecimiento sostenible.</span>
              </li>
              <li class="flex gap-x-3">
                <ForwardIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Acompañamiento Continuo:</strong> Te brindamos soporte
                  y asesoramiento en cada etapa de tu proyecto para asegurar tu éxito online.</span>
              </li>
            </ul>
            <div class="mt-8">
              <RouterLink to="/Presupuesto"
                class="px-5 py-3 text-lg tracking-wider text-white bg-indigo-900 rounded-lg md:px-8 hover:bg-indigo-600 group"><span>Solicitar
                  Presupuesto</span> </RouterLink>
            </div>
            <p class="mt-8">En resumen, en RONINMEZ nos apasiona ayudar a las empresas a alcanzar sus objetivos
              digitales. Desde el desarrollo web a medida hasta el análisis de datos y las estrategias SEO, ofrecemos
              soluciones personalizadas diseñadas para impulsar tu éxito en línea. Contáctanos hoy y déjanos ser tu
              aliado en el viaje hacia el éxito digital.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ForwardIcon } from '@heroicons/vue/20/solid'
</script>