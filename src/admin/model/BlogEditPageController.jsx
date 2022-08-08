import React, { useEffect, useState } from "react";
import BlogEditPage from "../pages/BlogEditPage";
import apiEndPoint from "../../environment";
import { useLocation } from "react-router-dom";

function BlogEditPageController() {
  const [pages, setpages] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const getPages = () => {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}admin/pages/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setpages(result[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPages();
  }, []);

  return (
    <>
      <BlogEditPage pages={pages} loading={loading} />
    </>
  );
}

export default BlogEditPageController;
