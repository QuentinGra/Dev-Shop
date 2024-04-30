export interface filters {
  search: search
  categories: categories
}

export interface search {
  title: string
  icon: string
  inputType: string
  placeholder: string
  value: string
}

export interface categories {
  title: string
  icon: string
  inputType: string
  value: []
}
