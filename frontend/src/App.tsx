import { useEffect, useState } from "react";
import "./index.css";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountryData } from "./types";

export function App() {
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/api/countries");
      const json = await response.json();
      setCountryData(Array.from(json));
    };
    fetchData();
  }, []);
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home countryData={countryData} />}></Route>
          <Route
            path="/:countrycode"
            element={<Detail countryData={countryData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
