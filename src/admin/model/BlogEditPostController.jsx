import BlogEditPost from "../pages/BlogEditPost";
import React, { useEffect, useState } from "react";
import apiEndPoint from "../../environment";
import { useLocation } from "react-router-dom";

function BlogEditPostController(props) {
  const [posts, setposts] = useState([]);
  const [catId, setCatId] = useState(null);
  const [term, setTerm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingTerm, setLoadingTerm] = useState(false);

  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const getPages = () => {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}post/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setposts(result.data);
        setCatId(result.data.post_term.CatId);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  const getTerm = () => {
    setLoadingTerm(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}term/all`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTerm(result.data);
        setLoadingTerm(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoadingTerm(false);
      });
  };

  useEffect(() => {
    getPages();
    getTerm();
  }, []);

  return (
    <>
      <BlogEditPost
        posts={posts}
        loading={loading}
        category={props.category}
        cateloader={props.cateloading}
        term={term}
        loadingTerm={loadingTerm}
        catId={catId}
      />
    </>
  );
}

export default BlogEditPostController;
