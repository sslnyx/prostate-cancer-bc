import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import { fetchApi, fetchStatic } from "../lib/api";
import { useLocation } from "react-router-dom";
import LoadingStripe from "./components/loaders/LoadingStripe";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import MobileNav from "./components/MobileNav";

function App() {
  const [staticData, setStaticData] = useState(null);
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();
  const hashRef = useRef();
  const loadDataTime = 30000;

  const getLocaleData = (siteData) => {
    setData(siteData[1]);
    setStaticData(siteData[0]);
    setLoaded(true);
  };

  const getServerData = () => {
    // console.log("getServerData");
    Promise.all([fetchStatic(), fetchApi()])
      .then((value) => {
        if (!value[2]) {
          value[2] = {};
          value[2].dataTime = Date.now();
        }
        localStorage.setItem("PCFSiteData", JSON.stringify(value));
        setStaticData(value[0]);
        setData(value[1]);
        setLoaded(true);
      })
      .catch((error) => {
        console.log("static: " + error);
      });
  };

  const siteProps = { hashRef };

  useEffect(() => {
    const siteData = JSON.parse(localStorage.getItem("PCFSiteData"));

    if (siteData?.length && Date.now() - siteData[2].dataTime < loadDataTime)
      // console.log(Date.now() - siteData[2]?.dataTime);
      return getLocaleData(siteData);

    getServerData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Prostate Cancer Foundation BC" defaultTitle="Prostate Cancer Foundation BC" />
      {loaded ? (
        <div className="App overflow-hidden relative flex flex-col min-h-screen">
          <SiteNav {...staticData} />

          <main className="flex-1 flex flex-col">
            <Outlet
              context={{
                ...data,
                ...staticData,
                loaded,
                hashRef,
              }}
            />
          </main>

          <SiteFooter props={staticData} />
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <LoadingStripe />
        </div>
      )}
    </HelmetProvider>
  );
}

export default App;
