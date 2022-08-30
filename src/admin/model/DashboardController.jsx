import React, { useEffect, useState } from 'react'
import Dashboard from '../pages/Dashboard'
import apiEndPoint from '../../environment'

function DashboardController() {

    const [totalPost, setTotalPost] = useState([])
    const [activePost, setActivePost] = useState([])
    const [terms, setTerms] = useState([])
    const [totalViews, setTotalViews] = useState(null)
    const [loading, setLoading] = useState(false)

    const getTotalPost = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}dashboard/post`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setTotalPost(result.data)
                setTotalViews(result.data.rows[0].total_views)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    const getActivePost = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}dashboard/post/active`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setActivePost(result.data)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    const getTerm = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}dashboard/terms`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setTerms(result.data)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    useEffect(() => {
        getTotalPost()
        getActivePost()
        getTerm()
    }, [])

    return (
        <>
            <Dashboard totalPost={totalPost} activePost={activePost} terms={terms} loading={loading} totalViews={totalViews} />
        </>
    )
}

export default DashboardController