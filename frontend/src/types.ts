export type CountryCardProps = {
  imgPath: string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string
};

export type CountryData = {
  imgPath: string;
  countryName: string;
  alpha3Code: string
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
  countryData: CountryData[];
};

export type HomeProps = {
  countryData: CountryData[];
};

export type DropdownProps = {
  setRegion: (region: string) => void
}
