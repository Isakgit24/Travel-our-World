
import type { Countries } from "../types/countries.type"
import { CountriesCard } from "./CountriesCard"

type CountriesProps = {
    countries: Countries[]
}

export const CountriesList = ({ countries }: CountriesProps) => {
    return (
        <ul className="flex flex-col items-center">
            {countries.map((country) => (
                <li key={country.names.official}>
                    <CountriesCard countries={country} />
                   

                </li>

            ))}
        </ul>
    )
}
