import { LuSearch } from "react-icons/lu";

export default function SearchBar({
  handleSearchMouseOver,
}: {
  handleSearchMouseOver: (isShow: boolean) => void;
}) {
  return (
    <article
      className="flex items-center"
      onMouseLeave={() => handleSearchMouseOver(false)}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 rounded-s-lg bg-inherit outline-none border border-r-0 text-sm"
      />
      <span className="bg-slate-500 p-2 rounded-e-lg border border-l-0">
        <LuSearch className="size-5" />
      </span>
    </article>
  );
}
