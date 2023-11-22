import { useNavigate, useParams } from "react-router-dom";
import { DetailProps } from "../types";

export const Detail = ({ countryData }: DetailProps) => {

  const navigate = useNavigate()

  const { countrycode } = useParams();
  const country = countryData.find(
    (country) => country.alpha3Code === countrycode
  );

  const borderCountryCodes = country?.borders;
  const borderCountries = countryData.filter((country) => borderCountryCodes?.includes(country.alpha3Code))
  .map((country) => {return {name: country.name, alpha3Code: country.alpha3Code}})

  const handleClick = (countryCode: string) => {
    navigate(`/${countryCode}`)
  }

  const handleGoBack = () => {
    console.log("back");
  };

  return (
    <>
      <button onClick={handleGoBack}>Back</button>
      <img src={country?.flag} alt={`${country?.name}-flag`} />
      <h2>Country name</h2>
      <div>
        <p>Native Name: {country?.nativeName}</p>
        <p>Population: {country?.population}</p>
        <p>Region: {country?.region}</p>
        <p>Sub Region: {country?.subregion}</p>
        <p>Capital: {country?.capital}</p>
      </div>
      <div>
        <p>Top Level Domain: {country?.topLevelDomain[0]}</p>
        <p>Currencies: {country?.currencies[0].name}</p>
        <p>Languages: {country?.languages[0].name}</p>
      </div>
      <div>
        <h2>Border Countries</h2>
        <ul className="border-country-list">
          {
            borderCountries.map((country) => 
              <li onClick={() => handleClick(country.alpha3Code)} key={country.alpha3Code} className="border-country">{country.name}</li>
            )
          }
        </ul>
      </div>
    </>
  );
};
