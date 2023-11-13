import { useEffect, useState } from 'react'
import './index.css'
import { Country } from './Components/Country'
import { Dropdown } from './Components/Dropdown'

type Country = { 
  flag: string; 
  name: string; 
  population: number; 
  region: string; 
  capital: string;
  alpha2Code: string
}

export function App() {
  const [countryData, setCountryData] = useState([
    { 
      flag: '',
      name: '',
      population: 0,
      region: '',
      capital: '',
      alpha2Code: ''
    }
  ])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/countries')
      const json = await response.json()
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
        <section className='country-list'>
        {
          countryData.map((country: Country) => {
            return (
              <Country 
              imgPath={country.flag}
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

