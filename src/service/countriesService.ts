
import  type { Countries, CountriesResponse } from '../types/countries.type'
import request from './api'

const baseUrl = 'https://api.restcountries.com/countries/v5?limit=100'

const token = 'rc_live_4271148537854703b9d324cd24af61b8'

export const getCountries = async ():Promise<Countries[]> => {
    const res = await request<CountriesResponse>(baseUrl,{
        headers:{Authorization:`Bearer ${token}`}
    })
    return res.data.objects
}