import { createSearchParams, Link } from "react-router-dom"
import { Category } from "../../types/category.type"
import { queryConfig } from "../../hook/useQueryConfig"
import classNames from "classnames"
import { Controller, useForm } from "react-hook-form"
import { NoUndefindFields } from "../../types/utils"
import { ProductListConfig } from "../../types/product.type"
import InputNumber from "../InputNumber"
import Button from "../Button"
import RatingStart from "../RatingStart"
interface AsideFilterPropsType {
  categories?: Category[]
  queryConfig: queryConfig

}
type FormData = NoUndefindFields<Pick<ProductListConfig, 'price_max' | 'price_min'>>

const AsideFilter = (props: AsideFilterPropsType) => {
  const { categories, queryConfig } = props
  const { category } = queryConfig
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
    reset
  } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    }
  })
  return (
    <div className='py-4'>
      <Link to='/' className='flex items-center font-bold'>
        <svg viewBox='0 0 12 10' className='mr-3 h-4 w-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        All category
      </Link>

      <div className='my-4 h-[1px] bg-gray-300'></div>
      <ul>
        {
          categories && categories.map(item => {
            const isActive = category === item._id
            return (
              <li className='py-2 pl-2' key={item._id}>
                <Link to={{
                  pathname: '/ProductList',
                  search: createSearchParams({
                    ...queryConfig,
                    category: item._id
                  }).toString()
                }}
                  className={classNames('relative px-2', {
                    'font-semibold text-orange': isActive
                  })}
                >
                  {
                    isActive && (
                      <svg viewBox='0 0 4 7' className='absolute top-1 left-[-10px] h-2 w-2 fill-orange'>
                        <polygon points='4 3.5 0 0 0 7' />
                      </svg>
                    )
                  }
                  {item.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Link to='/' className='mt-4 flex items-center font-bold uppercase'>
        <svg
          enableBackground='new 0 0 15 15'
          viewBox='0 0 15 15'
          x={0}
          y={0}
          className='mr-3 h-4 w-3 fill-current stroke-current'
        >
          <g>
            <polyline
              fill='none'
              points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        Search
      </Link>

      <div className='my-4 h[1px] bg-gray-300'></div>
      <div className='my-5'>
        <div>Khoang gia</div>
        <form className='mt-2'>
          <div className='flex items-center'>
            <Controller
              control={control}
              name='price_min'
              render={({ field }) => {
                return (
                  <InputNumber
                    type='text'
                    className='grow'
                    placeholder='D from'
                    classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    classNameError='hidden'
                    {...field}
                    onChange={(event) => {
                      field.onChange(event)
                      trigger('price_max')
                    }}
                  />
                )
              }}
            />


            <div className='mx-2 mt-2 shrink-0'>-</div>
            <Controller
              control={control}
              name='price_max'
              render={({ field }) => {
                return (
                  <InputNumber
                    className='grow'
                    placeholder='₫ ĐẾN'
                    classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    classNameError='hidden'
                    {...field}
                    onChange={(event) => {
                      field.onChange(event)
                      trigger('price_min')
                    }}
                  />
                )
              }}
            />
          </div>

          <div className='mt-1 min-h-[1.25rem] text-center text-sm text-red-600'>
            {errors?.price_min?.message}
          </div>

          <Button className='flex w-full items-center justify-center bg-orange-400 p-2 text-sm uppercase text-white hover:bg-orange/80'>
            Apply
          </Button>
        </form>
      </div>

      <div className='my-4 h-[1px] bg-gray-300' />
      <div className='text-sm'>Đánh giá</div>

      <RatingStart queryConfig={queryConfig} />

      <div className='h-[1px] my-4 bg-gray-300'>
        <Button className='w-full items-center flex justify-center bg-orange-400 text-sm uppercase text-white hover:bg-orange/80'>
          Delete All
        </Button>
      </div>
    </div>
  )
}

export default AsideFilter