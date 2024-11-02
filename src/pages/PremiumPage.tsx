import { useEffect } from "react";
import { TiTick } from "react-icons/ti";

export default function PremiumPage() {
  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
  }, []);
  return (
    <div className="color-white px-5 xl:max-w-[85rem] xl:mx-auto py-5 md:pt-24">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold">Get full access.</h3>
        <p className="text-lg font-medium">
          Get access to every movies and series in the world
        </p>
      </div>
      <section className="grid gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
        <article className="bg-three flex flex-col *:px-5 gap-y-5 py-5 rounded-lg md:w-72 w-72 border-b border-r">
          <div className="">
            <h3 className="text-xl font-semibold">Startup Plan</h3>
            <h3 className="text-lg mt-3">
              Best suited for experienced developers and small teams.
            </h3>
          </div>
          <div className="h-[0.15rem] bg-white w-60 mx-5"></div>
          <div className="text-lg font-medium flex gap-x-5 items-center">
            <p className="flex items-center gap-x-2">
              <span className="text-2xl">$</span>
              <span className="text-5xl font-bold">49</span>
            </p>
            <p>per Month</p>
          </div>
          <ul className="font-medium color-white *:flex *:gap-x-2 *:items-center">
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
          <button className="bg-one px-5 py-2 rounded-xl mx-5">Purchase</button>
        </article>
        <article className="bg-three flex flex-col *:px-5 gap-y-5 py-5 rounded-lg md:w-72 w-72 border-b border-r">
          <div className="">
            <h3 className="text-xl font-semibold">Startup Plan</h3>
            <h3 className="text-lg mt-3">
              Best suited for experienced developers and small teams.
            </h3>
          </div>
          <div className="h-[0.15rem] bg-white w-60 mx-5"></div>
          <div className="text-lg font-medium flex gap-x-5 items-center">
            <p className="flex items-center gap-x-2">
              <span className="text-2xl">$</span>
              <span className="text-5xl font-bold">49</span>
            </p>
            <p>per Month</p>
          </div>
          <ul className="font-medium color-white *:flex *:gap-x-2 *:items-center">
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
          <button className="bg-one px-5 py-2 rounded-xl mx-5">Purchase</button>
        </article>
        <article className="bg-three flex flex-col *:px-5 gap-y-5 py-5 rounded-lg md:w-72 w-72 border-b border-r">
          <div className="">
            <h3 className="text-xl font-semibold">Startup Plan</h3>
            <h3 className="text-lg mt-3">
              Best suited for experienced developers and small teams.
            </h3>
          </div>
          <div className="h-[0.15rem] bg-white w-60 mx-5"></div>
          <div className="text-lg font-medium flex gap-x-5 items-center">
            <p className="flex items-center gap-x-2">
              <span className="text-2xl">$</span>
              <span className="text-5xl font-bold">49</span>
            </p>
            <p>per Month</p>
          </div>
          <ul className="font-medium color-white *:flex *:gap-x-2 *:items-center">
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
          <button className="bg-one px-5 py-2 rounded-xl mx-5">Purchase</button>
        </article>
      </section>
      <p className="mt-10 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non
        voluptates harum hic voluptatum modi, nam nostrum incidunt at
        reprehenderit, eos ea natus asperiores provident adipisci rerum aliquam
        quos laudantium error distinctio! Mollitia voluptates totam ex assumenda
        consectetur voluptatibus accusamus facilis, error ab fugit et blanditiis
        earum omnis aliquid nobis odit quibusdam velit. Impedit accusamus
        excepturi ab repellat veritatis placeat soluta dolore repudiandae alias
        maiores? Veritatis, ratione ad. Delectus culpa hic veniam praesentium
        error labore autem sapiente quia quae, et tempore id, at, ex quaerat
        distinctio dignissimos similique quisquam! Perspiciatis accusamus sequi
        consequuntur laboriosam cumque dolor! Repudiandae necessitatibus eos
        qui!
      </p>
    </div>
  );
}
