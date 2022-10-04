import { useRef } from "react";

import { Link, useLocation, useOutletContext } from "react-router-dom";
import siteLogo from "/assets/img/logos/site-logo.svg";
import searchIcon from "/assets/img/icons/search.svg";
import PrimaryBtn from "./bttons/PrimaryBtn";
import { useState, useEffect } from "react";
import SubMenu from "./SubMenu";
import HamburgerBtn from "./bttons/HamburgerBtn";
import MobileNav from "./MobileNav";

const SiteNav = () => {
  const [selectedMenu, setSelectedMenu] = useState();
  const [parentSlug, setParentSlug] = useState();
  const [offLeft, setOffLeft] = useState();
  const [activeMobile, setActiveMobile] = useState(false);
  const [pathLv1, setPathLv1] = useState();
  const [pathLv2, setPathLv2] = useState();
  const [pathLv3, setPathLv3] = useState();

  const ref = useRef({});

  const { pathname } = useLocation();

  const basePath = useState(window.location.origin.toString(false));


  const navItemsFull = [
    {
      title: "About Prostate Cancer",
      slug: "about-prostate-cancer",
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
              title: "Treatment for Localized Prostate Cancer",
              slug: "treatment-for-localized-prostate-cancer",
            },
            {
              title: "Treatment For Advanced Prostate Cancer",
              slug: "treatment-for-advanced-prostate-cancer",
            },
            {
              title: "Alternate or Non-Routine Therapies",
              slug: "alternate-or-non-routine-therapies",
            },
            {
              title: `When Your Cancer "Returns"`,
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
              title: "Sex With and After Cancer",
              slug: "sex-with-and-after-cancer",
            },
            {
              title: "Sleep",
              slug: "sleep",
            },
            // {
            //   title: "More Resources",
            //   slug: "more-resources",
            // },
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
          slug: "grants#apply-for-grant",
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
    // {
    //   title: "News",
    //   slug: "/news",
    // },
  ];

  const mobileHandler = () => {
    setActiveMobile(!activeMobile);
  };

  const closeMobileMenu = () => {
    setActiveMobile(false);
  };

  const mobileMenuProps = {
    activeMobile,
    navItemsFull,
    setActiveMobile,
    closeMobileMenu,
  };

  // useEffect(() => {
  //   // console.log(basePath)
  //   basePath[0] === "https://preview.prostatecancerbc.ca"
  //     ? setNavItems(navItemsClient)
  //     : setNavItems(navItemsFull);
  // }, []);

  const getNavOffsetLeft = () => {
    if (selectedMenu) {
      const left = ref.current[selectedMenu?.idx]?.getBoundingClientRect().left;
      setOffLeft(left);
    }
  };

  useEffect(() => {
    getNavOffsetLeft();
    window.addEventListener("resize", getNavOffsetLeft);

    return () => {
      window.removeEventListener("resize", getNavOffsetLeft);
    };
  }, [selectedMenu]);

  useEffect(() => {
    const pathArr = pathname.split("/");
    // console.log(pathArr)
    setPathLv1(pathArr[1]);
    setPathLv2(pathArr[2]);
    setPathLv3(pathArr[3]);
  }, [pathname]);

  return (
    <nav className="relative z-50">
      <MobileNav {...mobileMenuProps} />
      <div
        className="flex flex-row justify-between items-center xl:items-end py-5 px-[22px] 2xl:px-10 max-w-[1920px] mx-auto"
        onMouseEnter={() => setSelectedMenu(null)}
      >
        <Link to="/">
          <img src={siteLogo} className="w-[240px]" alt="siteLogo" />
        </Link>

        <div className="hidden xl:flex flex-row items-center mb-[25px] -mx-1">
          {/* <div className="px-1">
            <img src={searchIcon} className="w-[25px] mr-2" alt="" />
          </div> */}
          {/* <div className="px-1">
            <PrimaryBtn
              href="https://prostatecancersupportcanada.square.site/"
              className="btn-main"
            >
              SHOP BLUE
            </PrimaryBtn>
          </div> */}

          <div className="px-1">
            <PrimaryBtn href="/ways-to-give/donate" className="btn-orange">
              Donate
            </PrimaryBtn>
          </div>
        </div>

        <HamburgerBtn onClick={mobileHandler} />
      </div>

      <div
        className={`hidden bg-darkBlue text-white relative xl:flex justify-center`}
      >
        <div
          className={`top-[79px] shadow-[0px_5px_20px_rgba(0,0,0,0.8)] absolute w-full bg-darkBlue flex transition-all duration-700 ${
            !selectedMenu && "opacity-0 pointer-events-none"
          }`}
          onMouseLeave={() => setSelectedMenu(null)}
        >
          <div>
            {selectedMenu && (
              <SubMenu
                subMenu={selectedMenu.value}
                idx={selectedMenu.idx}
                parentSlug={parentSlug}
                left={offLeft}
                pathLv2={pathLv2}
                pathLv3={pathLv3}
                setSelectedMenu={setSelectedMenu}
              />
            )}
          </div>
        </div>

        <div className="w-full relative z-10">
          <div className="absolute bottom-0 pointer-events-none left-[-10%] bg-transparent w-[120%] h-full shadow-[0px_5px_20px_rgba(0,0,0,0.8)]"></div>
          <div className="container !max-w-[1536px] py-2">
            <div className="w-full flex justify-between text-[1.5rem] font-bold -mx-2">
              {navItemsFull?.map((props, i) => (
                <div
                  key={i}
                  ref={(el) => (ref.current[i] = el)}
                  className={`px-2 py-[15px] capitalize cursor-pointer mainNavItem ${
                    props.slug
                  } ${pathLv1 === props.slug ? "activeLine" : ""}`}
                  onMouseOver={(ev) => {
                    setSelectedMenu({ value: props.subMenu, idx: i }),
                      setParentSlug(props.slug);
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
