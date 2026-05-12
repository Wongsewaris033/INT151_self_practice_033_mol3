<template>
  <span :class="badgeClass">{{ status }}</span>
</template>

<script setup>
import { computed } from 'vue'
import { STATUS } from '@/stores/applicationStore'

const props = defineProps({
  status: { type: String, required: true }
})

const BASE = 'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border'

const MAP = {
  [STATUS.APPROVED]: `${BASE} bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800`,
  [STATUS.QUOTE]:    `${BASE} bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800`,
  [STATUS.AWAITING]: `${BASE} bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-400 dark:border-violet-800`,
  [STATUS.CONFLICT]: `${BASE} bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800`
}

const badgeClass = computed(() => MAP[props.status] ?? `${BASE} bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600`)
</script>
