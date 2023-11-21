import { useParams } from "react-router-dom";
import { DetailProps } from "../types";

export const Detail = ({ countryData }: DetailProps) => {
  const handleGoBack = () => {
    console.log("back");
  };
  console.log(countryData)
  const {countrycode} = useParams()
  const country = countryData.find((country) => country.alpha2Code === countrycode)
  console.log(country, 'country')

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
        <ul></ul>
      </div>
    </>
  );
};
