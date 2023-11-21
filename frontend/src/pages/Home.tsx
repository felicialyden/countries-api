import { HomeProps, Country } from "../types";
import { CountryCard } from "../components/CountryCard";
import { Dropdown } from "../components/Dropdown";

export const Home = ({ countryData }: HomeProps) => {
  return (
    <>
      <div id="search-options">
        <input type="text" placeholder="Search for a country..."></input>
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
            alpha2Code,
          }: Country) => {
            return (
              <CountryCard
                imgPath={flag}
                countryName={name}
                population={population}
                region={region}
                capital={capital}
                key={name}
                alpha2Code={alpha2Code}
              />
            );
          }
        )}
      </div>
    </>
  );
};
