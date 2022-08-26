import React, { useState, useEffect } from 'react'
import BlogPost from '../pages/BlogPost'
import apiEndPoint from '../../environment'

function BlogPostController(props) {

    const [posts, setPost] = useState([])
    const [loading, setLoading] = useState(false)

    const getPost = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}post/all`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setPost(result.data)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    useEffect(() => {
        getPost()
    }, [])


    return (
        <>
            <BlogPost posts={posts} loading={loading} category={props.category} categoryloader={props.loading} />
        </>
    )
}

export default BlogPostController