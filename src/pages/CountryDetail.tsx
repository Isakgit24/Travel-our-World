import { weatherByCode } from "@/components/WeatherCodes"
import { useCountries } from "@/hooks/useCountries"
import useRetry from "@/hooks/useRetry"
import { useWeather } from "@/hooks/useWeather"
import { useWikiSummary } from "@/hooks/useWikiSummary"
import { Button } from "@/ui/button"
import { Card, CardContent, CardTitle } from "@/ui/card"
import { Skeleton } from "@/ui/skeleton"
import { Link, useLocation, useParams } from "react-router-dom"
import { Cloud } from "lucide-react"
export const CountryDetail = () => {
    const { identifier } = useParams()
    const { data: countries = [], isLoading, error } = useCountries()
    const { retryDetail } = useRetry()
    const country = countries?.find((c) => c.codes.alpha_3.toLowerCase() === String(identifier) ||
        countries?.find((c) => c.uuid === String(identifier))
    )
    const capital = country?.capitals[0]
    const weather = useWeather(
        capital?.coordinates.lat,
        capital?.coordinates.lng
    )
    const weatherCode = weather.data?.current.weather_code
    const weatherInfo =
    weatherCode === undefined
    ? undefined
    :weatherByCode[weatherCode] ?? {
        description:'unkown Weather',
        icon:Cloud,
    }
    const summary = useWikiSummary(
        country?.names.common.toLowerCase()
    )



    if (error) {
        return <div>
            <p >Something went wrong with getting this Country:{error.message}</p>
            <Button
                className="bg-green-400"

                onClick={() => retryDetail(country?.names.common, capital?.coordinates.lat, capital?.coordinates.lng)}

            >try again</Button>
        </div>

    }
    if (isLoading) {
        return (
            <Card >
               
                <CardContent className=" flex  flex-col items-center gap-4" >

                  <Skeleton className=" aspect-video w-full " />{/*bild */}
            
                    <Skeleton className="h-4 w-1/2" />{/*name */}

                    <Skeleton className="h-4 w-2/3" />{/*beskriving*/}

                    <Skeleton className="h-4 w-1/2" />{/*natvie*/}

                    <Skeleton className="h-4 w-1/2" />{/*reg */}

                    <Skeleton className="h-4 w-1/2" />{/*subreg */}

                    <Skeleton className="h-4 w-1/2" />{/*pop */}

                    <Skeleton className="h-4 w-1/2" />{/*lang */}

                    <Skeleton className="h-4 w-1/2" />{/*currency */}

                    <Skeleton className="h-4 w-1/2" />{/*capital */}

                    <Skeleton className="h-4 w-1/2" />{/*flag */}

                    <Skeleton className="h-4 w-1/2" />{/*weather 1 */}
                      <Skeleton className="h-4 w-1/2" />{/*weather 2 */}
                        <Skeleton className="h-4 w-1/2" />{/*weather 3 */}
                           <Skeleton className="h-4 w-1/2" />{/*artical*/}
                </CardContent>
            </Card>
        )
    }
    if (!country) {
        return (
            <div>
                <h1> 404-country not found</h1>
                <Link to='/'>to start</Link>
            </div>
        )
    }

const location = useLocation()
const returnTo =
typeof location.state?.returnTo === 'string'
? location.state.returnTo 
:'/'
    const nativeObj = country.names.native
    const hasFlag = Boolean(country.flag.url_png || country.flag.url_svg)
    const hasThumbnail = Boolean(summary.data?.thumbnail?.source || summary.data?.originalimage?.source)

    return (
        <Card className="mx-2 my-4 flex min-w-0 flex-col items-start sm:mx-4 sm:my-6 lg:mx-auto lg:my-8 lg:max-w-5xl">

            <CardContent>
                <Link to={returnTo}>Go back to search results</Link>
                <div className="flex flex-row items-center justify-center">
                    {hasThumbnail && <img className="w-full max-w-2xl h-auto object-contain sm:max-w-2xl lg:max-w-4xl" src={summary.data?.originalimage?.source || summary.data?.thumbnail?.source} alt={`${country.names.common}s thumbnail`} />}
                </div>
                <CardTitle >{country.names.common}</CardTitle>
                <p>{summary.data?.extract}</p>
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

                <p>Population: { new Intl.NumberFormat('sv-SE').format(country.population)}</p>
                <ul>
                    <p> Languages:</p>
                    {country.languages.map((language, index) => (
                        <li key={`${country.uuid}-${index}`}>
                             {language.name}
                        </li>
                    ))}
                </ul>
                <ul>
                    <p> Currency:</p>
                    {country.currencies.map((currency, index) => (
                        <li key={`${country.uuid}-${index}`}>
                             {currency.name}
                        </li>
                    ))}
                </ul>
                <ul>

                    {country.capitals.map((capital, index) => (

                        <li key={`${country.uuid}-${index}`}>
                            Capital: {capital.name}
                        </li>

                    ))}
                </ul>
                <h2>Flag:</h2>
                {hasFlag && <img className="w-30" src={country.flag.url_png || country.flag.url_svg} alt={country.names.common} />}
                {weather.data && weatherInfo && (
                    <div>
                        <weatherInfo.icon aria-hidden='true'/>
                        <p>{weatherInfo.description}</p>
                        <p>temperature: {weather.data.current.temperature_2m} ℃</p>
                        <p>Wind speed: {weather.data.current.wind_speed_10m} km/h</p>
                    </div>
                )}
                    <a  className='bg-green-400 rounded-full p-1 mb-2 ' href={summary.data?.content_urls.desktop.page} 
                >For full artical click here

                </a>
            </CardContent>
            
        </Card>
    )
}


