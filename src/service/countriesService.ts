
import  type { Countries, CountriesResponse } from '../types/countries.type'
import request from './api'



const token = 'rc_live_4271148537854703b9d324cd24af61b8'

export const getCountries = async ():Promise<Countries[]> => {
    const allCountries:Countries[] = []
    const limit = 100
    let offset = 0
    let more = true

    while(more){
        const url = new URL('https://api.restcountries.com/countries/v5')
        url.searchParams.set('limit',String(limit))
           url.searchParams.set('offset',String(offset))
    
    const res = await request<CountriesResponse>(url.toString(),{
        headers:{
            Authorization:`Bearer ${token}`
        },
        
    })
    allCountries.push(...res.data.objects)
    more = res.data.meta.more
    offset += res.data.meta.count 
}

return allCountries
}