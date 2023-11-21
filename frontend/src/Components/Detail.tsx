import { DetailProps } from "../types"



export const Detail = ({countryData}: DetailProps) => {

    const handleGoBack = () => {
        console.log('back')
    }

  return (
    <>
    <button onClick={handleGoBack}>Back</button>
    <img src={countryData?.flag} alt={`${countryData?.name}-flag`} />
    <h2>Country name</h2>
    <div>
    <p>Native Name: {countryData?.nativeName}</p>
    <p>Population: {countryData?.population}</p>
    <p>Region: {countryData?.region}</p>
    <p>Sub Region: {countryData?.subregion}</p>
    <p>Capital: {countryData?.capital}</p>
    </div>
    <div>
        <p>Top Level Domain: {countryData?.topLevelDomain[0]}</p>
        <p>Currencies: {countryData?.currencies[0].name}</p>
        <p>Languages: {countryData?.languages[0].name}</p>
    </div>
    <div>
    <h2>Border Countries</h2>
        <ul>

        </ul>
    </div>
    </>
  )
}
