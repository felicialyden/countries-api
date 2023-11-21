export type CountryProps = {
  imgPath: string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
  alpha2Code: string
};

export type CountryData = {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Record<string, string>[];
  languages: Record<string, string>[];
  borders: string[];
};

export type DetailProps = {
  countryData: CountryData| undefined;
};

export type Country = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  alpha2Code: string;
};

export type HomeProps = {
  countryData: Country[];
};
