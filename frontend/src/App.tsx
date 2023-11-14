import { useEffect, useState } from 'react'
import './index.css'
import { Home } from './components/Home'
import { Detail } from './components/Detail'
import { Header}from './components/Header'

export function App() {
  const [page, setPage] = useState('detail')
  const [country, setCountry] = useState({      
  flag: '',
  name: '',
  nativeName: '', 
  population: 0,
  region: '',
  subRegion: '', 
  capital: '',
  domain: '',
  currencies: '',
  languages: '',
  borderCountries: [],})
  const [countryData, setCountryData] = useState([
    { 
      flag: '',
      name: '',
      nativeName: '', 
      population: 0,
      region: '',
      subRegion: '', 
      capital: '',
      domain: '',
      currencies: '',
      languages: '',
      borderCountries: [],
      alpha2Code: ''
    }
  ])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/countries')
      const json = await response.json()
      console.log(json[2])
      setCountry(json[2])
      setCountryData(Array.from(json))
    }
    fetchData()
  }, [])
  return (
      <div>
        <Header />
        {
          page === 'home' ? <Home countryData={countryData}/>: <Detail countryData={country}/>
        }
      </div>
  )
}

