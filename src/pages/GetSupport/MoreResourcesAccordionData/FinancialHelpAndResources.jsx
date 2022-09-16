import AccordionCard from "../../../components/AccordionCard";
const FinancialHelpAndResources = () => {
  const content = [
    {
      title: "Accommodations during treatment",
      items: [
        "Canadian Cancer Society’s lodges offer an affordable place to stay for people with cancer and their caregivers. They are located near cancer treatment centres and major hospitals. Each lodge offers a variety of amenities to make you feel at home. Learn more <a href='https://cancer.ca/en/living-with-cancer/how-we-can-help/accommodation' target='_blank'>here</a>.",
      ],
    },
    {
      title: "Flights and accommodations for patients in rural areas",
      items: [
        "Hope Air is a charity that provides free flights and accommodations for Canadians in financial need who must reach medical care far from home. Without it, patients would drive for hours, take on unmanageable debt or cancel medical appointments. Learn more here.",
        "Canadian Cancer Society will help you find transportation to your cancer appointments. Learn more here.",
      ],
    },
    {
      title: "Federal benefits and tax credits",
      items: [
        "Disability tax credit program: While a cancer diagnosis itself is not enough to qualify, you may qualify for the credit if your cancer is significantly impacting your life in other ways. Learn more about the credit here.",
        "Medical expenses: You may be eligible to claim some of your medical expenses on your taxes. For more information on valid claims, click here. ",
        "EI sickness benefits: Employment Insurance (EI) sickness benefits can provide you with up to 15 weeks of financial assistance if you can't work for medical reasons. Learn more here.",
        "Your province or territory may have additional support. ",
      ],
    },
  ];
  return (
    <div className="px-10">
      <AccordionCard title="Accommodations during treatment">
        <ul className="list-disc pl-4">
          <li className="py-1">
            Canadian Cancer Society’s lodges offer an affordable place to stay
            for people with cancer and their caregivers. They are located near
            cancer treatment centres and major hospitals. Each lodge offers a
            variety of amenities to make you feel at home. Learn more{" "}
            <a
              href="https://cancer.ca/en/living-with-cancer/how-we-can-help/accommodation"
              target="_blank"
              className="underline text-blue"
            >
              here
            </a>
            .
          </li>
        </ul>
      </AccordionCard>

      <AccordionCard title="Flights and accommodations for patients in rural areas">
        <ul className="list-disc pl-4">
          <li className="py-1">
            Hope Air is a charity that provides free flights and accommodations
            for Canadians in financial need who must reach medical care far from
            home. Without it, patients would drive for hours, take on
            unmanageable debt or cancel medical appointments. Learn more{" "}
            <a
              href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:f447713b-aad6-3490-8246-ad1c57e7d818"
              target="_blank"
              className="underline text-blue"
            >
              here
            </a>
            .
          </li>
          <li className="py-1">
            Canadian Cancer Society will help you find transportation to your
            cancer appointments. Learn more{" "}
            <a
              href="https://cancer.ca/en/living-with-cancer/how-we-can-help/transportation"
              target="_blank"
              className="underline text-blue"
            >
              here
            </a>
            .
          </li>
        </ul>
      </AccordionCard>

      <AccordionCard title="Federal benefits and tax credits">
        <ul className="list-disc pl-4">
          <li className="py-1">
            Disability tax credit program: While a cancer diagnosis itself is
            not enough to qualify, you may qualify for the credit if your cancer
            is significantly impacting your life in other ways. Learn more about
            the credit{" "}
            <a
              target="_blank"
              className="underline text-blue"
              href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit/eligible-dtc.html"
            >
              here
            </a>
            .
          </li>
          <li className="py-1">
            Medical expenses: You may be eligible to claim some of your medical
            expenses on your taxes. For more information on valid claims, click{" "}
            <a
              target="_blank"
              className="underline text-blue"
              href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return.html"
            >
              here
            </a>
            .
          </li>

          <li className="py-1">
            Employment Insurance (EI) provides regular benefits to individuals
            who lose their jobs through no fault of their own (for example, due
            to shortage of work, or seasonal or mass lay-offs) and are available
            for and able to work, but can't find a job. Learn more{" "}
            <a
              target="_blank"
              className="underline text-blue"
              href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit.html"
            >
              here
            </a>
            .   
          </li>

          <li className="py-1">
            EI sickness benefits: Employment Insurance (EI) sickness benefits
            can provide you with up to 15 weeks of financial assistance if you
            can't work for medical reasons. Learn more{" "}
            <a
              href="https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit.html"
              target="_blank"
              className="underline text-blue"
            >
              here
            </a>
          </li>
          <li className="py-1">Your province or territory may have additional support</li>
        </ul>
      </AccordionCard>
    </div>
  );
};

export default FinancialHelpAndResources;
