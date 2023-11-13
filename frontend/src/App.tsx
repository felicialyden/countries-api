import { useEffect, useState } from 'react'
import './index.css'
import { Country } from './Components/Country'
import { Dropdown } from './Components/Dropdown'

type Country = { 
  flags: { png: string }; 
  name: string; 
  population: number; 
  region: string; 
  capital: string;
  alpha2Code: string
}

export function App() {
  const [countryData, setCountryData] = useState([
    { 
      flags: { png: 'string' },
      name: 'string',
      population: 100,
      region: 'string',
      capital: 'string',
      alpha2Code: 'AA'
    }
  ])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/countries')
      const json = await response.json()
      console.log(json)
      setCountryData(Array.from(json))
    }
    fetchData()
  }, [])
  return (
      <div>
        <div id='top-bar'>
        <h1>Where in the world?</h1>
        <button className='align-right center-content clickable'>Dark mode</button>
        </div>
        <div id='search-options'>
        <input type='text' placeholder='Search for a country...'></input>
        <Dropdown />
        </div>
        <section>
        {
          countryData.map((country: Country) => {
            return (
              <Country 
              imgPath={'https://flagcdn.com/w320/ax.png'}
              countryName={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              key={country.alpha2Code}
              />
            )
          })
        }
        </section>
      </div>
  )
}

