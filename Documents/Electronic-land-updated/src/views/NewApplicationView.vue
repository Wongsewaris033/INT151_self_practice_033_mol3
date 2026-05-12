<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

    <!-- Page header -->
    <div class="flex items-center gap-3 mb-6 sm:mb-8">
      <RouterLink
        to="/"
        class="w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
      >
        <IconChevronLeft class="w-4 h-4 text-gray-600 dark:text-gray-300" />
      </RouterLink>
      <div>
        <h1 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">New Land Development Application</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Lodge a new application with the Smart eDA system.</p>
      </div>
    </div>

    <!-- Form card -->
    <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6 transition-colors duration-200">

      <!-- ── General Information ── -->
      <section class="p-5 sm:p-7 border-b border-gray-100 dark:border-gray-700">
        <div class="flex items-center gap-2 mb-5 sm:mb-6">
          <IconInfo class="text-blue-600" style="width:18px;height:18px" />
          <h2 class="text-base font-bold text-gray-900 dark:text-white">General Information</h2>
        </div>

        <!-- Application Title -->
        <div class="mb-5">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Application Title <span class="text-red-500">*</span>
          </label>
          <input
            v-model="form.title"
            type="text"
            placeholder="e.g. Riverside Residential Complex"
            :class="[
              'w-full px-3 py-2.5 border rounded-lg text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-150',
              errors.title
                ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                : 'border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-100 dark:focus:ring-blue-900'
            ]"
          />
          <p v-if="errors.title" class="mt-1 text-xs text-red-500">{{ errors.title }}</p>
        </div>

        <!-- Development Type + Address -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Development Type <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <IconBuilding class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
              <select
                v-model="form.developmentType"
                class="w-full pl-9 pr-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-150 appearance-none"
              >
                <option v-for="t in DEVELOPMENT_TYPES" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Property Address <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <IconLocation class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
              <input
                v-model="form.address"
                type="text"
                placeholder="Full property address"
                :class="[
                  'w-full pl-9 pr-3 py-2.5 border rounded-lg text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-150',
                  errors.address
                    ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                    : 'border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-100 dark:focus:ring-blue-900'
                ]"
              />
            </div>
            <p v-if="errors.address" class="mt-1 text-xs text-red-500">{{ errors.address }}</p>
          </div>
        </div>

        <!-- Project Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Project Description</label>
          <textarea
            v-model="form.description"
            rows="4"
            placeholder="Briefly describe the development plan..."
            class="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-150"
          />
        </div>
      </section>

      <!-- ── Environmental Impact ── -->
      <section class="p-5 sm:p-7">
        <div class="flex items-center gap-2 mb-5 sm:mb-6">
          <IconWarning class="text-yellow-500" style="width:18px;height:18px" />
          <h2 class="text-base font-bold text-gray-900 dark:text-white">Environmental Impact</h2>
        </div>

        <div class="flex flex-col gap-3">
          <CheckboxCard
            v-model="form.naturalEnv"
            label="Modifications to the Natural Environment"
            description="Select this if the plan involves land alteration. This will require an assessment by the Department of Natural Resources and Water (NRW)."
          />
          <CheckboxCard
            v-model="form.regulatedArea"
            label="Regulated Environmental Area"
            description="Select this if the area is regulated by environmental protection laws. This will require a license from the Environmental Protection Agency (EPA)."
          />
        </div>
      </section>

    </div>

    <!-- Footer actions -->
    <div class="flex justify-end gap-3">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all duration-150"
      >
        Cancel
      </RouterLink>
      <button
        @click="handleSubmit"
        class="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-150"
      >
        <IconSave class="w-4 h-4" />
        Lodge Application
      </button>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useApplicationStore }                   from '@/stores/applicationStore'
import { useApplicationForm, DEVELOPMENT_TYPES } from '@/composables/useApplicationForm'
import CheckboxCard    from '@/components/CheckboxCard.vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import IconInfo        from '@/components/icons/IconInfo.vue'
import IconWarning     from '@/components/icons/IconWarning.vue'
import IconBuilding    from '@/components/icons/IconBuilding.vue'
import IconLocation    from '@/components/icons/IconLocation.vue'
import IconSave        from '@/components/icons/IconSave.vue'

const router = useRouter()
const store  = useApplicationStore()
const { form, errors, validate, reset } = useApplicationForm()

function handleSubmit() {
  if (!validate()) return
  store.addApplication({ ...form })
  reset()
  router.push('/')
}
</script>
