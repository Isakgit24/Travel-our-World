
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import type { Countries } from "../types/countries.type"
import { Link } from "react-router-dom"

type CountriesCardProps = {
    countries: Countries
}
export const CountriesCard = ({ countries }: CountriesCardProps) => {

    const hasFlag = Boolean(countries.flag.url_png || countries.flag.url_svg)

    return (
        <Card className="flex flex-row justify-evenly w-100 items-center m-1">
            <CardHeader className="mr-20">
                <Link to={`/countries/${countries.uuid}`}>
                <CardTitle >{countries.names.common}</CardTitle>

                {hasFlag && <img  className="w-40 h-24 object-contain" src={countries.flag.url_png} alt={countries.names.official} />}
                </Link>
            </CardHeader>
            <CardContent>
                <ul>
                  
                    {countries.capitals.map((capital, index) => (
                        <li key={`${countries.uuid}-${index}`}>
                            <p>Capital: {capital.name}</p>
                        </li>
                    ))}
                </ul>
                <p>Region: {countries.region}</p>
            </CardContent>
        </Card>
    )
}
