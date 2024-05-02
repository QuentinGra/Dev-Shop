export interface filters {
  search: search
  categories: categories
  prices: prices
}

export interface search {
  title: string
  icon: string
  inputType: 'text'
  placeholder: string
  value: string
}

export interface categories {
  title: string
  icon: string
  inputType: 'checkbox'
  value: []
  items: item[]
}

export interface prices {
  title: string
  icon: string
  inputType: 'radio'
  value: string
  items: item[]
}

export interface item {
  id: number
  name: string
  value: string
}
