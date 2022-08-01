import React, { useState, useEffect } from 'react'
import BlogAllPages from '../pages/BlogAllPages'
import apiEndPoint from '../../environment'

function BlogAllPagesController() {
    const [pages, setpages] = useState([])
    const [loading, setLoading] = useState(false)

    const getPages = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}/pages`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setpages(result)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    useEffect(() => {
        getPages()
    }, [])

    return (
        <>
            <BlogAllPages pages={pages} />
        </>
    )
}

export default BlogAllPagesController