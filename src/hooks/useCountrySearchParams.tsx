
import { useSearchParams } from "react-router-dom"


export function useCountrySearchParams()  {
    const [searchParams, setSearchParams] = useSearchParams()

  const region = searchParams.get('region') || ''
  const search = searchParams.get('search') || ''


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


  return {
   search,
   region,
   handleSearchChange,
   handleRegionChange,
   all,
   updateParams

}
}
