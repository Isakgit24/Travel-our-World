
import { useQueryClient } from '@tanstack/react-query'

export default function useRetry() {

    const QueryClient = useQueryClient()
       const retryCountries = async () =>{
        await Promise.all([
            QueryClient.invalidateQueries({queryKey:["countries"]}),
         
        ])
        
    }
     const retryDetail = async (name?:string,lat?:number,lng?:number) =>{
        await Promise.all([
            QueryClient.invalidateQueries({queryKey:["countries"]}),
             QueryClient.invalidateQueries({queryKey:["summary",{name}]}),
              QueryClient.invalidateQueries({queryKey:["weather",{lat},{lng}]})
        ])
    }
    
  return{
    retryCountries,
   retryDetail
  }
}
