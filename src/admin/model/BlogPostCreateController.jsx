import React, { useEffect, useState } from 'react'
import BlogPostCreate from '../pages/BlogPostCreate'
import apiEndPoint from '../../environment';

function BlogPostCreateController(props) {

    const [term, setTerm] = useState([])
    const [loading, setLoading] = useState(false)

    const getTerm = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}term/all`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setTerm(result.data)
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
            <BlogPostCreate term={term} loading={loading}  categoryName={props.category} />
        </>
    )
}

export default BlogPostCreateController