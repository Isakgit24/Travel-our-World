
import type { Weather} from '@/types/weather.type'
import request from './api'



export const getWeather = async (lat:number,lng:number):Promise<Weather> => {
    const params = new URLSearchParams({
        latitude:String(lat),
        longitude:String(lng),
        current:'temperature_2m,wind_speed_10m,weather_code',
        timezone:'auto'
    })
    return request<Weather>(`https://api.open-meteo.com/v1/forecast?${params}`)

}

