export default function Hero() {
  return (
    <div className="h-screen w-screen relative z-10 flex flex-col justify-center items-center bg-cover bg-center bg-[url('https://www.moojo.ir/wp-content/uploads/2023/12/The-Lord-of-the-Rings-The-Rings-of-Power.jpg')]">
      <img
        className="mt-auto w-2/3 md:w-1/3"
        src="https://www.moojo.ir/wp-content/uploads/2023/12/2uDS3VQIDlNnwq3Mp8BsC7igftU.png"
        alt="Ring Of Powers"
      />
      <button className="bg-blue-900 mb-20 text-white font-semibold px-7 py-2 rounded-lg">
        Let`s Watch
      </button>
      <div className="h-full w-full absolute bottom-0 -z-10 bg-gradient-to-t from-black"></div>
      <div className="h-full w-full absolute top-0 -z-10 bg-gradient-to-b from-black/50 to-5%"></div>
    </div>
  );
}
