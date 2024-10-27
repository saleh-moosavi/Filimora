import { IoCloseSharp } from "react-icons/io5";

export default function MobileSearchModal(props: any) {
  return (
    <div className="text-white flex justify-center items-center w-full h-full cursor-auto">
      <div className="bg-gray-100/40 backdrop-blur-md rounded-xl pb-10 flex flex-col w-96 cursor-auto *:cursor-pointer border-b-white/50 border-r-white/50 border-b-[3px] border-r-[3px]">
        <p
          className="hover:text-red-500 p-5 self-end text-3xl"
          onClick={props.toggleSearch}
        >
          <IoCloseSharp />
        </p>
        <input className="p-2 rounded-md mx-5 text-black bg-white hover:cursor-text" type="text" placeholder="Search..."/>
        <button className="bg-gray-700 mx-5 p-2 rounded-md mt-5 font-semibold">Search</button>
      </div>
    </div>
  );
}