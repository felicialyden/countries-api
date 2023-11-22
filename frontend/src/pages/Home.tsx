import { CountryData, HomeProps } from "../types";
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
