import React from 'react'

type Country = {
    imgPath: string,
    countryName: string,
    population: number,
    region: string,
    capital: string
}

export const CountryComponent = (props: Country) => {

return (
    <div>
    <img src={props.imgPath} alt="" />
    <p>{props.countryName}</p>
    <p>{props.population}</p>
    <p>{props.region}</p>
    <p>{props.capital}</p>
    </div>
)
}