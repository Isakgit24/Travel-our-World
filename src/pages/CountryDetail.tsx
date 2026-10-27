import { useCountries } from "@/hooks/useCountries"
import useRetry from "@/hooks/useRetry"
import { useWeather } from "@/hooks/useWeather"
import { useWikiSummary } from "@/hooks/useWikiSummary"
import { Button } from "@/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Skeleton } from "@/ui/skeleton"
import { Link, useParams } from "react-router-dom"

export const CountryDetail = () => {
    const { identifier } = useParams()
    const { data: countries = [] , isLoading, error } = useCountries()
    const {retryDetail} = useRetry()
    const country = countries?.find((c) => c.codes.alpha_3.toLowerCase() === String(identifier) ||
     countries?.find((c) => c.uuid === String(identifier) )
)
    const capital = country?.capitals[0] 
    const weather = useWeather(
        capital?.coordinates.lat,
        capital?.coordinates.lng
    )
    const summary = useWikiSummary(
        country?.names.common.toLowerCase()
    )
  
   
  
    if (error) {
      return <div>
            <p >Something went wrong with getting this Country:{error.message}</p> 
            <Button 
            className="bg-green-400"
        
            onClick={()=>retryDetail(country?.names.common,capital?.coordinates.lat,capital?.coordinates.lng)}
          
            >try again</Button>
        </div> 
        
    }
  if (isLoading) {
        return (
            <Card>
                <CardHeader>
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-2/3" />
                </CardContent>
            </Card>
        )
    }
if(!country){
    return (
        <div>
     <h1> 404-country not found</h1>
        <Link to='/'>to start</Link>
        </div>
    )
}
  

    const nativeObj = country.names.native
    const hasFlag = Boolean(country.flag.url_png || country.flag.url_svg)
    const hasThumbnail = Boolean(summary.data?.thumbnail.source ||summary.data?.originalimage)

    return (
        <Card className="flex flex-col justify-center  items-start m-5">
            
            <CardContent>
                <div className="flex flex-row items-center justify-center">
                   {hasThumbnail && <img className="w-full max-w-2xl h-auto" src={summary.data?.originalimage.source || summary.data?.thumbnail.source} alt={`${country.names.common}s flagg`} />}
                   </div>
                      <CardTitle >{country.names.common}</CardTitle>
                <p>{summary.data?.extract}</p>
<a>Fell wiki artical: href={summary.data?.content_urls.desktop.page}</a>
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
                        </li>

                    ))}
                </ul>
                <h2>Flag:</h2>
                {hasFlag && <img className="w-30" src={country.flag.url_png || country.flag.url_svg} alt={country.names.common} />}
                {weather.data && (
                    <div>
                        <p>Väder kod: {weather.data.current.weather_code}</p>
                        <p>Temperatur: {weather.data.current.temperature_2m} ℃</p>
                        <p>vindhastighet: {weather.data.current.wind_speed_10m} km/h</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}


