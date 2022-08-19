import React, { useEffect, useState } from "react";
import About from "../pages/About";
import apiEndPoint from "../environment";
import { useLocation } from "react-router-dom";

function AboutController() {
  const [state, setState] = useState([]);

  const location = useLocation();
  var path = location.pathname.split("/")[1];

  const getAboutData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}pages/${path}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setState(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getAboutData();
  }, []);
  return (
    <>
      <About about={state} />
    </>
  );
}

export default AboutController;
