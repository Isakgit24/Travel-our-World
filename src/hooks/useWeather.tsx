

import { useQuery } from '@tanstack/react-query'

import { getWeather } from '@/service/weatherService'

export  function useWeather(lat?:number,lng?:number) {
  return useQuery({
    queryKey: ['weather',lat,lng],
    queryFn:()=>{
        if(lat === undefined || lng === undefined){
            throw new Error('no coordinates')
        }
        return getWeather(lat,lng)
    },
    enabled: lat !== undefined && lng !== undefined,
    staleTime: 10_800_000,
  })
}
