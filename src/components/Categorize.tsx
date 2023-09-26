import { wishState } from "atoms";
import { wishCategory, wishCountryList } from "commonConfig";
import { useSetRecoilState } from "recoil";
import * as S from "../styles";

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
        <S.Button name={wishCategory.DONE} onClick={onClick} aria-label="Done">
          ☑︎
        </S.Button>
      )}
      {props.category === wishCategory.WISH && (
        <S.Button onClick={handleRemove} aria-label="Remove">
          🗑️
        </S.Button>
      )}
      {props.category !== wishCategory.WISH && (
        <S.Button name={wishCategory.WISH} onClick={onClick} aria-label="Wish">
          ❌
        </S.Button>
      )}
      {props.category === wishCategory.DONE && (
        <S.Button name={wishCategory.LIKE} onClick={onClick} aria-label="Like">
          👍
        </S.Button>
      )}
      {props.category === wishCategory.LIKE && (
        <S.Button name={wishCategory.DONE} onClick={onClick} aria-label="Done">
          👎
        </S.Button>
      )}
    </>
  );
};

export default Categorize;
