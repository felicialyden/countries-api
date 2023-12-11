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
    .map(({ alpha3Code, name }) => {
      return { alpha3Code, name };
    });

  return (
    <div className="detail-main">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={20}
          height={20}
          className="arrow-back"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
        Back
      </button>
      <div className="country-data">
        <img
          className="flag-img"
          src={country?.flag}
          alt={`${country?.name}-flag`}
        />

        <div className="country-details-wrapper">
          <h2 className="country-card-title">{country?.name}</h2>
          <div className="country-info-wrapper-wrapper">
            <div className="country-info-wrapper">
              <p>
                <span className="bold-text">Native Name: </span>{" "}
                {country?.nativeName}
              </p>
              <p>
                <span className="bold-text">Population: </span>{" "}
                {country?.population.toLocaleString()}
              </p>
              <p>
                <span className="bold-text">Region: </span>
                {country?.region}
              </p>
              <p>
                <span className="bold-text">Sub Region: </span>
                {country?.subregion}
              </p>
              <p>
                <span className="bold-text">Capital: </span>
                {country?.capital}
              </p>
            </div>
            <div className="country-info-wrapper">
              <p>
                <span className="bold-text">Top Level Domain: </span>
                {country?.topLevelDomain[0]}
              </p>
              <p>
                <span className="bold-text">Currencies: </span>
                {country?.currencies[0].name}
              </p>
              <p>
                <span className="bold-text">Languages: </span>
                {country?.languages[0].name}
              </p>
            </div>
          </div>

          <div className="country-info-wrapper">
            {borderCountries.length > 0 && <h3>Border Countries:</h3>}
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
      </div>
    </div>
  );
};
