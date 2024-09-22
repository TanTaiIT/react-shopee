import classNames from "classnames"
import { queryConfig } from "../../hook/useQueryConfig"
import { Link } from "react-router-dom"
interface SortProductListType {
  queryConfig?: queryConfig
  pageSize: Number
}
const SortProductList = (porps: SortProductListType) => {
  const { queryConfig, pageSize } = porps
  const page = Number(queryConfig?.page)


  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className='flex flex-wrap item-center gap-2'>
          <div>Order to</div>
          <button className={classNames('h-8 px-4 text-center text-sm capitalize', {
            'bg-orange-400 text-white hover:bg-orange/80': true,
            'bg-white text-black hover:bg-slate-100': false
          })}>
            Popular
          </button>

          <button
            className={classNames('h-8 px-4 text-center text-sm capitalize ', {
              'bg-orange text-white hover:bg-orange/80': false,
              'bg-white text-black hover:bg-slate-100': true
            })}

          >
            Mới nhất
          </button>
          <button
            className={classNames('h-8 px-4 text-center text-sm capitalize ', {
              'bg-orange text-white hover:bg-orange/80': false,
              'bg-white text-black hover:bg-slate-100': true
            })}
          >
            Bán chạy
          </button>

          <select
            className={classNames('h-8  px-4 text-left text-sm capitalize  outline-none ', {
              'bg-orange text-white hover:bg-orange/80': false,
              'bg-white text-black hover:bg-slate-100': true
            })}
          >
            <option value='' disabled className='bg-white text-black'>
              Giá
            </option>
            <option value={1} className='bg-white text-black'>
              Giá: Thấp đến cao
            </option>
            <option value={2} className='bg-white text-black'>
              Giá: Cao đến thấp
            </option>
          </select>
        </div>

        <div className='flex items-center'>
          <div>
            <span className='text-orange-400'>1</span><span>/2</span>
          </div>

          <div className='ml-2 flex'>
            {
              page === 1 ? (
                <span className='flex h-8 w-9 cursor-not-allowed items-center justify-center rounded-tl-sm rounded-bl-sm bg-white/60 shadow hover:bg-slate-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>
                </span>
              ) : (
                <Link
                  to={{
                    pathname: '/',

                  }}
                  className='flex h-8 w-9  items-center justify-center rounded-tl-sm rounded-bl-sm bg-white  shadow hover:bg-slate-100'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>
                </Link>
              )
            }
            {
              page === pageSize ? (
                <span className='flex h-8 w-9 cursor-not-allowed items-center justify-center rounded-tl-sm rounded-bl-sm bg-white/60  shadow hover:bg-slate-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </span>
              ) : (
                <Link
                  to={{
                    pathname: '/',

                  }}
                  className='flex h-8 w-9  items-center justify-center rounded-tl-sm rounded-bl-sm bg-white  shadow hover:bg-slate-100'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortProductList