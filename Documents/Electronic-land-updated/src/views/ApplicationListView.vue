<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 sm:mb-8">
      <div>
        <h1 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">My Applications</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage and track your land development applications.</p>
      </div>
      <RouterLink
        to="/new"
        class="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-150 self-start sm:self-auto flex-shrink-0"
      >
        <IconPlus class="w-4 h-4" />
        New Application
      </RouterLink>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">

      <div class="px-4 sm:px-5 py-4 border-b border-gray-100 dark:border-gray-700">
        <div class="relative">
          <IconSearch class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
          <input
            v-model="store.searchQuery"
            type="text"
            placeholder="Search by application ID or title..."
            class="w-full pl-9 pr-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-150"
          />
        </div>
      </div>

      <div
        class="hidden md:grid px-5 py-2.5 bg-gray-50 dark:bg-gray-900/40 border-b border-gray-100 dark:border-gray-700"
        style="grid-template-columns: 1fr 160px 130px 260px 48px"
      >
        <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Application</span>
        <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Date Submitted</span>
        <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Type</span>
        <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Status</span>
        <span></span>
      </div>

      <template v-if="store.filteredApplications.length > 0">
        <ApplicationRow
          v-for="(app, i) in store.filteredApplications"
          :key="app.id"
          :application="app"
          :is-last="i === store.filteredApplications.length - 1"
        />
      </template>

      <div v-else class="flex flex-col items-center justify-center py-16 text-gray-400 dark:text-gray-500">
        <IconSearch class="w-8 h-8 text-gray-200 dark:text-gray-600 mb-3" />
        <p class="text-sm">No applications found.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useApplicationStore } from '@/stores/applicationStore'
import ApplicationRow from '@/components/ApplicationRow.vue'
import IconSearch     from '@/components/icons/IconSearch.vue'
import IconPlus       from '@/components/icons/IconPlusCircle.vue'

const store = useApplicationStore()
</script>
