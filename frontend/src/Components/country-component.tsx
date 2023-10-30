import React from 'react'
import '../index.css'

type Country = {
    imgPath: string,
    countryName: string,
    population: number,
    region: string,
    capital: string
}

export const CountryComponent = (props: Country) => {

return (
    <div className='country-component clickable' id={props.countryName} onClick={()=> console.log('click')}>
    <img className='small-img' src={props.imgPath} alt="" />
    <div className='country-info'>
    <h2 className='bolder'>{props.countryName}</h2>
    <p>Population: {props.population}</p>
    <p>Region: {props.region}</p>
    <p>Capital: {props.capital}</p>
    </div>
    </div>
)
}