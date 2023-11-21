import { useEffect, useState } from "react";
import "./index.css";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Country, CountryData } from "./types";

export function App() {
  const [country, setCountry] = useState<CountryData>();

  const [countryData, setCountryData] = useState<Country[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/countries");
      const json = await response.json();
      console.log(json[2]);
      setCountry(json[2]);
      setCountryData(Array.from(json));
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home countryData={countryData} />}></Route>
          <Route
            path="/:country"
            element={<Detail countryData={country} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
