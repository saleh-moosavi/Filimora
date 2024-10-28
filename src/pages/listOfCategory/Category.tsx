import CategoryItem from "./CategoryItem";
import data from "../../dataJson/movies.json";

export default function Category() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5 pt-10 md:pt-32 gap-5 xl:max-w-[85rem] xl:mx-auto">
      {data.map((item, index) => {
        return (
          <div key={index} className="">
            <CategoryItem item={item} index={index}/>
          </div>
        );
      })}
    </div>
  );
}
