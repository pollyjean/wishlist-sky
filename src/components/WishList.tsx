import { wishCountryList } from "commonConfig";
import Categorize from "./Categorize";

const WishList = (props: wishCountryList) => {
  return (
    <li>
      {props.country}
      <Categorize {...props} />
    </li>
  );
};

export default WishList;
