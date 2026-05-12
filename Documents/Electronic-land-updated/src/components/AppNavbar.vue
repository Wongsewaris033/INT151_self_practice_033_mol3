<template>
  <nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4 sm:gap-8">

      <RouterLink to="/" class="flex items-center gap-2 flex-shrink-0 no-underline">
        <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span class="text-white text-xs font-bold tracking-tight">eDA</span>
        </div>
        <span class="font-bold text-gray-900 dark:text-white text-sm">Smart eDA</span>
      </RouterLink>

      <div class="hidden md:flex items-center gap-1">
        <RouterLink
          to="/"
          :class="[
            'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150',
            route.name === 'ApplicationList'
              ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200'
          ]"
        >
          <IconDocument class="w-3.5 h-3.5" />
          My Applications
        </RouterLink>

        <RouterLink
          to="/new"
          :class="[
            'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150',
            route.name === 'NewApplication'
              ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200'
          ]"
        >
          <IconPlusCircle class="w-3.5 h-3.5" />
          New Application
        </RouterLink>
      </div>

      <div class="ml-auto flex items-center gap-2">

        <button
          @click="toggle"
          class="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <div class="hidden md:flex items-center gap-2">
          <div class="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <IconUser class="w-4 h-4 text-gray-400 dark:text-gray-300" />
          </div>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</span>
        </div>

        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition-all duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 flex flex-col gap-1"
      >
        <RouterLink
          to="/"
          @click="mobileOpen = false"
          :class="[
            'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150',
            route.name === 'ApplicationList'
              ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          ]"
        >
          <IconDocument class="w-4 h-4" />
          My Applications
        </RouterLink>

        <RouterLink
          to="/new"
          @click="mobileOpen = false"
          :class="[
            'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150',
            route.name === 'NewApplication'
              ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          ]"
        >
          <IconPlusCircle class="w-4 h-4" />
          New Application
        </RouterLink>

        <div class="flex items-center gap-2 px-3 py-2.5 border-t border-gray-100 dark:border-gray-700 mt-1">
          <div class="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <IconUser class="w-4 h-4 text-gray-400 dark:text-gray-300" />
          </div>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</span>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import IconDocument   from '@/components/icons/IconDocument.vue'
import IconPlusCircle from '@/components/icons/IconPlusCircle.vue'
import IconUser       from '@/components/icons/IconUser.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const route = useRoute()
const mobileOpen = ref(false)
const { isDark, toggle } = useDarkMode()
</script>
