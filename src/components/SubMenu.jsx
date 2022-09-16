import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const SubMenu = ({ subMenu, setSelectedMenu, parentSlug }) => {
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

    // console.log(seletedCat?.posts);
  }, [selectedPostCat]);

  useEffect(() => {
    setSelectedPosts(null);
    setSelectedPostCat(null);
  }, [subMenu]);

  return (
    <div className="flex py-10">
      <ul className="mr-10">
        {subMenu?.map(({ title, slug, posts }) => (
          <li key={slug}>
            {posts ? (
              <span className={linkClass}
                onMouseOver={() => {
                  setSelectedPostCat(slug);
                }}
              >
                {title}
              </span>
            ) : (
              <NavLink
                onClick={() => {
                  setSelectedMenu(null);
                }}
                to={`${parentSlug}/${slug}`}
                className={({ isActive }) =>
                  isActive ? activeClassName : linkClass
                }
              >
                {title}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      {selectedPosts ? (
        <ul className="border-l pl-10">
          {selectedPosts.map(({ title, slug }) => (
            <li key={slug}>
              <NavLink className={linkClass} to={`${parentSlug}/${selectedPostCat}/${slug}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubMenu;
