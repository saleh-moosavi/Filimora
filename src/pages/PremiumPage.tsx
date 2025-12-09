import PricingCard from "../components/premium/PricingCard";
import PricingTitle from "../components/premium/PricingTitle";
const pricingCards = [
  {
    title: "Otaku Basic",
    description: "Perfect for casual anime fans who want ad-free streaming.",
    price: 4.99,
    period: "per month",
    features: [
      "Ad-free streaming",
      "Access to 500+ anime series",
      "Standard video quality (720p)",
      "Watch on 1 device at a time",
      "Basic subtitles (English only)",
      "Limited downloads (5 episodes/week)",
    ],
    buttonText: "Start Free Trial",
  },
  {
    title: "Anime Pro",
    description: "Ideal for serious anime enthusiasts with premium features.",
    price: 9.99,
    period: "per month",
    features: [
      "Ad-free HD streaming (1080p)",
      "Access to 2000+ anime series & movies",
      "Watch on 3 devices simultaneously",
      "Multiple subtitle languages",
      "Unlimited downloads",
      "Early access to new episodes",
      "Access to OVAs and specials",
      "Custom watchlists",
    ],
    buttonText: "Start 7-Day Free Trial",
  },
  {
    title: "Ultimate Weeb",
    description: "For hardcore fans who want the complete anime experience.",
    price: 19.99,
    period: "per month",
    features: [
      "Ad-free 4K Ultra HD streaming",
      "Complete library access (3000+ titles)",
      "Watch on 5 devices simultaneously",
      "All subtitle & dub options",
      "Unlimited downloads + offline viewing",
      "Virtual anime convention access",
      "Manga library included",
      "Priority customer support",
      "Personalized recommendations",
    ],
    buttonText: "Start 14-Day Free Trial",
  },
];

export default function PremiumPage() {
  return (
    <div className="text-my-white-max">
      <PricingTitle />
      <section className="grid gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
        {pricingCards.map((item, index) => (
          <PricingCard
            key={"PricingCard-Item-" + item.title + "-" + index}
            {...item}
          />
        ))}
      </section>
    </div>
  );
}
