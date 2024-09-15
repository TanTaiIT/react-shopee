import { useQuery } from "@tanstack/react-query"
import useQueryConfig from "../hook/useQueryConfig"
import productApi from "../apis/product.api"
import { ProductListConfig } from "../types/product.type"
import AsideFilter from "../components/AsideFilter"
import categoryApi from "../apis/categories.api"
const ProductList = () => {
  const queryConfig = useQueryConfig()
  const { data: productData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProductList(queryConfig as ProductListConfig)
    }
  })

  const { data: categoryData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategory()
    }
  })
  return (
    <div className="bg-gray-200 py-6">
      <div className="container">
        {productData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter categories={categoryData?.data?.data || []} queryConfig={queryConfig} />
            </div>
            <div className='col-span-9'>
              product list
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList