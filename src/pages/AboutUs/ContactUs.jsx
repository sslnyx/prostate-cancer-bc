import PageTitle from "../../components/PageTitle";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
import { useOutletContext } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const contactData = [
    {
      title: "Support Services",
      email: "support@prostatecancerbc.ca",
      tel: "604-574-4100",
    },
    {
      title: "Events",
      email: "nicole@prostatecancerbc.ca",
      tel: "604-574-8000",
    },
    {
      title: "General Inquiry",
      email: "info@prostatecancerbc.ca",
      tel: "604-574-4012",
    },
  ];

  const {
    company: { contact, googleMap, address },
  } = useOutletContext();

  return (
    <div>
      <PageTitle title="CONTACT US" />

      <section>
        <div className="container">
          <Row>
            <Col w={8} className="mb-10 md:mb-0">
              <img src="/assets/img/about-us/contact-us/contact.jpeg" />
            </Col>
            <Col w={4}>
              <div className="w-full flex items-end h-full">
                <div>
                  <p className="font-bold text-xl text-darkBlue">
                    For The Foundation
                  </p>

                  <p>
                    <a target="_blank" href={googleMap}>
                      <span
                        dangerouslySetInnerHTML={{ __html: address }}
                      ></span>
                    </a>
                  </p>

                  <div className="link-blue text-darkBlue">
                    {contactData.map(({ title, email, tel }) => (
                      <p>
                        <span className="font-bold">{title}</span> <br />
                        <span className="font-bold">E. </span>
                        <a href={`mailto:${email}`}>{email}</a> <br />
                        <span className="font-bold">T. </span>
                        <a href={`tel:${tel}`}>{tel}</a>
                      </p>
                    ))}
                  </div>

                  {/* <div>
                    {contact.map(({ title, value }, i) => (
                      <div key={i}>
                        <span className="font-bold">
                          {title === "Email" ? "E" : title}
                          {". "}
                        </span>
                        <span
                          className={`${
                            title === "Email" ? "text-blue font-bold" : ""
                          }`}
                        >
                          <a
                            href={`${
                              title === "Email" ? "mailto:" : "tel:"
                            }${value}`}
                          >
                            {value}
                          </a>
                        </span>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="mb-10">General inquiry</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
