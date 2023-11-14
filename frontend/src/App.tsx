import { useEffect, useState } from 'react'
import './index.css'

import { Home } from './components/Home'
import { Header}from './components/Header'

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
        <Header />
        <Home countryData={countryData}/>
      </div>
  )
}

