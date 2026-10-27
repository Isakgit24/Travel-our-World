import { getSummary } from "@/service/wikiService"
import { useQuery } from "@tanstack/react-query"

export  function useWikiSummary(name?:string) {
  return useQuery({
    queryKey: ['summary',name],
    queryFn:()=>{
        if(name === undefined ){
            throw new Error('no Name')
        }
        return getSummary(name)
    },
    enabled: name !== undefined,
    staleTime: 10_800_000,
  })
}
