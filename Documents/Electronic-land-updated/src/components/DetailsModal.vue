<template>
  <div
    v-if="app"
    class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4"
    @click.self="$emit('close')"
  >
    <div class="w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden transition-colors duration-200">

      <div class="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white pr-4 truncate">
          {{ app.title }}
        </h2>

        <button
          @click="$emit('close')"
          class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-2xl leading-none flex-shrink-0"
        >
          ×
        </button>
      </div>

      <div class="p-5 sm:p-6">
        <dl class="divide-y divide-gray-100 dark:divide-gray-700">

          <div
            v-for="row in rows"
            :key="row.label"
            class="flex justify-between items-start py-3 gap-4"
          >
            <dt class="text-sm text-gray-500 dark:text-gray-400 w-36 flex-shrink-0">
              {{ row.label }}
            </dt>

            <dd class="text-sm text-gray-800 dark:text-gray-100 font-medium text-right">
              {{ row.value }}
            </dd>
          </div>

          <div class="flex justify-between items-center py-3 gap-4">
            <dt class="text-sm text-gray-500 dark:text-gray-400 w-36 flex-shrink-0">
              Status
            </dt>

            <dd>
              <span
                class="px-3 py-1 rounded-full text-xs font-semibold"
                :class="statusClass"
              >
                {{ app.status }}
              </span>
            </dd>
          </div>

        </dl>

        <button
          @click="$emit('close')"
          class="mt-5 sm:mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-150"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  app: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])

const rows = computed(() => {
  if (!props.app) return []

  return [
    { label: 'Application ID', value: props.app.id },
    { label: 'Address',        value: props.app.address },
    { label: 'Type',           value: props.app.type },
    { label: 'Date Submitted', value: props.app.date }
  ]
})

const statusClass = computed(() => {
  switch (props.app?.status) {
    case 'Approved':  return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
    case 'Pending':   return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400'
    case 'Rejected':  return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
    default:          return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
  }
})
</script>
