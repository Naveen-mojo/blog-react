import React, { useState, useEffect } from "react";
import BlogEditCategory from "../pages/BlogEditCategory";
import apiEndPoint from "../../environment";
import { useLocation } from "react-router-dom";

function BlogEditCategoryController() {
  const [category, setcategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const getCategory = () => {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}term/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setcategory(result.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <BlogEditCategory category={category} loading={loading} />
    </>
  );
}

export default BlogEditCategoryController;
