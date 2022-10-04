import PostTitle from "../../../components/post-section/PostTitle";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import ExpendableContent from "../../../components/post-section/ExpendableContent";
import TreatmentOneOnOneBox from "./TreatmentOneOnOneBox";
import PageTitle from "../../../components/PageTitle";

const TreatmentForLocalizedProstateCancer = () => {
  const ASRes = [
    {
      title: "Active Surveillance Support Group",
      link: "https://www.prostatecancersupport.ca/support-groups/",
    },
    {
      title: "If I Were Tom – Active Surveillance",
      link: "https://ifiweretom.ca/treating-prostate-cancer",
    },
    {
      title: "Choosing Wisely Canada handout",
      link: "https://choosingwiselycanada.org/wp-content/uploads/2017/06/Prostate-cancer-EN.pdf",
    },
    {
      title: "Active Surveillance videos",
      link: "https://www.youtube.com/playlist?app=desktop&list=PLoqgqU2PgZ9wnYgZAEiYs4jZPOZu_PPNU",
    },
  ];

  const RPRes = [
    {
      title: "If I Were Tom",
      link: "http://ifiweretom.ca/",
    },
    {
      title: "Return to Work after a Radical Prostatectomy guide",
      link: "https://acrobat.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A17049351-d700-31af-a6bd-9f85832c97cd&viewer%21megaVerb=group-discover",
    },
  ];

  const RTRes = [
    {
      title: "If I Were Tom",
      link: "http://ifiweretom.ca/",
    },
    {
      title:
        "Prostate Brachytherapy - Low dose rate or high dose rate: what you need to know - Dr. Juanita Crook",
      link: "https://www.youtube.com/watch?app=desktop&v=jY9oZ6iiVq4",
    },
  ];
  return (
    <>
      <PageTitle
        p1="Treatment for localized"
        p2="prostate cancer"
        className="title-light"
      />

      <div className="container">
        <section className="border-none">
          {/* <PostTitle>
          Treatment for <br />
          <span className="text-blue">localized prostate cancer</span>
        </PostTitle> */}

          {/* <div className="mb-10"></div> */}

          <TreatmentOneOnOneBox />
        </section>

        <TitleAndContent title="Active surveillance">
          <div className="max-w-[700px]">
            <p>
              Active surveillance is a method of watching your condition closely
              with your healthcare team. It is for patients with low-risk
              cancer.
            </p>

            <strong className="underline">
              Treatment isn’t always needed!
            </strong>

            <ExpendableContent>
              <div className="py-3">
                <p>
                  Active surveillance allows patients to manage their prostate
                  cancer without being treated immediately with surgery or
                  radiation. Treatment can often cause sexual, urinary or bowel
                  issues, so practicing active surveillance can help these
                  patients avoid uncomfortable side effects indefinitely and
                  prolong the maintenance of their current quality of life.
                </p>

                <p>
                  With low-risk prostate cancer, you have time to make your
                  treatment decision because your cancer grows very slowly.
                  Low-risk prostate cancer tumours are small and contained to
                  the prostate (have not spread). Because the cancer grows
                  slowly, most men with low-risk prostate cancer will die with
                  their cancer, rather than from it.
                </p>
              </div>
            </ExpendableContent>
            <div className="mb-3"></div>
            <strong className="underline">How does it work?</strong>
            <ExpendableContent>
              <div className="py-3">
                <p>
                  During active surveillance, you will work with your healthcare
                  team to monitor your prostate cancer through regular checkups,
                  PSA tests, digital rectal exams (DREs), and sometimes MRIs.
                  You may need to repeat your biopsy at the advice of your
                  doctor(s). Read more about biopsies here.
                </p>

                <p>
                  If there are any warning signs that your prostate cancer is
                  spreading (such as a sudden increase in PSA score, unusual
                  hardness or lumps during a DRE, or an increased Gleason score
                  following a biopsy), you may need to progress to choosing a
                  treatment.
                </p>

                <p>
                  If you’re not sure if you’d be a good candidate for active
                  surveillance, be sure to talk to your healthcare provider(s)
                  about it as an option. It’s important that you consider your
                  medical and family history, as well as your own values. Learn
                  more about choosing a treatment here.
                </p>
              </div>
            </ExpendableContent>
            <div className="mb-3"></div>

            <strong className="underline">Pros and Cons:</strong>

            <ExpendableContent>
              <div className="py-3">
                <ul className="list-disc pl-4">
                  <li className="mb-3">
                    Pros:
                    <ul>
                      <li className="flex">
                        <span className="pr-2">-</span>
                        Avoiding long term side effects of treatment
                      </li>
                      <li className="flex">
                        <span className="pr-2">-</span>
                        Maintaining your quality of life
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cons:
                    <ul>
                      <li className="flex">
                        <span className="pr-2">-</span>
                        The long-term testing and monitoring can be difficult
                        for those at higher risk of anxiety
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </ExpendableContent>
            <div className="mb-3"></div>

            <strong className="underline">Resources:</strong>
            <ExpendableContent>
              <div className="py-3">
                <ul className="list-disc pl-4">
                  {ASRes.map(({ title, link }) => (
                    <li>
                      <a href={link} target="_blank">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ExpendableContent>
          </div>
        </TitleAndContent>

        <TitleAndContent title="Radical prostatectomy">
          <div>
            <p>
              Surgery for prostate cancer is called a radical prostatectomy. It
              involves a complete removal of the prostate gland and the
              surrounding tissues, including parts of the bladder and the
              seminal vesicles.
            </p>

            <p>
              It is an appropriate treatment choice for patients with localized
              cancer (confined to the prostate) who are in good overall health
              and have a life expectancy of at least ten years.
            </p>

            <strong className="underline">Open Surgery</strong>

            <ExpendableContent>
              <div className="py-3">
                Traditionally, ‘open’ surgeries were performed where an incision
                (6 to 10 cm in length) was made in the lower abdomen and the
                prostate was removed ‘by hand’ by your surgeon.
              </div>
            </ExpendableContent>

            <div className="mb-5"></div>

            <strong className="underline">Laparoscopic prostatectomy</strong>
            <ExpendableContent>
              <div className="py-3">
                This method is sometimes called ‘the keyhole approach.’ It
                involves four to five small incisions being made in the lower
                abdomen in which long telescopic cameras (laporoscopes) are
                inserted, then guided by a video camera. The surgeon is able to
                remove the prostate internally with the help of the video
                camera. This procedure is less invasive than open surgery and
                therefore, usually has a quicker recovery time.
              </div>
            </ExpendableContent>

            <div className="mb-5"></div>

            <strong className="underline">Robotic surgery</strong>
            <ExpendableContent>
              <div className="py-3">
                Robotic surgery is essentially the same as a laparoscopic
                prostatectomy, except that rather than the surgical instruments
                being held by a surgeon, they are held by a robotic machine that
                is controlled by the surgeon. This allows for a more precise
                surgery, allowing the instruments to move like a human hand in
                the body while avoiding the possibility of human errors like
                slight hand tremors.{" "}
              </div>
            </ExpendableContent>

            <div className="mb-5"></div>

            <strong className="underline">Pros and Cons:</strong>
            <ExpendableContent>
              <ul className="list-disc pl-4 py-3">
                <li className="mb-3">
                  Pros
                  <ul className="list-[circle] pl-4">
                    <li>
                      With a radical prostatectomy, the whole prostate is
                      removed allowing your doctor to definitively determine
                      whether or not your cancer was confined to your prostate
                      with post-prostatectomy lab testing. It is thus easier to
                      determine if you’ll need another course of treatment or if
                      you’re effectively ‘cancer-free’
                    </li>
                    <li>
                      Prostatectomies have been performed for much longer than
                      other treatments (over 100 years!), so patients can rest
                      assured that their treatment is safe
                    </li>
                  </ul>
                </li>

                <li>
                  Cons
                  <ul className="list-[circle] pl-4">
                    <li>
                      There is the potential for adverse side effects following
                      a prostatectomy including:
                      <ul className="">
                        <li>- Incontinence</li>
                        <li>- Erectile dysfunction</li>
                      </ul>
                    </li>
                    <li>
                      Normal surgical complications may occur as with any
                      surgery including:
                      <ul className="">
                        <li>- Blood loss</li>
                        <li>- Complications with anesthesia</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </ExpendableContent>

            <div className="mb-5"></div>

            <strong className="underline">Resources:</strong>
            <ExpendableContent>
              <ul className="py-3 list-disc pl-4">
                {RPRes.map(({ title, link }) => (
                  <li>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </ExpendableContent>
          </div>
        </TitleAndContent>

        <TitleAndContent title="Radiation therapy">
          <div>
            <p>
              Radiation therapy works by high-energy x-rays targeting prostate
              cancer cells and disrupting their DNA, thereby killing or
              shrinking the cancer cells.
            </p>
            <strong className="underline">Who is radiation for?</strong>
            <ExpendableContent>
              <ul className="py-3 list-disc pl-4">
                <li>Patients with localized prostate cancer</li>
                <li>
                  Patients who may still have some prostate cancer left
                  following their surgery (also known as salvage radiation)
                </li>
                <li>
                  Patients with an aggressive cancer may be prescribed both
                  radiation therapy and hormone therapy
                </li>
              </ul>
            </ExpendableContent>
            <div className="mb-5"></div>
            <strong className="underline">External Beam Radiation:</strong>
            <ExpendableContent>
              <ul className="py-3 list-disc pl-4">
                <li>
                  A machine called a linear accelerator directs radiation beams
                  through the skin and to the prostate cancer cells
                </li>
                <li>
                  Treatments take only a couple of minutes each, but will
                  require about 30 separate treatments and many visits to your
                  hospital
                </li>
                <li>
                  EBR generally has more side effects than brachytherapy as,
                  despite the beams being quite precise, it is very difficult to
                  avoid also hitting the rectum and bladder with the radiation
                </li>
              </ul>
            </ExpendableContent>
            <div className="mb-5"></div>
            <strong className="underline">Brachytherapy:</strong>
            <ExpendableContent>
              <ul className="py-3 list-disc pl-4">
                <li className="mb-3">
                  Low-dose brachytherapy involves permanently implanting several
                  small (about the size of a grain of rice) radioactive pellets,
                  known as ‘seeds’ into the prostate
                  <ul className="list-[circle] pl-4">
                    <li>
                      Seeds gradually deliver radiation over a period of a few
                      months
                    </li>
                  </ul>
                </li>

                <li>
                  High-dose brachytherapy involves temporarily inserting
                  flexible needles into the prostate to deliver a high dose of
                  radiation
                  <ul className="list-[circle] pl-4">
                    <li>
                      Radiation is delivered over a period of a few minutes or
                      hours
                    </li>
                  </ul>
                </li>
              </ul>
            </ExpendableContent>
            <div className="mb-5"></div>
            <strong className="underline">Pros and Cons:</strong>
            <ExpendableContent>
              <ul className="list-disc pl-4">
                <li className="py-3">
                  Props:
                  <ul className="list-[circle] pl-4">
                    <li>Spared an invasive surgery as in a prostatectomy</li>
                  </ul>
                </li>
                <li>
                  Cons:
                  <ul className="list-[circle] pl-4">
                    <li>
                      Same potential side effects as prostatectomy including:
                      <ul className="">
                        <li className="flex">
                          <span className="pr-2">-</span> Incontinence
                        </li>
                        <li className="flex">
                          <span className="pr-2">-</span> Sexual or erectile
                          dysfunction
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </ExpendableContent>
            <div className="mb-5"></div>

            <strong className="underline">Resources:</strong>

            <ExpendableContent>
              <ul className="py-3 list-disc pl-4">
                {RPRes.map(({ title, link }) => (
                  <li>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </ExpendableContent>
          </div>
        </TitleAndContent>
      </div>
    </>
  );
};

export default TreatmentForLocalizedProstateCancer;
