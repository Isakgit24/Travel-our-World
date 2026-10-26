import { useMemo } from 'react'
import { useCountries } from './useCountries'
import { useCountrySearchParams } from './useCountrySearchParams'

export function useSearchRegionFilter() {
      const { data: countries = []} = useCountries()
    const   {search,region} = useCountrySearchParams()
      const regions = [ ...new Set(countries.map((country) => country.region))]

       const matchCountries = useMemo(() => {
          return countries.filter((country) => {
            const matchRegion = !region || country.region.toLowerCase() === region.toLowerCase()
            const matchSearch = !search || country.names.common.toLowerCase().includes(search.toLowerCase())
            return matchRegion && matchSearch
          })
        }, [countries, search, region])
      const searchMatches = countries.filter((c)=> c.names.common.toLowerCase().includes(search.toLowerCase()))
  return {
    regions,
    matchCountries,
    searchMatches
  }
}
