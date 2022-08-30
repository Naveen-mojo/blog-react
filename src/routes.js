import React, { useEffect, useState, lazy, Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import apiEndPoint from "./environment";
import HomeController from "./controller/HomeController";
import PostDetailsController from "./controller/PostDetailsController";

import Createsitemap from "./component/Createsitemap";
import AboutController from "./controller/AboutController";
import AdminLayout from "./admin/layout/Layout";
import BlogAddPageController from "./admin/model/BlogAddPageController";
import SiteSettingController from "./admin/model/SiteSettingController";
import BlogCategoryController from "./admin/model/BlogCategoryController";
import Login from "./admin/auth/Login";
import PrivateRoute from "./utils/PrivateRoute";
import PageNotFound from "./component/PageNotFound";
import DashboardController from "./admin/model/DashboardController";

// Lazy Loading Component
const CategoryController = lazy(() => import('./controller/CategoryController'));
const Fashion = lazy(() => import('./pages/Fashion'));
const BlogPostController = lazy(() => import('./admin/model/BlogPostController'));
const BlogPostCreateController = lazy(() => import('./admin/model/BlogPostCreateController'));
const BlogCategoryCreateController = lazy(() => import('./admin/model/BlogCategoryCreateController'));
const BlogEditCategoryController = lazy(() => import('./admin/model/BlogEditCategoryController'));
const BlogEditPostController = lazy(() => import('./admin/model/BlogEditPostController'));
const BlogAllPagesController = lazy(() => import('./admin/model/BlogAllPagesController'));
const BlogEditPageController = lazy(() => import('./admin/model/BlogEditPageController'));


export default function Router(props) {
  const articleAds = props.articleAds;
  const category = props.category;
  const loading = props.loading;

  const [state, setState] = useState([]);

  const getSettingData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}setting/all`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setState(result[0]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getSettingData();
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
        {
          path: `:id/videos/page/:pageNumber`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <CategoryController
                monsterSearch={state}
                category={category}
                categoryloader={loading}
              />
            </Suspense>
          ),
        },
        {
          path: `:id/videos`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <CategoryController
                monsterSearch={state}
                category={category}
                categoryloader={loading}
              />
            </Suspense>
          ),
        },
        { path: `:id/ipl2021`, element: <Suspense fallback={<div>Loading...</div>}> <Fashion /> </Suspense> },
        {
          path: ":id/:slug",
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
        { path: "*", element: <PageNotFound /> },
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
              <DashboardController />
            </PrivateRoute>
          ),
        },
        {
          path: "create-post",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <BlogPostCreateController category={category} />
              </PrivateRoute>
            </Suspense>
          ),
        },
        {
          path: "create-category",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <BlogCategoryCreateController />
              </PrivateRoute>
            </Suspense>
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
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <BlogPostController category={category} loading={loading} />
              </PrivateRoute>
            </Suspense>
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
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <BlogAllPagesController />
              </PrivateRoute>
            </Suspense>
          ),
        },
        {
          path: "edit-page/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <BlogEditPageController />
              </PrivateRoute>
            </Suspense>
          ),
        },
        {
          path: "edit-category/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <BlogEditCategoryController />
              </PrivateRoute>
            </Suspense>
          ),
        },
        {
          path: "edit-post/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <BlogEditPostController
                  category={category}
                  cateloading={loading}
                />
              </PrivateRoute>
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/admin",
      children: [{ path: "login", element: <Login /> }],
    },
    { path: "*", element: <PageNotFound /> },
  ]);
}
