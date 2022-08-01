import React, { useEffect, useState } from 'react'
import BlogPostCreate from '../pages/BlogPostCreate'
import apiEndPoint from '../../environment';

function BlogPostCreateController() {

    const [term, setTerm] = useState([])
    const [loading, setLoading] = useState(false)

    const getTerm = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}/term`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setTerm(result)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    useEffect(() => {
        getTerm()
    }, [])

    return (
        <>
            <BlogPostCreate term={term} loading={loading} />
        </>
    )
}

export default BlogPostCreateController