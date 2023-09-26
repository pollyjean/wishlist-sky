import { atom, selector } from "recoil";
import { STORAGE_KEY, wishCategory, wishCountryList } from "commonConfig";

export const wishState = atom<wishCountryList[]>({
  key: "wishState",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) setSelf(JSON.parse(savedData));
      onSet((newValue, _, isReset) => {
        isReset ? localStorage.removeItem(STORAGE_KEY) : localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
      });
    },
  ],
});

export const wishCategorized = selector({
  key: "wishCategorized",
  get: ({ get }) => [
    get(wishState).filter((item) => item.category === wishCategory.WISH),
    get(wishState).filter((item) => item.category === wishCategory.DONE),
    get(wishState).filter((item) => item.category === wishCategory.LIKE),
  ],
});
