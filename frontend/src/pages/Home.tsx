import { HomeProps } from "../types";
import { CountryCard } from "../components/CountryCard";
import { Dropdown } from "../components/Dropdown";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = ({ countryData }: HomeProps) => {
  const [filteredRegion, setfilteredRegion] = useState<string>("all");
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
    <main className="home-main">
      <div className="search-options">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            name="searchInput"
            type="text"
            placeholder="Search for a country..."
          ></input>
        </form>
        <Dropdown setRegion={(region) => setfilteredRegion(region)} />
      </div>
      <div className="country-list">
        {countryData.map((country) => {
          if (
            filteredRegion === "all" ||
            filteredRegion === country.region.toLowerCase()
          ) {
            return (
              <CountryCard
                imgPath={country.flag}
                countryName={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                key={country.name}
                alpha3Code={country.alpha3Code}
              />
            );
          }
        })}
      </div>
    </main>
  );
};
