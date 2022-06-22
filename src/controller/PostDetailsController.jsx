import React from 'react'
import PostDetails from '../pages/PostDetails'
import {useParams} from 'react-router-dom'

function PostDetailsController() {

    let { slug } = useParams();


    // console.log(slug)

    return (
        <>
            <PostDetails />
        </>
    )
}

export default PostDetailsController