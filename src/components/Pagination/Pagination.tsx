import { Link } from "react-router-dom"
import { queryConfig } from "../../hook/useQueryConfig"
import classNames from "classnames"

interface PaginationPropsType {
  pageSize: number
  queryConfig: queryConfig
}
const RANGE = 2
const Pagination = (props: PaginationPropsType) => {
  const { queryConfig, pageSize } = props
  const page = queryConfig.page || 1

  const renderPagination = () => {
    let dotBefore = false
    let dotAfter = false

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span key={index} className='mx-2 rounded border bg-white px-3 py-2 shadow-sm'>...</span>
        )
      }

      return null
    }

    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span key={index} className='mx-2 rounded border bg-white px-3 py-2 shadow-sm'>
            ...
          </span>
        )
        return null
      }

    }
  }
  return (
    // Array(pageSize).fill(0).map((_, index) => {
    //   const pageNumber: number = Number(index + 1)

    //   return (
    //     <Link to={{ pathname: '/' }} key={index} className={classNames('mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm', {
    //       'border-cyan-500': pageNumber === page,
    //       'border-transparent': pageNumber !== page
    //     })} >
    //       {pageNumber}
    //     </Link>
    //   )
    // })
    <div className='mt-6 flex flex-wrap justify-center'>
      {
        page === 1 ? (
          <span className='mx-2 cursor-not-allowed rounded border bg-white/60 px-3 py-2 shadow-sm'>Prev</span>
        ) : (
          <Link to={{ pathname: '/' }}>Prev</Link>
        )
      }
      1
      {page === pageSize ? (
        <span className='mx-2 cursor-not-allowed rounded border bg-white/60 px-3 py-2'>Next</span>
      ) : (
        <Link to={{ pathname: '/' }} className='mx-2 cursor-pointer rounded bg-white px-3 py-2 shadow-sm'>Next</Link>
      )}
    </div>
  )
}

export default Pagination