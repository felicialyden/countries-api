//import { useState } from 'react'
import './index.css'
import { Country } from './Components/Country'
import { Dropdown } from './Components/Dropdown'

export function App() {

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
        <Country 
        imgPath='https://flagcdn.com/w320/se.png'
        countryName='Sweden'
        population={10000000}
        region='Europe'
        capital='Stockholm'
        />
      </div>
  )
}

