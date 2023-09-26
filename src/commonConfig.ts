export enum wishCategory {
  "WISH" = "WISH",
  "DONE" = "DONE",
  "LIKE" = "LIKE",
}

export interface countryInputForm {
  country: string;
}

export interface wishCountryList extends countryInputForm {
  id: number;
  category: wishCategory;
}

export interface localStorageProps {
  key: string;
  value?: string;
}
