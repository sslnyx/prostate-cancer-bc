import { Link, useLocation, useOutletContext } from "react-router-dom";
import siteLogo from "/assets/img/logos/site-logo.svg";
import searchIcon from "/assets/img/icons/search.svg";
import PrimaryBtn from "./bttons/PrimaryBtn";
import { useState, useEffect } from "react";
import SubMenu from "./SubMenu";

const SiteNav = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [parentSlug, setParentSlug] = useState();
  const [navItems, setNavItems] = useState();

  const basePath = useState(window.location.origin.toString());

  const navItemsClient = [
    {
      title: "About Prostate Cancer",
      slug: "/about-prostate-cancer",
      subMenu: [
        {
          title: "What Is Prostate Cancer?",
          slug: "what-is-prostate-cancer",
          posts: [
            {
              title: "The Prostate",
              slug: "the-prostate",
            },
            {
              title: "What is Cancer?",
              slug: "what-is-cancer",
            },
            {
              title: "Risk Factors",
              slug: "risk-factors",
            },
            {
              title: "Signs and Symptoms",
              slug: "signs-and-symptoms",
            },
            {
              title: "Statistics",
              slug: "statistics",
            },
          ],
        },
        {
          title: "Diagnosis And Staging",
          slug: "diagnosis-and-staging",
          posts: [
            {
              title: "The PSA Test and the DRE",
              slug: "the-psa-test-and-the-dre",
            },
            {
              title: "Biopsy and Imaging",
              slug: "biopsy-and-imaging",
            },
            {
              title: "Grading and Staging",
              slug: "grading-and-staging",
            },
            {
              title: "Choosing a Treatment",
              slug: "choosing-a-treatment",
            },
          ],
        },
        {
          title: "Treatment",
          slug: "treatment",
          posts: [
            {
              title: "Treatment for localized prostate cancer",
              slug: "treatment-for-localized-prostate-cancer",
            },
            {
              title: "Treatment For Advanced Prostate Cancer",
              slug: "treatment-for-advanced-prostate-cancer",
            },
            {
              title: "Alternate or non-routine therapies",
              slug: "alternate-or-non-routine-therapies",
            },
            {
              title: `When Your Cancer "returns"`,
              slug: "when-your-cancer-returns",
            },
          ],
        },
        {
          title: "Living With Prostate Cancer",
          slug: "living-with-prostate-cancer",
          posts: [
            {
              title: "Incontinence",
              slug: "incontinence",
            },
            {
              title: "Nutrition",
              slug: "nutrition",
            },
            {
              title: "Exercise",
              slug: "exercise",
            },
            {
              title: "Mental Health & Wellness",
              slug: "mental-health-and-wellness",
            },
            {
              title: "Sex with and after cancer",
              slug: "sex-with-and-after-cancer",
            },
            {
              title: "Sleep",
              slug: "sleep",
            },
            {
              title: "More Resources",
              slug: "more-resources",
            },
          ],
        },
      ],
    },
    {
      title: "Get support",
      slug: "get-support",
      subMenu: [
        {
          title: "If I were Tom",
          slug: "if-i-were-tom",
        },
        {
          title: "Butts in Motion",
          slug: "butts-in-motion",
        },
        {
          title: "Support Groups",
          slug: "support-groups",
        },
        {
          title: "Peer Support - One on One",
          slug: "peer-support",
        },
        {
          title: "Reef Knot Kits – Free Info Packages",
          slug: "reef-knot-kits",
        },
        {
          title: "More Resources for Patients",
          slug: "more-resources-for-patients",
        },
        {
          title: "Support Group Councils",
          slug: "support-group-councils",
        },
      ],
    },
    {
      title: "Get involved",
      slug: "get-involved",
      subMenu: [
        {
          title: "Find an Event",
          slug: "find-an-event",
        },
        {
          title: "Volunteer",
          slug: "volunteer",
        },
      ],
    },
    {
      title: "Our impact",
      slug: "our-impact",
      subMenu: [
        {
          title: "'He's the Reason' Patient Stories",
          slug: "patient-stories",
        },
        {
          title: "Grants",
          slug: "grants",
        },
        {
          title: "Apply for Grant",
          slug: "grants/#apply-for-grant",
        },
      ],
    },
    {
      title: "Ways to give",
      slug: "ways-to-give",
    },
    {
      title: "About us",
      slug: "about-us",
      subMenu: [
        {
          title: "Our Team",
          slug: "our-team",
        },
        {
          title: "Annual Report",
          slug: "annual-report",
        },
        {
          title: "Mission",
          slug: "mission",
        },
        {
          title: "Contact Us",
          slug: "contact-us",
        },
      ],
    },
    {
      title: "News",
      slug: "/news",
    },
  ];

  const navItemsFull = [
    {
      title: "About Prostate Cancer",
      slug: "/about-prostate-cancer",
      subMenu: [
        {
          title: "What Is Prostate Cancer?",
          slug: "what-is-prostate-cancer",
          posts: [
            {
              title: "The Prostate",
              slug: "the-prostate",
            },
            {
              title: "What is Cancer?",
              slug: "what-is-cancer",
            },
            {
              title: "Risk Factors",
              slug: "risk-factors",
            },
            {
              title: "Signs and Symptoms",
              slug: "signs-and-symptoms",
            },
            {
              title: "Statistics",
              slug: "statistics",
            },
          ],
        },
        {
          title: "Diagnosis And Staging",
          slug: "diagnosis-and-staging",
          posts: [
            {
              title: "The PSA Test and the DRE",
              slug: "the-psa-test-and-the-dre",
            },
            {
              title: "Biopsy and Imaging",
              slug: "biopsy-and-imaging",
            },
            {
              title: "Grading and Staging",
              slug: "grading-and-staging",
            },
            {
              title: "Choosing a Treatment",
              slug: "choosing-a-treatment",
            },
          ],
        },
        {
          title: "Treatment",
          slug: "treatment",
          posts: [
            {
              title: "Treatment for localized prostate cancer",
              slug: "treatment-for-localized-prostate-cancer",
            },
            {
              title: "Treatment For Advanced Prostate Cancer",
              slug: "treatment-for-advanced-prostate-cancer",
            },
            {
              title: "Alternate or non-routine therapies",
              slug: "alternate-or-non-routine-therapies",
            },
            {
              title: `When Your Cancer "returns"`,
              slug: "when-your-cancer-returns",
            },
          ],
        },
        {
          title: "Living With Prostate Cancer",
          slug: "living-with-prostate-cancer",
          posts: [
            {
              title: "Incontinence",
              slug: "incontinence",
            },
            {
              title: "Nutrition",
              slug: "nutrition",
            },
            {
              title: "Exercise",
              slug: "exercise",
            },
            {
              title: "Mental Health & Wellness",
              slug: "mental-health-and-wellness",
            },
            {
              title: "Sex with and after cancer",
              slug: "sex-with-and-after-cancer",
            },
            {
              title: "Sleep",
              slug: "sleep",
            },
            {
              title: "More Resources",
              slug: "more-resources",
            },
          ],
        },
      ],
    },
    {
      title: "Get support",
      slug: "get-support",
      subMenu: [
        {
          title: "If I were Tom",
          slug: "if-i-were-tom",
        },
        {
          title: "Butts in Motion",
          slug: "butts-in-motion",
        },
        {
          title: "Support Groups",
          slug: "support-groups",
        },
        {
          title: "Peer Support - One on One",
          slug: "peer-support",
        },
        {
          title: "Reef Knot Kits – Free Info Packages",
          slug: "reef-knot-kits",
        },
        {
          title: "More Resources for Patients",
          slug: "more-resources-for-patients",
        },
        {
          title: "Support Group Councils",
          slug: "support-group-councils",
        },
      ],
    },
    {
      title: "Get involved",
      slug: "get-involved",
      subMenu: [
        {
          title: "Find an Event",
          slug: "find-an-event",
        },
        {
          title: "Volunteer",
          slug: "volunteer",
        },
      ],
    },
    {
      title: "Our impact",
      slug: "our-impact",
      subMenu: [
        {
          title: "'He's the Reason' Patient Stories",
          slug: "patient-stories",
        },
        {
          title: "Grants",
          slug: "grants",
        },
        {
          title: "Apply for Grant",
          slug: "grants/#apply-for-grant",
        },
      ],
    },
    {
      title: "Ways to give",
      slug: "ways-to-give",
      subMenu: [
        {
          title: "Donate",
          slug: "donate",
        },
        {
          title: "Alternative Ways to Support Us",
          slug: "alternative-ways-to-support-us",
        },
      ],
    },
    {
      title: "About us",
      slug: "about-us",
      subMenu: [
        {
          title: "Our Team",
          slug: "our-team",
        },
        {
          title: "Annual Report",
          slug: "annual-report",
        },
        {
          title: "Mission",
          slug: "mission",
        },
        {
          title: "Contact Us",
          slug: "contact-us",
        },
      ],
    },
    {
      title: "News",
      slug: "/news",
    },
  ];

  useEffect(() => {
    // console.log(basePath)
    basePath[0] === "https://preview.prostatecancerbc.ca"
      ? setNavItems(navItemsClient)
      : setNavItems(navItemsFull);
  }, []);

  return (
    <nav className="relative z-50">
      <div
        className="flex flex-row justify-between items-center xl:items-end py-5 px-[22px] 2xl:px-10 max-w-[1920px] mx-auto"
        onMouseEnter={() => setSelectedMenu(null)}
      >
        <Link to="/">
          <img src={siteLogo} className="w-[240px]" alt="siteLogo" />
        </Link>

        <div className="hidden xl:flex flex-row items-center mb-[25px] -mx-1">
          <div className="px-1">
            <img src={searchIcon} className="w-[25px] mr-2" alt="" />
          </div>
          <div className="px-1">
            <PrimaryBtn className="btn-main">SHOP BLUE</PrimaryBtn>
          </div>

          <div className="px-1">
            <PrimaryBtn className="btn-orange">Donate</PrimaryBtn>
          </div>
        </div>
        <div className="flex xl:hidden flex-row items-center">
          <div className="p-2 -mr-2">
            <div className="w-[30px] h-[4px] bg-blue mb-1"></div>
            <div className="w-[30px] h-[4px] bg-blue mb-1"></div>
            <div className="w-[30px] h-[4px] bg-blue"></div>
          </div>
        </div>
      </div>

      <div
        className={`hidden bg-darkBlue text-white relative xl:flex justify-center`}
      >
        <div
          className={`top-[70px] shadow-[0px_5px_20px_rgba(0,0,0,0.8)] absolute w-full bg-darkBlue flex transition-all duration-700 ${
            !selectedMenu ? "opacity-0 pointer-events-none" : ""
          }`}
          onMouseLeave={() => setSelectedMenu(null)}
        >
          <div className="container !max-w-[1536px]">
            {selectedMenu ? (
              <SubMenu
                subMenu={selectedMenu}
                parentSlug={parentSlug}
                setSelectedMenu={setSelectedMenu}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="w-full relative z-10">
          <div className="absolute bottom-0 pointer-events-none left-[-10%] bg-transparent w-[120%] h-full shadow-[0px_5px_20px_rgba(0,0,0,0.8)]"></div>
          <div className="container !max-w-[1536px] py-2">
            <div className="w-full flex justify-between text-[1.5rem] font-bold -mx-2">
              {navItems?.map((props, i) => (
                <div
                  key={i}
                  className="px-2 py-[15px] capitalize cursor-pointer"
                  onMouseOver={() => {
                    setSelectedMenu(props.subMenu), setParentSlug(props.slug);
                  }}
                >
                  {props.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
