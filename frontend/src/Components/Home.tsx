import { Country } from "./Country"
import { Dropdown } from "./Dropdown"

  type Country = {
    flag: string; 
    name: string; 
    population: number; 
    region: string; 
    capital: string;
    alpha2Code: string
  }

  type HomeProps = { 
    countryData: Country[]
  }

export const Home = ({countryData}: HomeProps) => {
  return (
    <>
    <div id='search-options'>
        <input type='text' placeholder='Search for a country...'></input>
        <Dropdown />
        </div>
        <div className='country-list'>
        {
          countryData.map(({flag, name, population, region, capital, alpha2Code}: Country) => {
            return (
              <Country 
              imgPath={flag}
              countryName={name}
              population={population}
              region={region}
              capital={capital}
              key={alpha2Code}
              />
            )
          })
        }
        </div>
        </>
  )
}
