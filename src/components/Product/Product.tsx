import { Product as ProductTypes } from "../../types/product.type"
import { formatCurrentCy, formatNumberToSocialStyle, generateNameId } from "../../utils"
import { Link } from "react-router-dom"
import ProductRating from "../ProductRating/ProductRating"
interface ProductType {
  product: ProductTypes
}
const Product = ({ product }: ProductType) => {
  return (
    <Link to={`/${generateNameId({ name: product.name, id: product._id })}`}>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[0.04rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img src={product.image} alt={product.name} className='absolute top-0 left-0 h-full bg-white object-cover' />
        </div>

        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-xs line-clamp-2'>{product.name}</div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text  -gray-500 line-through'>
              <span className='text-xs'>$</span>
              <span className='text-sm'>{formatCurrentCy(product.price_before_discount)}</span>
            </div>
            <div className='mt-1 truncate text-orange-400'>
              <span className='text-xs'>$</span>
              <span className='text-sm'>{formatCurrentCy(product.price)}</span>
            </div>


          </div>

          <div className='mt-3 flex items-center justify-end'>
            <ProductRating rating={product.rating} />
            <div className='ml-2 text-sm'>
              <span>{formatNumberToSocialStyle(product.sold)}</span>
              <span className='ml-1'>Soled</span>
            </div>
          </div>


        </div>
      </div>
    </Link>
  )
}

export default Product