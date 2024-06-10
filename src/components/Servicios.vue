<template>
  <section class="overflow-hidden py-24 sm:py-32 relative">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">Servicios de Desarrollo Web, SEO y Análisis de Datos para Impulsar tu Negocio</h2>
            <h3 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Soluciones digitales personalizadas para hacer crecer tu negocio online</h3>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              En Roninmez, te ayudamos a alcanzar el éxito online con soluciones personalizadas de desarrollo web, SEO y análisis de datos. Aumenta tu visibilidad, atrae más clientes y mejora tus resultados con nuestras estrategias probadas.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                <dd class="inline ml-2">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img src="../assets/Seccion-productos2.webp" alt="Expertos en desarrollo web, SEO y análisis de datos trabajando en un proyecto digital"
          class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:max-w-[48rem] md:-ml-4 lg:-ml-0" />
      </div>
           <!-- Fondo - Gradiente -->
     <div class="absolute inset-x-0 bottom-0 z-10 transform-gpu overflow-hidden blur-3xl">
       <div
         class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
         style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
     </div>

      </div>
  </section>
</template>


<script setup>
import { CloudArrowUpIcon, CodeBracketSquareIcon, UserGroupIcon, ChartBarSquareIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Desarrollo web a tu medida:',
    description:
      'Transformamos tus ideas en realidad con soluciones personalizadas que se adaptan a tus necesidades y objetivos específicos.',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Análisis de datos y SEO:',
    description: 'Utilizamos análisis de datos avanzados y estrategias de SEO para mejorar la visibilidad y el rendimiento de tu sitio web en los motores de búsqueda.',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Escalabilidad y seguridad:',
    description: 'Diseñamos soluciones escalables y seguras para garantizar la estabilidad y protección de tu aplicación incluso en entornos de crecimiento rápido.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Acompañamiento continuo:',
    description: 'Estamos contigo en cada paso del camino, brindándote soporte y asesoramiento continuo para garantizar el éxito a largo plazo de tu proyecto.',
    icon: UserGroupIcon,
  },
]
</script>
