import { CountriesList } from "../components/CountriesList"
import { useCountries } from "../hooks/useCountries"


 function Countries() {
    const {data: countries ,isLoading,error} = useCountries()
    if(error){
        return <p>Something went wrong:{error.message}</p>
    }
 

    if(isLoading ||!countries){
        return <p>loading Countries....</p>
    }
  return (
    <CountriesList countries={countries}/>
    
  )
}
export default Countries