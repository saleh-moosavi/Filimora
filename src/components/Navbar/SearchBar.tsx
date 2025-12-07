import { FormEvent, useRef } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { ISearchBar } from "../../types/PropTypes";

export default function SearchBar({
  showSearchBar,
  handleOverlayToggle,
}: ISearchBar) {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const searchTerm = inputRef.current?.value;
    if (searchTerm && searchTerm.trim()) {
      handleOverlayToggle("search", false);
      inputRef.current!.value = "";
      navigate(
        `/category?link=anime?q=${encodeURIComponent(searchTerm.trim())}`
      );
    }
  };

  return (
    <section
      className={`text-my-white-max fixed top-24 md:min-w-72 inset-x-5 md:inset-x-auto transition-all duration-200 z-50 ${
        showSearchBar
          ? "translate-x-0 opacity-100 md:right-16"
          : "translate-x-full opacity-0 md:-right-10"
      }`}
    >
      <article className="flex flex-col gap-5 p-2 bg-my-black-med rounded-lg shadow-sm shadow-my-white-min">
        <section className="flex justify-between items-center">
          <p>Search Your Anime</p>
          <LuX
            onClick={() => handleOverlayToggle("search", false)}
            className="size-5 self-end text-my-error cursor-pointer"
          />
        </section>
        <form
          className="flex items-center justify-center border border-my-white-min rounded-lg overflow-hidden"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            ref={inputRef}
            placeholder="Search..."
            className="w-full p-2 bg-inherit outline-none text-sm"
          />
          <button type="submit" className="bg-my-black-max p-2">
            <LuSearch className="size-5" />
          </button>
        </form>
      </article>
    </section>
  );
}
