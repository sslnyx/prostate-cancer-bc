import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import { fetchApi, fetchStatic } from "../lib/api";
import { useLocation } from "react-router-dom";

function App() {
  const [staticData, setStaticData] = useState(null);
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchStaticData = async () => {
      return await fetchStatic();
      // setStaticData(res)
    };

    const fetchData = async () => {
      return await fetchApi();
    };

    if (!data && !staticData) {
      Promise.all([fetchStatic(), fetchApi()])
        .then((value) => {
          console.log(value[0]);
          setStaticData(value[0]);
          setData(value[1]);
          setLoaded(true);
        })
        .catch((error) => {
          console.log("static: " + error);
        });
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="App overflow-hidden flex flex-col min-h-screen">
        {loaded ? (
          <>
            <SiteNav {...staticData} />

            <main className="flex-1 flex flex-col">
              <Outlet
                context={{
                  ...data,
                  ...staticData,
                  loaded,
                }}
              />
            </main>
          </>
        ) : (
          ""
        )}

        {staticData ? <SiteFooter props={staticData} /> : ""}
      </div>
    </>
  );
}

export default App;
