import type { Countries } from "../types/countries.type"

type CountriesCardProps = {
    countries: Countries
}
export const CountriesCard = ({ countries }: CountriesCardProps) => {

    return (
        <div>

            <h1>{countries.names.common}</h1>
            <img src={countries.flag.url_png} alt={countries.names.official}/>
         
            <ul>
                <p>Capitals:</p>
            {countries.capitals.map((capital)=>(
                <li key={countries.names.common}>
                    <p> {capital.name}</p>
                </li>
            ))}
            </ul>
            <p>Region: {countries.region}</p>

         

    

        </div>
    )
}
