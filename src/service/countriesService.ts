
import  type { Countries, CountriesResponse } from '../types/countries.type'
import request from './api'

const baseUrl = 'https://api.restcountries.com/countries/v5?limit=100'

export const getCountries = async ():Promise<Countries[]> => {
    const res = await request<CountriesResponse>(baseUrl)
    return res.data.objects
}