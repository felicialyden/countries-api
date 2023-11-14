import '../index.css'

type CountryProps = {
    imgPath: string,
    countryName: string,
    population: number,
    region: string,
    capital: string
}

export const Country = ({imgPath, countryName, population, region, capital}: CountryProps) => {

return (
    <div className='country-component clickable' id={countryName} onClick={()=> console.log('click')}>
    <img className='small-img' src={imgPath} alt="" />
    <div className='country-info'>
    <h2 className='bolder'>{countryName}</h2>
    <p>Population: {population}</p>
    <p>Region: {region}</p>
    <p>Capital: {capital}</p>
    </div>
    </div>
)
}