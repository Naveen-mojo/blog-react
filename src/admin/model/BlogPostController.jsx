import React, { useEffect, useState } from 'react'
import BlogPost from '../pages/BlogPost'
import apiEndPoint from '../../environment';

function BlogPostController() {

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
            <BlogPost term={term} loading={loading} />
        </>
    )
}

export default BlogPostController