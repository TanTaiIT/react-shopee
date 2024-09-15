import http from "../http/http"
import { ProductListConfig } from "../types/product.type"
import { SuccessFullType } from "./ultils"
import { productList } from "../types/product.type"
const productApi = {
  getProductList(params: ProductListConfig) {
    return http.get<SuccessFullType<productList>>('products', {
      params
    })
  }
}

export default productApi