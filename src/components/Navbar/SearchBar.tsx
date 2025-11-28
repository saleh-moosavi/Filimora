import { FormEvent, useRef } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function SearchBar({
  handleSearchMouseOver,
}: {
  handleSearchMouseOver: (isShow: boolean) => void;
}) {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const searchTerm = inputRef.current?.value;
    if (searchTerm && searchTerm.trim()) {
      handleSearchMouseOver(false);
      inputRef.current!.value = "";
      navigate(
        `/category?link=anime?q=${encodeURIComponent(searchTerm.trim())}`
      );
    }
  };

  return (
    <article className="flex flex-col gap-5 p-2 bg-black rounded-lg shadow-sm shadow-white">
      <section className="flex justify-between items-center">
        <p>Search Your Anime</p>
        <LuX
          onClick={() => handleSearchMouseOver(false)}
          className="size-5 self-end text-rose-400 cursor-pointer"
        />
      </section>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Search..."
          className="w-full p-2 rounded-s-lg bg-inherit outline-none border border-r-0 text-sm"
        />
        <button
          type="submit"
          className="bg-slate-500 p-2 rounded-e-lg border border-l-0"
        >
          <LuSearch className="size-5" />
        </button>
      </form>
    </article>
  );
}
