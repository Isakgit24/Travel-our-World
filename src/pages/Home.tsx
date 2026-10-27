
import { useCountrySearchParams } from "@/hooks/useCountrySearchParams"
import { useCountries } from "../hooks/useCountries"
import { CountriesCard } from "@/components/CountriesCard"
import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { useSearchRegionFilter } from "@/hooks/useSearch-RegionFilter"
import usePagering from "@/hooks/usePagering"
import useRetry from "@/hooks/useRetry"


function Home() {
  const { data: countries = [], isLoading, error } = useCountries()
  const {search,region,handleRegionChange,handleSearchChange,all} = useCountrySearchParams()
  const {matchCountries,searchMatches,regions} = useSearchRegionFilter()
const {setPage,visibleCountries,currentPage,pageCount} = usePagering()
const {retryCountries} = useRetry()


  if (error) {
   return <div>
            <p >Something went wrong with getting the Country:{error.message}</p> 
            <Button 
            className="bg-green-400"
        
            onClick={()=>retryCountries()}
          
            >Try again</Button>
        </div> 
  }


  if (isLoading || !countries) {
    return <p>loading Countries....</p>
  }
  return (
    <>
      <div>
        <form onSubmit={(e)=>e.preventDefault()} >
          <label htmlFor='search-input'>Search</label>
          <Input
            id="search-input"
            type="search"
            placeholder="Search Countries..."
            value={search}
            onChange={handleSearchChange}
         
          />
        </form>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center gap-4 mb-4 mt-4">
        <Button
          onClick={all}
          variant="outline"
          className='rounded-full'
          aria-pressed="false"

        >All
        </Button>
        {regions.map((reg) => (
          <Button
            key={reg}
            onClick={() => handleRegionChange(reg)}
            variant="outline"
            className='rounded-full'
aria-pressed="false"
          >{reg}

          </Button>
        ))}

      </div>
      <ul className="flex flex-row flex-wrap items-center">
        {visibleCountries.map((c, index) => (
          <li key={`${c.uuid}-${index}`}>
            <CountriesCard countries={c} />
          </li>
        ))}
      </ul>
          {search  && matchCountries.length === 0 && searchMatches.length === 0 && (
      <p>No country matches {search} check spelling</p>
    ) }
        {search  && region && matchCountries.length === 0 && searchMatches.length > 0 && (
      <p>{search} was found but not in {region}</p>
    ) }
 <Button
 disabled={currentPage <= 1}
 onClick={()=> setPage(currentPage - 1)}
 aria-pressed="false"
 >Prev
 
 </Button>
 <span>
  Page {currentPage} of {Math.max(pageCount,1)}
 </span>
 <Button
 disabled={currentPage >= pageCount}
 onClick={()=> setPage(currentPage + 1)}
 aria-pressed="false"
 > Next
 
 </Button>
    </>
  )
}
export default Home

