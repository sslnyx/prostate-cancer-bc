import PrimaryBtn from "../../../components/bttons/PrimaryBtn";
import AccordionCard from "../../../components/AccordionCard";

const PatientEducationWellnessPrograms = () => {
  return (
    <div className="md:px-10">
      <AccordionCard title="Prostate Cancer Supportive Care Program">
        <p>
          The PCSC Program is a comprehensive survivorship program developed in
          2013 at the Vancouver Prostate Centre for men with prostate cancer,
          their partners, and family from the time of initial diagnosis onwards.
        </p>
        <p>
          Men can self-refer to this program or be referred by their doctor (a
          doctor’s referral is required for the Sexual Health Service).
        </p>
        <p>
          The PCSC Program is a clinical, educational, and research-based
          approach to care, addressing the challenges of decision-making and
          coping along the entire disease trajectory to serve both the patient
          and their partner’s physical and psychological needs.
        </p>
        <div className="mb-5">
          The PCSC Program currently includes seven modules which men can take
          part in with more modules in development. These modules include group
          educational sessions and clinical services in the following areas:
          <ul className="list-decimal list-inside py-3">
            <li>Primary Treatment Decision-Making </li>
            <li>Sexual Rehabilitation </li>
            <li>Lifestyle Management (Nutrition and Exercise)</li>
            <li>Androgen Deprivation Therapy</li>
            <li> Pelvic Floor Physiotherapy </li>
            <li>Clinical Counselling</li>
            <li>Advanced Disease Management </li>
          </ul>
        </div>

        <PrimaryBtn href="https://pcscprogram.ca/" className="btn-main mb-3">
          <span>Learn More</span>
        </PrimaryBtn>

        <p className="italic">
          Please note that while clinical services are only available in person
          in BC, educational sessions are now available to patients across
          Canada.
        </p>
      </AccordionCard>

      <AccordionCard title="Life on ADT">
        <div>
          <p>
            Androgen Deprivation Therapy (ADT) is an effective treatment for
            prostate cancer, but it also has many side effects.
          </p>

          <p>
            The Androgen Deprivation Therapy Educational Program is a free
            1.5-hour session, endorsed by the Canadian Urological Association
            during which patients and loved ones will:
          </p>

          <ul className="list-disc list-inside py-3">
            <li>Learn about side effects of ADT </li>
            <li>Learn how to manage side effects</li>
            <li>
              Complete goal setting exercises to teach you how to manage ADT
              side effects
            </li>
          </ul>

          <p>
            The program is designed for both patients and their partners or
            loved ones. Patients who are not partnered are encouraged to invite
            a family member or close friend to attend the session with them.
          </p>
          <p>
            Canadian participants receive a free copy of the book Androgen
            Deprivation Therapy: An Essential Guide for Prostate Cancer Patients
            and Their Loved Ones.
          </p>
          <PrimaryBtn
            href="https://www.lifeonadt.com/"
            className="btn-main mb-3"
          >
            <span>Learn More</span>
          </PrimaryBtn>
        </div>
      </AccordionCard>

      <AccordionCard title="SIRvivor">
        <p>
          The SIRvivor BC Exercise Program runs for 6 to 12 weeks, with 2
          one-hour sessions each week. It is designed for men with prostate
          cancer and includes strength development through resistance-based
          exercise, along with cardiovascular training, flexibility and balance.
        </p>

        <p>
          The program is delivered by exercise trainers certified through the BC
          Recreation and Parks Association and is offered virtually and at
          community centres throughout BC. SIRvivor BC is also being evaluated
          under a research study, gathering feedback from participants on their
          experience in the program. This feedback is being used to improve and
          grow the program over the next few years.
        </p>

        <p>
          All men who have had a prostate cancer diagnosis may be eligible for
          SIRvivor BC. Prior to joining classes, participants complete a phone
          screening with a clinical exercise physiologist to make sure they can
          safely take part.
        </p>

        <PrimaryBtn
          className="btn-main"
          href="https://cepl.rehab.med.ubc.ca/sirvivor-bc-exercise-program/sirvivor-bc/"
        >
          Learn More
        </PrimaryBtn>
      </AccordionCard>

      <AccordionCard title="PC-PEP">
        <p>
          Do you want to take an active role in improving your physical and
          mental health after a prostate cancer diagnosis? Decrease side effects
          like sleep difficulties, fatigue and urinary leakage and increase your
          chances of leading a better quality of life during and after treatment
          and in the long run?
        </p>

        <p>
          Then the Prostate Cancer - Patient Empowerment Program (PC-PEP) is for
          you! PC-PEP is a 6-month comprehensive home based on-line interactive
          program led by an Oncologist and Scientist from Dalhousie University,
          Nova Scotia.
        </p>

        <p>
          The program is free to join and includes video interactive sessions,
          social support and demonstrative practices evidenced to make a real
          difference in people’s lives.
        </p>

        <p>
          To learn more about this program, or register go to:{" "}
          <a className="underline text-blue" href="https://pcpep.org/">
            www.pcpep.org
          </a>{" "}
          and watch the 10 minutes introductory video on the home page.
        </p>
      </AccordionCard>
    </div>
  );
};

export default PatientEducationWellnessPrograms;
