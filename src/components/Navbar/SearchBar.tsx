import { LuSearch, LuX } from "react-icons/lu";

export default function SearchBar({
  handleSearchMouseOver,
}: {
  handleSearchMouseOver: (isShow: boolean) => void;
}) {
  return (
    <article className="flex flex-col gap-5 p-2 bg-black rounded-lg shadow-sm shadow-white">
      <section className="flex justify-between items-center">
        <p>Search Your Anime</p>
        <LuX
          onClick={() => handleSearchMouseOver(false)}
          className="size-5 self-end text-rose-400 cursor-pointer"
        />
      </section>
      <section className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-s-lg bg-inherit outline-none border border-r-0 text-sm"
        />
        <span className="bg-slate-500 p-2 rounded-e-lg border border-l-0">
          <LuSearch className="size-5" />
        </span>
      </section>
    </article>
  );
}
