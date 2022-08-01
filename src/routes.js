import React, { useEffect, useState } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './layout/Layout';
import CategoryController from './controller/CategoryController';
import HomeController from './controller/HomeController';
import PostDetailsController from './controller/PostDetailsController';
import Fashion from './pages/Fashion';
import Createsitemap from './component/Createsitemap';
import AboutController from './controller/AboutController';
import apiEndPoint from './environment';
import Dashboard from './admin/pages/Dashboard';
import BlogPostCreateController from './admin/model/BlogPostCreateController';
import AdminLayout from './admin/layout/Layout';
import BlogCategoryCreateController from './admin/model/BlogCategoryCreateController';
import BlogAddPageController from './admin/model/BlogAddPageController';
import SiteSettingController from './admin/model/SiteSettingController';
import BlogPostController from './admin/model/BlogPostController';
import BlogCategoryController from './admin/model/BlogCategoryController';
import BlogAllPagesController from './admin/model/BlogAllPagesController';
import BlogEditPageController from './admin/model/BlogEditPageController';
import BlogEditCategoryController from './admin/model/BlogEditCategoryController';


export default function Router(props) {

    const articleAds = props.articleAds

    const [state, setState] = useState([])
    const [category, setcategory] = useState([])
    const [loading, setloading] = useState(false)

    const getSettingData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}setting`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setState(result[0])
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    const getCategory = () => {
        setloading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}category`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setcategory(result)
                setloading(false)
            })
            .catch(error => {
                console.log('error', error)
                setloading(false)
            });
    }

    useEffect(() => {
        getSettingData();
        getCategory();
    }, [])


    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '', element: <HomeController monsterSearch={state} /> },
                { path: 'createsitemap', element: <Createsitemap /> },
                { path: 'about', element: <AboutController /> },
                { path: '*', element: <Navigate to="/" /> },
            ]
        },
        {
            path: '/:id',
            element: <Layout />,
            children: [
                { path: `videos/page/:pageNumber`, element: <CategoryController monsterSearch={state} /> },
                { path: `videos`, element: <CategoryController monsterSearch={state} /> },
                { path: 'ipl2021', element: <Fashion /> },
                { path: ':slug', element: <PostDetailsController articleAds={articleAds} monsterSearch={state} inPageAds={props.inPageAds} /> },
                { path: '*', element: <Navigate to="/" /> },
            ]
        },
        {
            path: '/dashboard',
            element: <AdminLayout />,
            children: [
                { path: 'home', element: <Dashboard /> },
                { path: 'create-post', element: <BlogPostCreateController /> },
                { path: 'add-category', element: <BlogCategoryCreateController /> },
                { path: 'add-page', element: <BlogAddPageController /> },
                { path: 'site-setting', element: <SiteSettingController /> },
                { path: 'all-posts', element: <BlogPostController category={category} loading={loading} /> },
                { path: 'all-category', element: <BlogCategoryController /> },
                { path: 'all-pages', element: <BlogAllPagesController /> },
            ]
        },
        {
            path: '/dashboard',
            element: <AdminLayout />,
            children: [
                { path: 'edit-page/:id', element: <BlogEditPageController /> },
                { path: 'edit-category/:id', element: <BlogEditCategoryController /> },
            ]
        },
        { path: '*', element: <Navigate to="/" replace /> }
    ])
}
