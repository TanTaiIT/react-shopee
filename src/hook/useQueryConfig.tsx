import { useSearchParams } from "react-router-dom"
import { ProductListConfig } from "../types/product.type"
import { omitBy } from "lodash"

export type queryConfig = {
  [key in keyof ProductListConfig]: string;
}
export default function useQueryConfig() {
  const [searchParams] = useSearchParams()
  const queryParams: ProductListConfig = Object.fromEntries([...searchParams])

  const queryConfig: queryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '20',
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      rating_filter: queryParams.rating_filter,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      category: queryParams.category
    },
    undefined
  )

  return queryConfig
}