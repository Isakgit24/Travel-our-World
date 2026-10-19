import type { Countries } from "../types/countries.type"
import { CountriesCard } from "./CountriesCard"

type CountriesProps = {
    countries: Countries[]
}

export const CountriesList = ({ countries }: CountriesProps) => {
    return (
        <ul>
            {countries.map((c) => (
                <li key={c.names.official}>
                    <CountriesCard countries={c} />
                </li>

            ))}
        </ul>
    )
}
