import "./App.css";
import FooterController from "./controller/FooterController";
import HeaderController from "./controller/HeaderController";
import Router from "./routes";
import React, { useState } from "react";
import apiEndPoint from "./environment";
import { useLocation } from "react-router-dom";
import Login from "./admin/auth/Login";
import AuthProvider from "./context/AuthContext";

function App() {
  const [header, setheader] = React.useState(null);
  const [footer, setfooter] = React.useState(null);
  const [articleAds, setArticleAds] = React.useState(null);
  const [inPageAds, setInPageAds] = React.useState(null);
  const [siteLogo, setSiteLogo] = React.useState(null);
  const [siteLogo2, setSiteLogo2] = React.useState(null);
  const [siteTitle, setSiteTitle] = React.useState(null);
  const [settingloading, setSettingLoading] = React.useState(false);

  const [category, setcategory] = useState([]);
  const [loading, setloading] = useState(false);

  const headTag = document.querySelector("head");

  function seoData() {
    setSettingLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/v1/post/setting", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSettingLoading(false);
        var head = `
        ${result[0].seoInfo}
        ${result[0].metaVerification}
        ${result[0].fotterVerification}
        <link rel="icon" href=${result[0].favicon} />
        <link rel="apple-touch-icon" href=${result[0].favicon} />
        <style>${result[0].customCss}</style>
        <title>${result[0].siteTitle}</title>
        `;
        setheader(`
        ${result[0].headerAds}
        `);

        setfooter(`
        ${result[0].fotterAds}
        `);

        setArticleAds(
          `
          ${result[0].articleAds}
          `
        );

        setInPageAds(`
        ${result[0].inPageAds}
        `);

        setSiteLogo(`
        ${result[0].siteLogo}
        `);

        setSiteLogo2(`
        ${result[0].secondary_logo}
        `);

        setSiteTitle(`
        ${result[0].siteTitle}
        `);

        headTag.insertAdjacentHTML("afterbegin", head);
      })
      .catch((error) => console.log("error", error));
  }

  React.useEffect(() => {
    seoData();
  }, []);

  const [state, setState] = React.useState([]);

  const getSettingData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}setting`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setState(result[0]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getCategory = () => {
    setloading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}category`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setcategory(result);
        setloading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setloading(false);
      });
  };


  React.useEffect(() => {
    getSettingData();
    getCategory();
  }, []);

  const location = useLocation();

  if (location.pathname.split("/")[1] === "dashboard") {
    return (
      <>
        <AuthProvider>
          <Router category={category} loading={loading} />
        </AuthProvider>
      </>
    );
  } else if (location.pathname.split("/")[2] === "login") {
    return (
      <>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </>
    );
  } else {
    return (
      <>
        <div className="site-wrapper header-1" style={{ transform: "none" }}>
          <HeaderController
            headerData={header}
            monsterSearch={state}
            siteLogo={siteLogo}
            siteTitle={siteTitle}
            siteLogo2={siteLogo2}
            category={category} loading={loading}
          />
          <Router articleAds={articleAds} inPageAds={inPageAds} category={category} loading={loading} />
          <FooterController footerData={footer} siteLogo={siteLogo} />
        </div>
      </>
    );
  }
}

export default App;
