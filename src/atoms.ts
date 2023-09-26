import { atom, selector } from "recoil";
import { wishCategory, wishCountryList } from "commonConfig";

export const wishState = atom<wishCountryList[]>({
  key: "wishState",
  default: [],
});

export const wishCategorized = selector({
  key: "wishCategorized",
  get: ({ get }) => [
    get(wishState).filter((item) => item.category === wishCategory.WISH),
    get(wishState).filter((item) => item.category === wishCategory.DONE),
    get(wishState).filter((item) => item.category === wishCategory.LIKE),
  ],
});
