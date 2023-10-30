//import { useState } from 'react'
import React from 'react'
import './index.css'
import { CountryComponent } from './Components/country-component'

export function App() {

  return (
      <div>
        <div id='top-bar'>
        <h1>Where in the world?</h1>
        <button className='align-right center-content clickable'>Dark mode</button>
        </div>
        <div id='search-options'>
        <input type='text' placeholder='Search for a country...'></input>
    <select className='clickable align-right' name="regions" id="regions"> 
        <option value="filter">Filter by region</option> 
        <option value="africa">Africa</option> 
        <option value="america">America</option> 
        <option value="asia">Asia</option> 
        <option value="europe">Europe</option> 
        <option value="oceania">Oceania</option> 
    </select>
        </div>
        <CountryComponent 
        imgPath='https://flagcdn.com/w320/se.png'
        countryName='Sweden'
        population={10000000}
        region='Europe'
        capital='Stockholm'
        />
      </div>
  )
}

