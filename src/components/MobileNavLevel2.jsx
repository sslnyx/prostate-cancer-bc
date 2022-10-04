import { useState } from "react";
import LeftArrow from "./icons/LeftArrow";
import MobileNavLevel3 from "./MobileNavLevel3";
import { Link } from "react-router-dom";

const MobileNavLevel2 = (props) => {
  const {
    slugLv2,
    slugLv3,
    setSlugLv3,
    itemsLv2,
    itemsLv3,
    activeLv2,
    setActiveLv2,
    activeLv3,
    setActiveLv3,
    setItemsLv3,
    closeAll,
  } = props;

  const lvl3Handler = (posts, slug) => {
    if (posts?.length) {
      setActiveLv3(true);
      setItemsLv3(posts);
      setSlugLv3(slug);
    }
  };

  const propsLv3 = {
    slugLv2,
    activeLv3,
    itemsLv3,
    slugLv3,
    setActiveLv3,
    closeAll,
  };

  return (
    <div
      className={`fixed top-0 h-screen -left-[100%] w-screen transition-transform duration-500 ease-in-out ${
        activeLv2 ? "translate-x-[calc(100%_-_30px)]" : ""
      }`}
    >
      <div
        className="absolute right-[35px] top-[35px]"
        onClick={() => setActiveLv2(false)}
      >
        <LeftArrow fill="#fff" className="fill-white relative z-10" />
      </div>

      <ul className="absolute left-0 top-0 w-full h-full p-10 pl-[calc(2.5rem_+_30px)] pt-24 bg-darkBlue">
        {itemsLv2?.map(({ title, posts, slug }) => (
          <li className="mb-3" key={slug}>
            {posts?.length ? (
              <div
                onClick={() => {
                  lvl3Handler(posts, slug);
                }}
              >
                <h3 className="text-white text-xl">{title}</h3>
              </div>
            ) : (
              <Link to={`/${slugLv2}/${slug}`} onClick={closeAll}>
                <h3 className="text-white text-xl">{title}</h3>
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div
        className={`fixed left-0 top-0 w-full h-full bg-black transition-all duration-500 ${
          activeLv3 ? "bg-opacity-10" : "pointer-events-none bg-opacity-0"
        }`}
        onClick={() => setActiveLv3(false)}
      ></div>

      <MobileNavLevel3 {...propsLv3} />
    </div>
  );
};

export default MobileNavLevel2;
