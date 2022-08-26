import React, { useState, useEffect } from 'react'
import BlogCategory from '../pages/BlogCategory'
import apiEndPoint from '../../environment'

function BlogCategoryController() {

    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)

    const getCategory = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}term/all`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setCategory(result.data)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <>
            <BlogCategory category={category} loading={loading} />
        </>
    )
}

export default BlogCategoryController