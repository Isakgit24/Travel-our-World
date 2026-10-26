
import { useSearchParams } from "react-router-dom"


export function useCountrySearchParams()  {
    const [searchParams, setSearchParams] = useSearchParams()

  const region = searchParams.get('region') || ''
  const search = searchParams.get('search') || ''
const pageValue = Number(searchParams.get('page') ?? '1')
const page = Number.isInteger(pageValue) && pageValue > 0 ? pageValue : 1

  const updateParams = (
    updates: Record<string, string | null>,
    replace: true
  ) => {
    setSearchParams(
      (searchParams) => {
        Object.entries(updates).forEach(([key, value]) => {
          value !== null
            ? searchParams.set(key, value)
            : searchParams.delete(key)
        })
        return searchParams
      },
      { replace }
    )
  }


  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateParams({ search: e.target.value || null,page:'1' }, true)
  }
  const handleRegionChange = (
    selectedRegion: string
  ) => {
    updateParams({ region: selectedRegion || null,page:'1' }, true)
  }
  const all = (
  ) => {
    updateParams({region: null},true)
  }

const setPage = (value:number)=>{
  updateParams({page:String(value) },true)
}

  return {
   search,
   region,
   page,
   handleSearchChange,
   handleRegionChange,
   all,
   setPage,
   updateParams

}
}
