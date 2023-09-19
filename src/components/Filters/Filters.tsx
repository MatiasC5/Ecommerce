import { SearchProductByName } from "./SearchProductByName";
import { SelectProductPrice } from "./SelectProductPrice";
import { SelectProductCategory } from "./SelectProductCategory";

export const Filters = () => {
  return (
    <div className="filters mt-12 flex justify-evenly items-center w-full">
      <SearchProductByName />
      <SelectProductPrice />
      <SelectProductCategory />
    </div>
  );
};
