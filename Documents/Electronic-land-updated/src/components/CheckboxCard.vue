<template>
  <label
    :class="[
      'flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all duration-150',
      modelValue
        ? 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20'
        : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10'
    ]"
    @click.prevent="$emit('update:modelValue', !modelValue)"
  >
    <div
      :class="[
        'w-4.5 h-4.5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-150',
        modelValue
          ? 'bg-blue-600 border-blue-600'
          : 'border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700'
      ]"
      style="width:18px; height:18px;"
    >
      <svg v-if="modelValue" width="10" height="10" viewBox="0 0 12 12" fill="none">
        <polyline points="2,6 5,9 10,3" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <div class="flex-1 min-w-0">
      <p class="text-sm font-semibold text-gray-800 dark:text-gray-100">{{ label }}</p>
      <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{{ description }}</p>
    </div>
  </label>
</template>

<script setup>
defineProps({
  modelValue:  { type: Boolean, default: false },
  label:       { type: String,  required: true },
  description: { type: String,  default: '' }
})
defineEmits(['update:modelValue'])
</script>
