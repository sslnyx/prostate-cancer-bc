import { Link } from "react-router-dom";
import siteLogo from "/assets/img/logos/site-logo.svg";
import searchIcon from "/assets/img/icons/search.svg";
import PrimaryBtn from "./PrimaryBtn";

const SiteNav = () => {
  return (
    <nav className="px-[22px]">
      <div className="flex flex-row justify-between items-end py-5 2xl:px-10">
        <img src={siteLogo} className="w-[250px]" alt="siteLogo" />
        <div className="flex flex-row items-center">
          <img src={searchIcon} className="w-[25px] mr-2" alt="" />
          <PrimaryBtn className="btn-main">SHOP BLUE</PrimaryBtn>
          <PrimaryBtn className="btn-orange">Donate</PrimaryBtn>
        </div>
      </div>
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
    </nav>
  );
};

export default SiteNav;
