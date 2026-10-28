import type { WikiSummary } from '@/types/wiki.type'
import request from './api'



export const getSummary = async (name:string):Promise<WikiSummary> => {
   
    return request<WikiSummary>(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`)

}
