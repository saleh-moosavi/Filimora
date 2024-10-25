export default function NavDropList() {
  return (
    <div className="w-3/4 max-w-[80rem] ms-auto bg-black/70 p-5 grid grid-cols-3 text-white rounded-lg">
      <ul className="flex flex-col gap-y-2 font-semibold lg:text-lg lg:font-bold">
        <li>Action</li>
        <li>Animation</li>
        <li>Biographi</li>
        <li>History</li>
        <li>Talk Show</li>
        <li>Advencure</li>
        <li>Crime</li>
        <li>Comedy</li>
        <li>Documenture</li>
        <li>Drama</li>
      </ul>
      <ul className="flex flex-col gap-y-2 font-semibold lg:text-lg lg:font-bold">
        <li>Family</li>
        <li>Fantasy</li>
        <li>Horror</li>
        <li>Musical</li>
        <li>Mystry</li>
        <li>Sci-Fi</li>
        <li>Sport</li>
        <li>Thriller</li>
        <li>War</li>
        <li>Western</li>
      </ul>
      <img
        src="https://aiofilm3.ir/wp-content/uploads/2023/06/image_2023-06-29_180242774.jpg"
        className="self-center object-cover lg:h-[22rem] h-[19rem] rounded-lg justify-self-end"
      />
    </div>
  );
}
