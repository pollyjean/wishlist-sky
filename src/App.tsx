import { wishCategorized } from "atoms";
import { wishCountryList } from "commonConfig";
import CountryInput from "components/CountryInput";
import WishList from "components/WishList";
import { useRecoilValue } from "recoil";
import * as S from "./styles";

const App = () => {
  const [wish, done, like] = useRecoilValue(wishCategorized);
  return (
    <S.Main>
      <S.Section>
        <h2>내가 가고싶은 나라들</h2>
        <CountryInput />
        {wish && (
          <ul>
            {wish.map((item: wishCountryList) => (
              <WishList key={item.id} {...item} />
            ))}
          </ul>
        )}
      </S.Section>
      <S.Section>
        <h3>내가 가본 나라들</h3>
        {done && (
          <ul>
            {done.map((item: wishCountryList) => (
              <WishList key={item.id} {...item} />
            ))}
          </ul>
        )}
      </S.Section>
      <S.Section>
        <h3>내가 좋아하는 나라들</h3>
        {like && (
          <ul>
            {like.map((item: wishCountryList) => (
              <WishList key={item.id} {...item} />
            ))}
          </ul>
        )}
      </S.Section>
    </S.Main>
  );
};

export default App;
