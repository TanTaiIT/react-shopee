import { useQuery } from "@tanstack/react-query"
import useQueryConfig from "../hook/useQueryConfig"
import productApi from "../apis/product.api"
import { ProductListConfig } from "../types/product.type"
import AsideFilter from "../components/AsideFilter"
import categoryApi from "../apis/categories.api"
import SortProductList from "../components/SortProductList"
import Product from './../components/Product'
// import Pagination from "../components/Pagination"
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
              <SortProductList queryConfig={queryConfig} pageSize={productData.data.data.pagination.page_size} />

              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {
                  productData.data.data.products.map((product) => {
                    return (
                      <div className='col-span-1' key={product._id}>
                        <Product product={product} />
                      </div>
                    )
                  })
                }
              </div>

              {/* <Pagination queryConfig={queryConfig} pageSize={productData.data.data.pagination.page_size} /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList