import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { countryInputForm, wishCategory, wishCountryList } from "commonConfig";
import { wishState } from "atoms";

const CountryInput = () => {
  const setWishCountry = useSetRecoilState(wishState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<countryInputForm>();
  const onSubmit: SubmitHandler<countryInputForm> = (value) => {
    const newCountry: wishCountryList = {
      id: Date.now(),
      country: value.country,
      category: wishCategory.WISH,
    };
    setWishCountry((prev) => [...prev, newCountry]);
    setValue("country", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="country">나라 이름 :</label>
      <input
        type="text"
        placeholder="가고싶은 나라 이름"
        id="country"
        {...register("country", { required: "나라 이름을 적어주세요" })}
      />
      {errors.country?.message && <p>{errors.country.message}</p>}
      <button type={"submit"}>가자!</button>
    </form>
  );
};

export default CountryInput;
