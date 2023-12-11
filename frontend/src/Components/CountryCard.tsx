import { useNavigate } from "react-router-dom";
import "../index.css";
import { CountryCardProps } from "../types";
import { SyntheticEvent } from "react";

export const CountryCard = ({
  imgPath,
  countryName,
  population,
  region,
  capital,
  alpha3Code,
}: CountryCardProps) => {
  const navigate = useNavigate();

  const handleClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    const countryCard = target.closest(".country-card") as HTMLElement;
    const id = countryCard.id;
    navigate(`/${id}`);
  };

  return (
    <div
      className="country-card clickable"
      id={alpha3Code}
      onClick={handleClick}
    >
      <img className="flag-img" src={imgPath} alt={`flag-${alpha3Code}`} />
      <h2 className="country-card-title">{countryName}</h2>
      <div className="country-info">
        <p>
          <span className="bold-text">Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span className="bold-text">Region: </span>
          {region}
        </p>
        <p>
          <span className="bold-text">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};
