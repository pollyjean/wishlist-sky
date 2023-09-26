import { wishState } from "atoms";
import { wishCategory, wishCountryList } from "commonConfig";
import { useSetRecoilState } from "recoil";

const Categorize = (props: wishCountryList) => {
  const setWishCountry = useSetRecoilState(wishState);
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    const category = name as wishCategory;
    setWishCountry((prev) => {
      const newList = prev.map((item) => {
        if (item.id === props.id) {
          return { ...item, category };
        } else {
          return item;
        }
      });
      return newList;
    });
  };
  const handleRemove = () => {
    setWishCountry((prev) => prev.filter((item) => item.id !== props.id));
  };
  return (
    <>
      {props.category === wishCategory.WISH && (
        <button name={wishCategory.DONE} onClick={onClick} aria-label="Done">
          ☑︎
        </button>
      )}
      {props.category === wishCategory.WISH && (
        <button onClick={handleRemove} aria-label="Remove">
          🗑️
        </button>
      )}
      {props.category !== wishCategory.WISH && (
        <button name={wishCategory.WISH} onClick={onClick} aria-label="Wish">
          ❌
        </button>
      )}
      {props.category === wishCategory.DONE && (
        <button name={wishCategory.LIKE} onClick={onClick} aria-label="Like">
          👍
        </button>
      )}
      {props.category === wishCategory.LIKE && (
        <button name={wishCategory.DONE} onClick={onClick} aria-label="Done">
          👎
        </button>
      )}
    </>
  );
};

export default Categorize;
