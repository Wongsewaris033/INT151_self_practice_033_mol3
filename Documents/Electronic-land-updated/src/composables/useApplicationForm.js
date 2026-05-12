import { reactive, computed } from 'vue'

export const DEVELOPMENT_TYPES = ['Residential', 'Commercial', 'Industrial', 'Mixed Use']

export function useApplicationForm() {
  const form = reactive({
    title:           '',
    developmentType: 'Residential',
    address:         '',
    description:     '',
    naturalEnv:      false,
    regulatedArea:   false
  })

  const errors = reactive({
    title:   '',
    address: ''
  })

  const isValid = computed(() =>
    form.title.trim().length > 0 && form.address.trim().length > 0
  )

  function validate() {
    errors.title   = form.title.trim()   ? '' : 'Application title is required.'
    errors.address = form.address.trim() ? '' : 'Property address is required.'
    return isValid.value
  }

  function reset() {
    form.title           = ''
    form.developmentType = 'Residential'
    form.address         = ''
    form.description     = ''
    form.naturalEnv      = false
    form.regulatedArea   = false
    errors.title         = ''
    errors.address       = ''
  }

  return { form, errors, isValid, validate, reset }
}
