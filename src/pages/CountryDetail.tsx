import { useCountries } from "@/hooks/useCountries"
import { useWeather } from "@/hooks/useWeather"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Link, useParams } from "react-router-dom"

export const CountryDetail = () => {
    const { id } = useParams()
    const { data: countries, isLoading, error } = useCountries()
    const country = countries?.find((c) => c.uuid === String(id))
     const capital = country?.capitals[0]
 const weather = useWeather(
    capital?.coordinates.lat,
    capital?.coordinates.lng
 )
    if (error) {
        return <p>Something went wrong:{error.message}</p>
    }
    if (!country) {
        return <p>No Country found</p>
    }

    if (isLoading) {
        return <p>loading Countries....</p>
    }


    const nativeObj = country.names.native
    const hasFlag = Boolean(country.flag.url_png || country.flag.url_svg)

    return (
        <Card className="flex flex-col justify-center  items-start m-5">
            <CardHeader className="mr-20">
                <Link to='/countrydetail'>
                    <CardTitle >{country.names.common}</CardTitle>

                    {hasFlag && <img className="w-30" src={country.flag.url_png} alt={country.names.official} />}
                </Link>
            </CardHeader>
            <CardContent>
                <ul>
                    <p>Native names:</p>
                    {Object.entries(nativeObj).map(([code, name]) => (
                        <li key={code}>
                            {code}: {name.common} - {name.official}
                        </li>
                    ))}
                </ul>
                <p>Region: {country.region}</p>

                <p>Sub Region: {country.subregion}</p>

                <p>Population: {country.population}</p>
                <ul>
                    <p> Languages:</p>
                    {country.languages.map((language, index) => (
                        <li key={`${country.uuid}-${index}`}>
                            <p> {language.name}</p>
                        </li>
                    ))}
                </ul>
                <ul>
                    <p> Currency:</p>
                    {country.currencies.map((currency, index) => (
                        <li key={`${country.uuid}-${index}`}>
                            <p> {currency.name}</p>
                        </li>
                    ))}
                </ul>
                <ul>

                    {country.capitals.map((capital, index) => (

                        <li key={`${country.uuid}-${index}`}>
                            <p>Capital: {capital.name}</p>
                            <p>cords: {capital.coordinates.lat}</p>
                            <p>cords: {capital.coordinates.lng}</p>

                        </li>

                    ))}
                </ul>
               {weather.data && (
                <div>
                 <p>Väder kod: {weather.data.current.weather_code}</p>
                <p>Temperatur: {weather.data.current.temperature_2m} ℃</p>
                  <p>vindhastighet: {weather.data.current.wind_speed_10m}</p>
                  </div>
               )}
            </CardContent>
        </Card>
    )
}


