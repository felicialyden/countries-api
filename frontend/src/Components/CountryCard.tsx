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
  alpha2Code,
}: CountryCardProps) => {
    const navigate = useNavigate()

    const handleClick = (e:SyntheticEvent) => {
        const target = e.target as HTMLElement
        const countryCard = target.closest('.country-card') as HTMLElement
        const id = countryCard.id
        console.log(id)
        navigate(`/${id}`)
    }

  return (
    <div
      className="country-card clickable"
      id={alpha2Code}
      onClick={handleClick}
    >
      <img className="small-img" src={imgPath} alt="" />
      <div className="country-info">
        <h2 className="bolder">{countryName}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};
