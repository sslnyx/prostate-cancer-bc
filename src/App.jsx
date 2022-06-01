import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import { fetchApi } from "../lib/api";

function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(null);
  const [loaded, setLoaded] =useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchApi();
      setData(res);
      setLoaded(true);
    };

    if (!data) {
      fetchData().catch((error) => {
        console.log(error);
      });
    }
  }, []);

  return (
    <>
      <div className="App overflow-hidden">
        <SiteNav />

        <main>
          <Outlet
            context={{
              data,
              loaded,
            }}
          />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

export default App;
