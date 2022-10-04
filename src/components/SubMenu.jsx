import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { titleCase, isHash } from "../util/util";

const SubMenu = ({
  subMenu,
  setSelectedMenu,
  parentSlug,
  idx,
  left,
  pathLv2,
  pathLv3,
}) => {
  let activeStyle = {
    textDecoration: "underline",
  };

  const [selectedPostCat, setSelectedPostCat] = useState();
  const [selectedPosts, setSelectedPosts] = useState();
  const linkClass = "py-2 inline-block mb-2 font-bold cursor-pointer";
  const activeClassName = "underline " + linkClass;

  useEffect(() => {
    const seletedCat = subMenu.find(({ slug }) => slug === selectedPostCat);
    seletedCat ? setSelectedPosts(seletedCat.posts) : "";
  }, [selectedPostCat]);

  useEffect(() => {
    setSelectedPosts(null);
    setSelectedPostCat(null);
  }, [subMenu]);

  return (
    <div className={`flex py-10`}>
      <div
        className={`relative flex`}
        style={{ transform: `translateX(${left}px)` }}
      >
        <ul className="mr-10 pl-3">
          {subMenu?.map(({ title, slug, posts }) => (
            <li key={slug}>
              {posts ? (
                <span
                  className={`${linkClass} ${
                    pathLv2 === slug ? "activeLine" : ""
                  }`}
                  onMouseOver={() => {
                    setSelectedPostCat(slug);
                  }}
                >
                  {title}
                </span>
              ) : (
                <Link
                  onClick={() => {
                    setSelectedMenu(null);
                  }}
                  to={`${parentSlug}/${slug}`}
                  className={`${linkClass} ${
                    pathLv2 === slug ? "activeLine" : ""
                  }`}
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {selectedPosts && (
          <ul className="border-l pl-10">
            {selectedPosts.map(({ title, slug }) => (
              <li key={slug}>
                <Link
                  onClick={() => {
                    setSelectedMenu(null);
                  }}
                  className={`${linkClass} ${
                    slug === pathLv3 ? "activeLine" : ""
                  }`}
                  to={`${parentSlug}/${selectedPostCat}/${slug}`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SubMenu;
