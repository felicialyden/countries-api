import { CountryData, HomeProps } from "../types";
import { CountryCard } from "../components/CountryCard";
import { Dropdown } from "../components/Dropdown";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Home = ({ countryData }: HomeProps) => {
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchValue = (
      form.elements.namedItem("searchInput") as HTMLInputElement
    ).value;
    const searchedCountry = countryData.find(
      (country) => country.name.toLowerCase() === searchValue.toLowerCase()
    );
    if (!searchedCountry) return console.log("not found");
    navigate(`/${searchedCountry.alpha3Code}`);
  };

  return (
    <>
      <div id="search-options">
        <form onSubmit={handleSubmit}>
          <input
            name="searchInput"
            type="text"
            placeholder="Search for a country..."
          ></input>
        </form>
        <Dropdown />
      </div>
      <div className="country-list">
        {countryData.map(
          ({
            flag,
            name,
            population,
            region,
            capital,
            alpha3Code,
          }: CountryData) => {
            return (
              <CountryCard
                imgPath={flag}
                countryName={name}
                population={population}
                region={region}
                capital={capital}
                key={name}
                alpha3Code={alpha3Code}
              />
            );
          }
        )}
      </div>
    </>
  );
};
