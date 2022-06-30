import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './layout/Layout';
import CategoryController from './controller/CategoryController';
import HomeController from './controller/HomeController';
import PostDetailsController from './controller/PostDetailsController';
import Fashion from './pages/Fashion';
import Sitemap from './component/Sitemap';

export default function Router() {
    
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '', element: <HomeController /> },
                { path: '*', element: <Navigate to="/" /> },
                { path: 'sitemap', element: <Sitemap /> },
            ]
        },
        {
            path: '/:id',
            element: <Layout />,
            children: [
                { path: `videos/page/:pageNumber`, element: <CategoryController  /> },
                { path: `videos`, element: <CategoryController /> },
                { path: 'ipl2021', element: <Fashion /> },
                { path: ':slug', element: <PostDetailsController /> },
                { path: '*', element: <Navigate to="/" /> },
            ]
        },
        { path: '*', element: <Navigate to="/" replace /> }
    ])
}
