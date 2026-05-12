import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const STATUS = {
  APPROVED:  'Approved',
  QUOTE:     'Quote Received - Action Required',
  AWAITING:  'Awaiting External Permits (NRW/EPA)',
  CONFLICT:  'DMR Conflict - Revision Required'
}

const seedApplications = [
  {
    id: 'APP-2025-001',
    title: 'Riverside Residential Complex',
    address: '45 River View Dr, Brisbane',
    date: '10 May 2025',
    type: 'Residential',
    status: STATUS.APPROVED
  },
  {
    id: 'APP-2025-002',
    title: 'Downtown Commercial Tower',
    address: '120 Queen St, Brisbane',
    date: '11 May 2025',
    type: 'Commercial',
    status: STATUS.QUOTE
  },
  {
    id: 'APP-2025-003',
    title: 'Suburban Eco-Housing',
    address: '88 Green Blvd, Gold Coast',
    date: '12 May 2025',
    type: 'Residential',
    status: STATUS.AWAITING
  },
  {
    id: 'APP-2025-004',
    title: 'Highway Retail Park',
    address: '200 M1 Highway, Logan',
    date: '9 May 2025',
    type: 'Commercial',
    status: STATUS.CONFLICT
  }
]

export const useApplicationStore = defineStore('applications', () => {
  const applications = ref([...seedApplications])
  const searchQuery  = ref('')

  const filteredApplications = computed(() => {
    const q = searchQuery.value.toLowerCase()
    if (!q) return applications.value
    return applications.value.filter(
      a => a.title.toLowerCase().includes(q) || a.id.toLowerCase().includes(q)
    )
  })

  function addApplication(payload) {
    const nextNum = String(applications.value.length + 1).padStart(3, '0')
    applications.value.unshift({
      id: `APP-2025-${nextNum}`,
      title: payload.title,
      address: payload.address,
      date: new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }),
      type: payload.developmentType,
      status: STATUS.AWAITING
    })
  }

  function deleteApplication(id, status) {
    applications.value = applications.value.filter(
      app => !(app.id === id && app.status === status)
    )
  }

  return { applications, searchQuery, filteredApplications, addApplication ,deleteApplication}
})