import { type filters } from '@/interface/filters.interface'

export const filter: filters = {
  search: {
    title: 'Rechercher',
    icon: 'bi-binoculars-fill',
    inputType: 'text',
    placeholder: 'Chercher',
    value: ''
  },
  categories: {
    title: 'Catégories',
    icon: 'bi-tags-fill',
    inputType: 'checkbox',
    value: [],
    items: [
      {
        id: 1,
        name: 'Gadgets Lumineux',
        value: 'luminous-gadgets'
      },
      {
        id: 2,
        name: 'Technologie Futuriste',
        value: 'futuristic-technology'
      },
      {
        id: 3,
        name: 'Café et Code',
        value: 'coffee-and-code'
      }
    ]
  },
  prices: {
    title: 'Prix',
    icon: 'bi-coin',
    inputType: 'radio',
    value: 'all',
    items: [
      {
        id: 1,
        name: 'Tous les prix',
        value: 'all'
      },
      {
        id: 2,
        name: 'Moins de 100€',
        value: '0-100'
      },
      {
        id: 3,
        name: 'Entre 100 et 200€',
        value: '100-200'
      },
      {
        id: 4,
        name: 'Plus de 200€',
        value: '200-1000'
      }
    ]
  }
}
