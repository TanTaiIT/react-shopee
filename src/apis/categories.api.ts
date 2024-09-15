import http from "../http/http"
import { SuccessFullType } from "./ultils"
import { Category } from "../types/category.type"
const categoryApi = {
  getCategory() {
    return http.get<SuccessFullType<Category[]>>('categories')
  }
}

export default categoryApi