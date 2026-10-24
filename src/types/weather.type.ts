export type WeatherResponce ={
     data: {
            objects: Weather[]
        }
}

export type Weather = {
   current: {
    temperature_2m: number
    wind_speed_10m: number
    weather_code: number 
   }
}
