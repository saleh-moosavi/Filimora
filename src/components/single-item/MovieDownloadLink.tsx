import { useState } from "react";
import Accordion from "../Accordion";

export default function MovieDownloadLink() {
  const [accordion, setAccordion] = useState<boolean[]>(Array(5).fill(false));

  const showAccordion = (id: number) => {
    const allAccordions = [...accordion];
    const current = allAccordions[id];
    allAccordions.fill(false);
    allAccordions[id] = current ? false : true;
    setAccordion(allAccordions);
  };
  return (
    <div className="text-white mt-10">
      <h3 className="md:text-lg font-semibold">Download Links</h3>
      {/* an accordion */}
      <Accordion
        accordion={accordion}
        showAccordion={showAccordion}
        id={1}
        season={1}
      />
      <Accordion
        accordion={accordion}
        showAccordion={showAccordion}
        id={0}
        season={2}
      />
    </div>
  );
}
