

import { useQuery } from '@tanstack/react-query'
import { getCountries } from '../service/countriesService'

export  function useCountries() {
  return useQuery({
    queryKey: ['countries'],
    queryFn:getCountries,
    staleTime:10_800_000,
  })
}
