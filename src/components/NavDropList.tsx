import data from "../dataJson/genresSubNav.json";

export default function NavDropList({ id }: any) {
  const currentData = data[id];
  return (
    <div className="w-3/4 max-w-[80rem] h-[22rem] ms-auto bg-black/70 p-5 flex justify-between text-white rounded-lg cursor-auto">
      <ul className="flex flex-col gap-x-20 flex-wrap h-full gap-y-2 font-semibold lg:text-lg lg:font-bold">
        {currentData.list.map((item, index) => {
          return <li key={index} className="hover:text-stone-200">{item}</li>;
        })}
      </ul>
      <img
        src={currentData.img}
        className="self-center object-cover h-full rounded-lg justify-self-end"
      />
    </div>
  );
}
