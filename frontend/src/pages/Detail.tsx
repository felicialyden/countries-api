import { useNavigate, useParams } from "react-router-dom";
import { DetailProps } from "../types";

export const Detail = ({ countryData }: DetailProps) => {
  const navigate = useNavigate();

  const { countrycode } = useParams();
  const country = countryData.find(
    (country) => country.alpha3Code === countrycode
  );

  const borderCountryCodes = country?.borders;
  const borderCountries = countryData
    .filter((country) => borderCountryCodes?.includes(country.alpha3Code))
    .map(({alpha3Code, name}) => {
      return { alpha3Code, name  };
    });

  return (
    <div className="detail-main">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      <img className="flag-img" src={country?.flag} alt={`${country?.name}-flag`} />
      <h2 className="country-card-title">{country?.name}</h2>
      <div className="country-info-wrapper">
        <p>Native Name: {country?.nativeName}</p>
        <p>Population: {country?.population}</p>
        <p>Region: {country?.region}</p>
        <p>Sub Region: {country?.subregion}</p>
        <p>Capital: {country?.capital}</p>
      </div>
      <div className="country-info-wrapper">
        <p>Top Level Domain: {country?.topLevelDomain[0]}</p>
        <p>Currencies: {country?.currencies[0].name}</p>
        <p>Languages: {country?.languages[0].name}</p>
      </div>
      <div className="country-info-wrapper">
        <h3>Border Countries:</h3>
        <ul className="border-country-list">
          {borderCountries.map(({ alpha3Code, name }) => (
            <li
              onClick={() => navigate(`/${alpha3Code}`)}
              key={alpha3Code}
              className="border-country-list-item clickable"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
