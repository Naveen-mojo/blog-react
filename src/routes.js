import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import CategoryController from "./controller/CategoryController";
import HomeController from "./controller/HomeController";
import PostDetailsController from "./controller/PostDetailsController";
import Fashion from "./pages/Fashion";
import Createsitemap from "./component/Createsitemap";
import AboutController from "./controller/AboutController";
import apiEndPoint from "./environment";
import Dashboard from "./admin/pages/Dashboard";
import BlogPostCreateController from "./admin/model/BlogPostCreateController";
import AdminLayout from "./admin/layout/Layout";
import BlogCategoryCreateController from "./admin/model/BlogCategoryCreateController";
import BlogAddPageController from "./admin/model/BlogAddPageController";
import SiteSettingController from "./admin/model/SiteSettingController";
import BlogPostController from "./admin/model/BlogPostController";
import BlogCategoryController from "./admin/model/BlogCategoryController";
import BlogAllPagesController from "./admin/model/BlogAllPagesController";
import BlogEditPageController from "./admin/model/BlogEditPageController";
import BlogEditCategoryController from "./admin/model/BlogEditCategoryController";
import BlogEditPostController from "./admin/model/BlogEditPostController";
import Login from "./admin/auth/Login";
import PrivateRoute from "./utils/PrivateRoute";

export default function Router(props) {
  const articleAds = props.articleAds;

  const [state, setState] = useState([]);
  const [category, setcategory] = useState([]);
  const [loading, setloading] = useState(false);

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

  useEffect(() => {
    getSettingData();
    getCategory();
  }, []);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: (
            <HomeController
              monsterSearch={state}
              category={category}
              categoryloader={loading}
            />
          ),
        },
        { path: "createsitemap", element: <Createsitemap /> },
        { path: "about-page", element: <AboutController /> },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
    {
      path: "/:id",
      element: <Layout />,
      children: [
        {
          path: `videos/page/:pageNumber`,
          element: (
            <CategoryController
              monsterSearch={state}
              category={category}
              categoryloader={loading}
            />
          ),
        },
        {
          path: `videos`,
          element: (
            <CategoryController
              monsterSearch={state}
              category={category}
              categoryloader={loading}
            />
          ),
        },
        { path: "ipl2021", element: <Fashion /> },
        {
          path: ":slug",
          element: (
            <PostDetailsController
              articleAds={articleAds}
              monsterSearch={state}
              inPageAds={props.inPageAds}
              category={category}
              categoryloader={loading}
            />
          ),
        },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <AdminLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: "home",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "create-post",
          element: (
            <PrivateRoute>
              <BlogPostCreateController />
            </PrivateRoute>
          ),
        },
        {
          path: "create-category",
          element: (
            <PrivateRoute>
              <BlogCategoryCreateController />
            </PrivateRoute>
          ),
        },
        {
          path: "create-page",
          element: (
            <PrivateRoute>
              <BlogAddPageController />
            </PrivateRoute>
          ),
        },
        {
          path: "site-setting",
          element: (
            <PrivateRoute>
              <SiteSettingController />
            </PrivateRoute>
          ),
        },
        {
          path: "all-posts",
          element: (
            <PrivateRoute>
              <BlogPostController category={category} loading={loading} />
            </PrivateRoute>
          ),
        },
        {
          path: "all-category",
          element: (
            <PrivateRoute>
              <BlogCategoryController />
            </PrivateRoute>
          ),
        },
        {
          path: "all-pages",
          element: (
            <PrivateRoute>
              <BlogAllPagesController />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <AdminLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: "edit-page/:id",
          element: (
            <PrivateRoute>
              <BlogEditPageController />
            </PrivateRoute>
          ),
        },
        {
          path: "edit-category/:id",
          element: (
            <PrivateRoute>
              <BlogEditCategoryController />
            </PrivateRoute>
          ),
        },
        {
          path: "edit-post/:id",
          element: (
            <PrivateRoute>
              <BlogEditPostController
                category={category}
                cateloading={loading}
              />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/admin",
      children: [{ path: "login", element: <Login /> }],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
