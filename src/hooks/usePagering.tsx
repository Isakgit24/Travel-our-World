
import { useSearchParams } from 'react-router-dom'
import { useCountrySearchParams } from './useCountrySearchParams'
import { useSearchRegionFilter } from './useSearch-RegionFilter'

export default function usePagering() {
     const [searchParams] = useSearchParams()
  const {updateParams} = useCountrySearchParams()
    const {matchCountries} = useSearchRegionFilter()

 const pageValue = Number(searchParams.get('page') ?? '1')
const page = Number.isInteger(pageValue) && pageValue > 0 ? pageValue : 1

const pageSize = 20
const pageCount = Math.ceil(matchCountries.length / pageSize)
const currentPage = Math.min(page,Math.max(pageCount,1))

const visibleCountries = matchCountries.slice(
  (currentPage - 1) * pageSize,
  currentPage * pageSize
)
const setPage = (value:number)=>{
  updateParams({page:String(value) },true)
}
  return{
    visibleCountries,
    setPage,
    currentPage,
    pageCount,
  }
}
