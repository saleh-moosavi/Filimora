const questions = [
  {
    question:
      "Why does some anime have English dub but others only have subtitles?",
    answer:
      "We provide both dubbed and subbed versions whenever available from the original licensors. Some newer or less popular series may only have subtitles initially. Dubbed versions are usually added 2-4 weeks after the Japanese release. You can filter by 'Dubbed' or 'Subbed' in our search to find your preferred version.",
  },
  {
    question: "How often are new episodes added?",
    answer:
      "New episodes are typically added within 1-2 hours after they air in Japan for simulcast series. We strive to provide the fastest possible updates while maintaining video quality and proper subtitles. You can enable notifications in your account settings to get alerts when new episodes of your favorite series are available.",
  },
  {
    question: "Can I download anime to watch offline?",
    answer:
      "Yes! Premium subscribers can download anime for offline viewing. The number of simultaneous downloads depends on your subscription tier: Basic (5), Pro (20), Ultimate (unlimited). Downloads expire after 7 days to comply with licensing agreements. Make sure to use our official app for the best download experience.",
  },
  {
    question: "Why is a specific anime series unavailable in my region?",
    answer:
      "Due to licensing restrictions, some content may be geo-blocked in certain regions. We're continuously working to expand our global availability. You can check our 'Availability' page for region-specific information. VPN usage to bypass regional restrictions violates our Terms of Service and may result in account suspension.",
  },
  {
    question:
      "The video quality seems low even though I have a good internet connection",
    answer:
      "Try these troubleshooting steps: 1) Check your playback quality settings (click the gear icon on the player), 2) Clear your browser cache and cookies, 3) Try a different browser or our mobile app, 4) Restart your router. If problems persist, contact support with your device type, browser version, and internet speed test results.",
  },
  {
    question: "How do I request a specific anime to be added to the library?",
    answer:
      "You can submit requests through our 'Request Anime' form in your account dashboard. While we can't guarantee all requests will be fulfilled, we prioritize titles based on user demand, licensing availability, and production quality. Popular requests with 500+ votes are reviewed weekly by our content team.",
  },
  {
    question: "Why are subtitles out of sync or missing?",
    answer:
      "If subtitles are out of sync: 1) Refresh the page, 2) Try a different subtitle track if available, 3) Clear browser cache. For missing subtitles: 1) Check if subtitles are enabled in player settings, 2) Try switching between 'Soft Subs' and 'Hard Subs' in account settings. Report persistent issues through our 'Report Problem' feature with the episode URL and timestamp.",
  },
  {
    question: "Can I share my account with family or friends?",
    answer:
      "Account sharing policies vary by subscription tier: Basic (1 device), Pro (3 devices), Ultimate (5 devices). Simultaneous streaming on more devices than allowed will trigger a warning. For family sharing, consider our 'Family Plan' add-on which allows up to 6 profiles with separate watch histories and recommendations.",
  },
  {
    question: "Why does playback keep buffering?",
    answer:
      "Buffering issues are usually internet-related. Solutions: 1) Lower video quality in settings, 2) Connect via Ethernet instead of WiFi, 3) Close other bandwidth-intensive applications, 4) Try watching during off-peak hours (late night/early morning). Our adaptive streaming automatically adjusts quality based on your connection speed.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel anytime from your Account Settings > Subscription page. Cancellation takes effect at the end of your current billing period. You'll retain access until then. For refund requests within 7 days of purchase, contact support with your transaction ID. Refunds are evaluated case-by-case according to our Refund Policy.",
  },
  {
    question: "Are there parental controls available?",
    answer:
      "Yes! In Parental Controls (Account Settings), you can: 1) Set content ratings restrictions, 2) Create child profiles with age-appropriate content, 3) Enable PIN protection for mature content, 4) Set daily watch time limits, 5) Monitor watch history. These features help ensure a family-friendly viewing experience.",
  },
  {
    question: "What video players and formats are supported?",
    answer:
      "We support: Web - HTML5 Player (Chrome, Firefox, Safari, Edge), Mobile - Native apps (iOS/Android), TV - Apps for Roku, Apple TV, Fire TV, Chromecast. Recommended players: VLC, MX Player for external files. Supported formats: MP4, MKV, WebM up to 4K HDR with multiple audio/subtitle tracks.",
  },
  {
    question: "How accurate are the episode release schedules?",
    answer:
      "Simulcast schedules are 95% accurate. Delays may occur due to: 1) Production delays in Japan, 2) Licensing verification, 3) Subtitle quality checks, 4) Technical issues. Follow our official social media for real-time updates on schedule changes. You can also check the 'Schedule' page for upcoming releases.",
  },
  {
    question: "What happens to my watchlist if an anime is removed?",
    answer:
      "When content is removed due to licensing expiration, it's automatically removed from your watchlist. We'll notify you via email 30 days before removal. Many popular series are re-licensed and return within 1-3 months. Use the 'Notify Me' feature to get alerts when removed content becomes available again.",
  },
  {
    question: "Can I watch anime in chronological order or by arcs?",
    answer:
      "For long-running series with multiple seasons or complex timelines, we provide: 1) 'Chronological Order' guides, 2) 'Story Arcs' breakdowns, 3) 'Filler Episodes' indicators, 4) 'Watch Order' recommendations. These are available on each series' page under 'Viewing Guides'. Community-created watch orders can be found in our forums.",
  },
];

export default function FAQPage() {
  return (
    <section className="text-my-white-max">
      {questions.map((question, index) => (
        <article key={question.question + "-" + index} className="mb-10">
          <h2 className="text-my-warning font-semibold text-lg mb-3">
            {question.question}
          </h2>
          <p className="text-my-white-max text-justify">{question.answer}</p>
        </article>
      ))}
    </section>
  );
}
