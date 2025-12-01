import { IPricingCard } from "../../types/PropTypes";

export default function PricingCard({
  title,
  price,
  period,
  features,
  buttonText,
  description,
}: IPricingCard) {
  return (
    <article className="bg-my-black-med flex flex-col *:px-5 gap-y-5 py-5 rounded-lg md:w-72 w-72 shadow-sm shadow-my-green-low">
      <section className="font-semibold">
        <h3 className="text-2xl text-my-green-min">{title}</h3>
        <h3 className="text-sm text-justify mt-3">{description}</h3>
      </section>
      <hr className="inline-block mx-5" />
      <section className="text-lg font-medium flex gap-x-5 items-center">
        <p className="flex items-center gap-x-2">
          <span className="text-2xl">$</span>
          <span className="text-5xl font-bold">{price}</span>
        </p>
        <p>{period}</p>
      </section>
      <ul className="font-medium text-my-white-max space-y-2">
        {features.map((feature, index) => (
          <li key={feature + "-" + index} className="text-xs">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-my-green-med px-5 py-2 rounded-xl mx-5 mt-auto">
        {buttonText}
      </button>
    </article>
  );
}
