<template>
  <Disclosure as="nav" v-slot="{ open }">
    <div class="fixed top-0 z-50 w-full bg-white shadow">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center flex-shrink-0">
              <router-link to="/">
                <img class="h-36 w-auto" src="../assets/logo-roninmez.svg"
                  alt="RONINMEZ - Soluciones digitales en desarrollo web y análisis de datos, posicionamiento SEO" />
              </router-link>
            </div>

            <!-- Navigation links -->
            <div class="hidden sm:block">
              <div class="flex justify-center space-x-4">
                <RouterLink v-for="item in navigation" :key="item.name" :to="item.to"
                  :class="[item.current ? 'bg-indigo-900 text-white' : 'text-black-300', 'rounded-md px-3 py-2 text-sm font-medium', item.current ? '' : 'hover:underline']"
                  :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <RouterLink v-for="item in navigation" :key="item.name" :to="item.to" @click="open = false"
            :class="[item.current ? 'bg-indigo-900 text-white' : 'text-black-300', 'block rounded-md px-3 py-2 text-base font-medium', item.current ? '' : 'hover:underline']"
            :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
        </div>
      </DisclosurePanel>
    </div>
  </Disclosure>
  <RouterView />
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const navigation = ref([
  { name: 'Inicio', to: '/', current: false },
  { name: 'Blog', to: '/blog', current: false },
  { name: 'Solicitar Presupuesto', to: '/presupuesto', current: true },
])
</script>
