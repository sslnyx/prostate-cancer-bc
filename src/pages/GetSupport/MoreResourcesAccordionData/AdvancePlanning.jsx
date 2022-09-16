import AccordionCard from "../../../components/AccordionCard";
import PrimaryBtn from "../../../components/bttons/PrimaryBtn";

const AdvancePlanning = () => {
  return (
    <div className="px-10">
      <AccordionCard title="Dying with Dignity">
        <p>
          Dying with Dignity Canada’s Advance Care Planning (ACP) Kit invites
          you to think about and express your wishes for health care and
          treatment at the end of life. It is intended to provoke thinking,
          conversation, and planning, and to encourage communication among you,
          your loved ones, and your health care providers. 
        </p>

        <p>
          Within the ACP Kit, you will find important background information on
          Advance Directives and appointing a Substitute Decision-Maker (someone
          who can make decision on your behalf). Once you have downloaded
          and finished working through the Kit, download the form for your
          province or territory to create your own Advance Directive and appoint
          a Substitute Decision-Maker for Health (These terms may not be used or
          may be different depending on the province or territory in which you
          live).
        </p>

        <PrimaryBtn
          className="btn-main"
          href="https://www.dyingwithdignity.ca/education-resources/advance-care-planning-kit/"
        >
          Download the free kit
        </PrimaryBtn>
      </AccordionCard>

      <AccordionCard title="Lap of Honour: a no-fear guide to living well with dying by Gaby EIrew and Dr. Pippa Hawley">
        <p>
          Written by a doctor specializing in palliative medicine and a
          counselor with many years' experience working with families coping
          with dying, Lap of Honour is packed with practical advice to help
          address the difficult questions: How long have I got? How do I tell my
          children and friends? Does cannabis help? How can I travel? What diets
          work? How do I hold a celebration of life that is right for me?
        </p>

        <p>
          This{" "}
          <a
            className="underline text-blue"
            href="https://www.amazon.ca/Lap-Honour-guide-living-dying/dp/1775181103/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
            target="_blank"
          >
            book
          </a>{" "}
          offers a thorough look at all the points in the course of a serious
          illness, from diagnosis to either survivorship or bereavement. It is
          based on a model of care called The Bow Tie Model of 21st Century
          Palliative Care that acknowledges that at any point in time people
          with life-threatening illnesses are living with the dual reality of
          hoping and striving for survivorship, which is quite possible, whilst
          at the same time needing to acknowledge that the illness may take
          their life, and that there are some sensible things they ought to do
          to prepare for that, just in case.
        </p>

        <p>
          The{" "}
          <a
            className="underline text-blue"
            href="https://www.amazon.ca/Lap-Honour-guide-living-dying/dp/1775181103/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
            target="_blank"
          >
            book
          </a>{" "}
          is available on Amazon and is about $8 in e-book form or about $20 for
          the paperback. You can also watch Dr. Pippa Hawley talk to our Coast
          to Coast support group about cannabis and its role in prostate cancer
          care{" "}
          <a
            className="underline text-blue"
            href="https://www.youtube.com/watch?v=BXt1p57lNuE"
          >
            here
          </a>
          .
        </p>
      </AccordionCard>
    </div>
  );
};

export default AdvancePlanning;
