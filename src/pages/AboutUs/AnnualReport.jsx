import PageTitle from "../../components/PageTitle";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
import ListStyleBlock from "../../components/icons/ListStyleBlock";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";

const AnnualReport = () => {
  const legend1 = [
    {
      content: "Fundraising Events - 57% ( $300,150 )",
      color: "#BCD0EB",
    },
    { color: "#88B2E0", content: "Donations - 38% ( $196,080 )" },
    {
      color: "#5B96CD",
      content: "CEBA Income - 4% ( $20,000 )",
    },
    {
      color: "#5984B1",
      content: "Interest - 1% ( $6,110 )",
    },
  ];

  const legend2 = [
    {
      content: "Allocation - 57%<br> ( $296,491 )",
      color: "#376AC3",
      sub: [
        {
          content: "Grants - 34%<br> ( $175,000 )",
          color: "#FFD966",
        },
        {
          content: "Awareness And Support - 23%<br> ( $121,491 )",
          color: "#FFE699",
        },
      ],
    },
    {
      content: "Expenses - 27%<br> ( $139,919 )",
      color: "#29529C",
      sub: [
        {
          content: "General And Administrative - 14%<br> ( $74,240 )",
          color: "#F4B183",
        },
        {
          content: "Fundraising Costs - 13%<br> ( $65,679 )",
          color: "#F8CBAD",
        },
      ],
    },
    {
      content: "Excess Revenue Over Expenses - 16% ( $85,930 )",
      color: "#ACB9DF",
    },
  ];

  const reports = [
    {
      year: "2012",
      link: "https://heyzine.com/flip-book/1432a1a7fc.html",
    },
    {
      year: "2013",
      link: "https://heyzine.com/flip-book/e0e052af02.html",
    },
    {
      year: "2014",
      link: "https://heyzine.com/flip-book/d7f5580d1c.html",
    },
    {
      year: "2015",
      link: "https://heyzine.com/flip-book/6dc7ee3388.html",
    },
    {
      year: "2016",
      link: "https://heyzine.com/flip-book/ec7862ca52.html",
    },
    {
      year: "2017",
      link: "https://heyzine.com/flip-book/169fc6c5e2.html",
    },
    {
      year: "2018",
      link: "https://heyzine.com/flip-book/2eb0f340a9.html",
    },
    {
      year: "2019",
      link: "https://heyzine.com/flip-book/1c89f4f319.html",
    },
    {
      year: "2020",
      link: "https://heyzine.com/flip-book/174d14afb9.html",
    }
  ];

  return (
    <div>
      <PageTitle
        title="Annual<br> Report"
        description="We are proud to share our latest Annual Report with you. Over the past 12 months, our team, committees and volunteers have continued to push the envelope and bring more services and awareness opportunities forward. View our past annual reports below."
      />

      <section>
        <div className="container">
          <h2 className="text-center">
            Where does the money <br className="md:hidden" />
            <span className="text-blue text-6xl">come from</span>
          </h2>

          <div className="py-10">
            <Row>
              <Col w={6}>
                <img src="/assets/img/about-us/annual-report/chart1-0914.jpg" />
              </Col>
              <Col w={6}>
                <ul>
                  {legend1.map(({ color, content }, i) => (
                    <li key={i} className="flex items-center py-3">
                      <ListStyleBlock color={color} />
                      <span>{content}</span>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="text-center">
            Where does the money <span className="text-blue text-6xl">GO</span>
          </h2>

          <div className="py-10 text-xs">
            <Row>
              <Col w={6}>
                <img src="/assets/img/about-us/annual-report/chart2-0914.jpg" />
              </Col>
              <Col w={6}>
                <ul>
                  {legend2.map(({ content, sub, color }, i) => (
                    <li key={i} className="flex py-3">
                      <div className="flex items-center mr-3">
                        <ListStyleBlock color={color} />
                        <span dangerouslySetInnerHTML={{ __html: content }} />
                      </div>

                      {sub ? (
                        <div className="flex items-center">
                          <img
                            src="/assets/img/icons/2-ways-split.svg"
                            className="mr-3 w-[20px] h-[90px]"
                          />

                          <ul>
                            {sub.map(({ content, color }, i) => (
                              <li className="flex items-center py-2" key={i}>
                                <ListStyleBlock color={color} />
                                <div
                                  dangerouslySetInnerHTML={{ __html: content }}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}

                  <li className="mt-5 font-bold text-base text-center">Total Revenue $436,410</li>
                </ul>
                
              </Col>
            </Row>
            
          </div>

          <div className="flex justify-center">
            <PrimaryBtn
              className="btn-main"
              href="https://heyzine.com/flip-book/77cfe4a2a1.html"
            >
              VIEW 2021 ANNUAL REPORT{" "}
            </PrimaryBtn>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Row className="items-start">
            <Col w={6}>
              <h2>HISTORICAL annual reports</h2>
            </Col>

            <Col w={6}>
              <ul>
                {reports.map(({ year, link }, i) => (
                  <li>
                    <a
                      className="underline text-blue"
                      target="_blank"
                      href={link}
                    >
                      {year} Annual Report
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default AnnualReport;
