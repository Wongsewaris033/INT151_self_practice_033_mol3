<script setup>
import { ref } from 'vue'
import { STATUS, useApplicationStore } from '@/stores/applicationStore.js'

import StatusBadge from '@/components/StatusBadge.vue'
import DetailModal from '@/components/DetailsModal.vue'

import IconDocument from '@/components/icons/IconDocument.vue'
import IconLocation from '@/components/icons/IconLocation.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'

const store = useApplicationStore()

const props = defineProps({
  application: {
    type: Object,
    required: true
  },
  isLast: {
    type: Boolean,
    default: false
  }
})

const showModal = ref(false)

function handleDelete() {
  store.deleteApplication(props.application.id,props.application.status)
}
</script>

<template>
  <div
    @click="showModal = true"
    class="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150"
    :class="{ 'border-b border-gray-100 dark:border-gray-700': !isLast }"
  >
    <!-- Mobile card layout -->
    <div class="md:hidden px-4 py-4 flex items-start gap-3">
      <div
        class="w-9 h-9 bg-blue-50 dark:bg-blue-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
      >
        <IconDocument class="w-4 h-4 text-blue-500 dark:text-blue-400" />
      </div>

      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-gray-900 dark:text-white truncate">
          {{ application.title }}
        </p>

        <div class="flex items-center gap-1 mt-0.5">
          <span class="font-mono text-xs text-gray-400 dark:text-gray-500">
            {{ application.id }}
          </span>
        </div>

        <div class="flex items-center gap-1 mt-0.5">
          <IconLocation
            class="w-2.5 h-2.5 text-gray-400 dark:text-gray-500 flex-shrink-0"
          />

          <span class="text-xs text-gray-400 dark:text-gray-500 truncate">
            {{ application.address }}
          </span>
        </div>

        <div class="flex items-center justify-between mt-2 gap-2 flex-wrap">
          <StatusBadge :status="application.status" />

          <div
            class="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500"
          >
            <span>{{ application.type }}</span>

            <span class="text-gray-200 dark:text-gray-600">·</span>

            <span>{{ application.date }}</span>
          </div>
        </div>

        <button
          v-if="application.status !== STATUS.APPROVED"
          @click.stop="handleDelete"
          class="mt-3 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium hover:bg-red-100 dark:hover:bg-red-900/50 transition"
        >
          Delete
        </button>
      </div>

      <IconChevronRight
        class="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-2.5"
      />
    </div>

    <div
      class="hidden md:grid items-center px-5 py-4"
      style="grid-template-columns: 1fr 160px 130px 260px 110px"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-9 h-9 bg-blue-50 dark:bg-blue-900/40 rounded-lg flex items-center justify-center flex-shrink-0"
        >
          <IconDocument class="w-4 h-4 text-blue-500 dark:text-blue-400" />
        </div>

        <div>
          <p class="text-sm font-semibold text-gray-900 dark:text-white">
            {{ application.title }}
          </p>

          <div class="flex items-center gap-1 mt-0.5">
            <span class="font-mono text-xs text-gray-400 dark:text-gray-500">
              {{ application.id }}
            </span>

            <span class="text-gray-200 dark:text-gray-600 text-xs">·</span>

            <IconLocation
              class="w-2.5 h-2.5 text-gray-400 dark:text-gray-500 flex-shrink-0"
            />

            <span class="text-xs text-gray-400 dark:text-gray-500">
              {{ application.address }}
            </span>
          </div>
        </div>
      </div>

      <span class="text-sm text-gray-600 dark:text-gray-300">
        {{ application.date }}
      </span>

      <span class="text-sm text-gray-600 dark:text-gray-300">
        {{ application.type }}
      </span>

      <div>
        <StatusBadge :status="application.status" />
      </div>

      <div class="flex items-center justify-center  gap-3 z-50">
        <button
          v-if="application.status !== STATUS.APPROVED"
          @click.stop="handleDelete"
          class="px-3 py-1.5 rounded-lg cursor-pointer bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium hover:bg-red-100 dark:hover:bg-red-900/50 transition"
        >
          Delete
        </button>

      </div>
    </div>
  </div>

  <DetailModal
    :app="showModal ? application : null"
    @close="showModal = false"
  />
</template>