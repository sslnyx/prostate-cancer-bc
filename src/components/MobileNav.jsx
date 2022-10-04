import { forwardRef, useEffect, useState } from "react";
import CloseBtn from "./bttons/CloseBtn";
import MobileNavLevel2 from "./MobileNavLevel2";

const MobileNav = (props) => {
  const { activeMobile, navItemsFull, setActiveMobile, closeMobileMenu } =
    props;

  const [activeLv2, setActiveLv2] = useState();
  const [itemsLv2, setItemsLv2] = useState();
  const [slugLv2, setSlugLv2] = useState();

  const [activeLv3, setActiveLv3] = useState(false);
  const [itemsLv3, setItemsLv3] = useState(false);
  const [slugLv3, setSlugLv3] = useState();

  const closeAll = () => {
    setActiveMobile(false);
    setActiveLv2(false);
    setActiveLv3(false);
  };

  const propsLv2 = {
    slugLv3,
    setSlugLv3,
    slugLv2,
    itemsLv2,
    activeLv2,
    activeLv3,
    itemsLv3,
    setItemsLv3,
    setActiveLv2,
    setActiveLv3,
    closeAll,
  };

  //   useEffect(() => {
  //     console.log(navItemsFull);
  //   }, []);

  return (
    <div
      className={`
        w-screen xl:hidden bg-darkBlue -left-[100%] fixed h-screen box-shadow transition-transform ease-in-out duration-500 p-10 pt-24 ${
          activeMobile ? "activeMobile" : ""
        }`}
    >
      <CloseBtn onClick={closeMobileMenu} />

      <ul>
        {navItemsFull.map(({ title, subMenu, slug }) => (
          <li
            className="mb-3"
            key={slug}
            onClick={() => (
              setItemsLv2(subMenu), setActiveLv2(true), setSlugLv2(slug)
            )}
          >
            <h3 className="text-white text-xl">{title}</h3>
          </li>
        ))}
      </ul>

      <div
        className={`absolute left-0 top-0 w-full h-full bg-black transition-all duration-500 ${
          activeLv2 ? "bg-opacity-20" : "pointer-events-none bg-opacity-0"
        }`}
        onClick={() => (setActiveLv2(false), setActiveLv3(false))}
      ></div>

      <MobileNavLevel2 {...propsLv2} />
    </div>
  );
};

export default MobileNav;
