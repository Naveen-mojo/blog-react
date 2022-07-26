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
import BlogPostController from './admin/model/BlogPostController';
import AdminLayout from './admin/layout/Layout';
import BlogCategoryController from './admin/model/BlogCategoryController';


export default function Router(props) {

    const articleAds = props.articleAds

    const [state, setState] = useState([])

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

    useEffect(() => {
        getSettingData();
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
                { path: '', element: <Dashboard /> },
                { path: 'create-post', element: <BlogPostController /> },
                { path: 'add-category', element: <BlogCategoryController /> },
            ]
        },
        { path: '*', element: <Navigate to="/" replace /> }
    ])
}
