import { useEffect, useState } from 'react'
import './index.css'
import { Home } from './components/Home'
import { Detail } from './components/Detail'
import { Header}from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import { Country, CountryData } from './types'

export function App() {
  const [country, setCountry] = useState<CountryData>()

  const [countryData, setCountryData] = useState<Country[]>([])
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
        <BrowserRouter>
        <Route path='/'> <Home countryData={countryData}/></Route>
        <Route path='/:country'> <Detail countryData={country}/></Route>
        </BrowserRouter>
      </div>
  )
}

