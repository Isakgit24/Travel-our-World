
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import type { Countries } from "../types/countries.type"
import { Link } from "react-router-dom"

type CountriesCardProps = {
    countries: Countries
}
export const CountriesCard = ({ countries }: CountriesCardProps) => {

    const hasFlag = Boolean(countries.flag.url_png || countries.flag.url_svg)
    
const identifier = countries.codes.alpha_3
? countries.codes.alpha_3.toLowerCase()
:countries.uuid

    return (
        <Card className=" flex w-full  min-w-0  flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <CardHeader className="mr-0">
                
              <Link to={ `/countries/${identifier}`}>
               
                <CardTitle >{countries.names.common}</CardTitle>

                {hasFlag && <img  className="w-40 h-24 object-contain" src={countries.flag.url_png ||countries.flag.url_svg} alt={countries.names.official} />}
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
