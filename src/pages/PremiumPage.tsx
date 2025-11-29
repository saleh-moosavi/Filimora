import { TiTick } from "react-icons/ti";

export default function PremiumPage() {
  return (
    <div className="text-my-white-max">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold">Get full access.</h3>
        <p className="text-lg font-medium">
          Get access to every movies and series in the world
        </p>
      </div>
      <section className="grid gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
        <article className="bg-my-black-med flex flex-col *:px-5 gap-y-5 py-5 rounded-lg md:w-72 w-72 border-b border-r">
          <div className="">
            <h3 className="text-xl font-semibold">Startup Plan</h3>
            <h3 className="text-lg mt-3">
              Best suited for experienced developers and small teams.
            </h3>
          </div>
          <div className="h-[0.15rem] bg-my-white-max w-60 mx-5"></div>
          <div className="text-lg font-medium flex gap-x-5 items-center">
            <p className="flex items-center gap-x-2">
              <span className="text-2xl">$</span>
              <span className="text-5xl font-bold">49</span>
            </p>
            <p>per Month</p>
          </div>
          <ul className="font-medium text-my-white-max *:flex *:gap-x-2 *:items-center">
            <li>
              <TiTick />
              Priority tech support
            </li>
            <li>
              <TiTick />
              Access to all components
            </li>
            <li>
              <TiTick />
              Unlimited projects
            </li>
            <li>
              <TiTick />
              Free updates
            </li>
            <li>
              <TiTick />
              Customer support
            </li>
          </ul>
          <button className="bg-my-green-med px-5 py-2 rounded-xl mx-5">
            Purchase
          </button>
        </article>
        <article className="bg-my-black-med flex flex-col *:px-5 gap-y-5 py-5 rounded-lg md:w-72 w-72 border-b border-r">
          <div className="">
            <h3 className="text-xl font-semibold">Startup Plan</h3>
            <h3 className="text-lg mt-3">
              Best suited for experienced developers and small teams.
            </h3>
          </div>
          <div className="h-[0.15rem] bg-my-white-max w-60 mx-5"></div>
          <div className="text-lg font-medium flex gap-x-5 items-center">
            <p className="flex items-center gap-x-2">
              <span className="text-2xl">$</span>
              <span className="text-5xl font-bold">49</span>
            </p>
            <p>per Month</p>
          </div>
          <ul className="font-medium text-my-white-max *:flex *:gap-x-2 *:items-center">
            <li>
              <TiTick />
              Priority tech support
            </li>
            <li>
              <TiTick />
              Access to all components
            </li>
            <li>
              <TiTick />
              Unlimited projects
            </li>
            <li>
              <TiTick />
              Free updates
            </li>
            <li>
              <TiTick />
              Customer support
            </li>
          </ul>
          <button className="bg-my-green-med px-5 py-2 rounded-xl mx-5">
            Purchase
          </button>
        </article>
        <article className="bg-my-black-med flex flex-col *:px-5 gap-y-5 py-5 rounded-lg md:w-72 w-72 border-b border-r">
          <div className="">
            <h3 className="text-xl font-semibold">Startup Plan</h3>
            <h3 className="text-lg mt-3">
              Best suited for experienced developers and small teams.
            </h3>
          </div>
          <div className="h-[0.15rem] bg-my-white-max w-60 mx-5"></div>
          <div className="text-lg font-medium flex gap-x-5 items-center">
            <p className="flex items-center gap-x-2">
              <span className="text-2xl">$</span>
              <span className="text-5xl font-bold">49</span>
            </p>
            <p>per Month</p>
          </div>
          <ul className="font-medium text-my-white-max *:flex *:gap-x-2 *:items-center">
            <li>
              <TiTick />
              Priority tech support
            </li>
            <li>
              <TiTick />
              Access to all components
            </li>
            <li>
              <TiTick />
              Unlimited projects
            </li>
            <li>
              <TiTick />
              Free updates
            </li>
            <li>
              <TiTick />
              Customer support
            </li>
          </ul>
          <button className="bg-my-green-med px-5 py-2 rounded-xl mx-5">
            Purchase
          </button>
        </article>
      </section>
    </div>
  );
}
