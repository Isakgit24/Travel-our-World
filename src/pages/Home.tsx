import { CountriesList } from "../components/CountriesList"
import { useCountries } from "../hooks/useCountries"



 function Home() {
    const {data: countries ,isLoading,error} = useCountries()
    if(error){
        return <p>Something went wrong:{error.message}</p>
    }
 

    if(isLoading ||!countries){
        return <p>loading Countries....</p>
    }
  return (
    <>
    <p>filter btn</p>
    <CountriesList countries={countries}/>
    </>
  )
}
export default Home