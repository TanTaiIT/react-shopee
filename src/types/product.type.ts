export interface ProductListConfig {
  page?: string | number
  limit?: number | string
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price'
  exclude?: string
  order?: 'asc' | 'desc'
  rating_filter?: number | string
  price_max?: number | string
  price_min?: number | string
  name?: string
  category?: string
}

export type Product = {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  description: string
  category: {
    _id: string
    name: string
  }
  image: string
  createdAt: string
  updatedAt: string
}

export type productList = {
  products: Product[],
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}