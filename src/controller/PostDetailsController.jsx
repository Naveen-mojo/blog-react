import React, { useEffect, useState } from 'react'
import PostDetails from '../pages/PostDetails'
import { useLocation } from 'react-router-dom'
import apiEndPoint from '../environment';

function PostDetailsController() {

    let location = useLocation();

    const [data, setData] = useState([])

    const [items, setItems] = useState([])

    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);

    const [search, setSearch] = React.useState('')
    const [searchData, setSearchData] = useState('')

    const [recPost, setRecPost] = useState([])

    const [loading, setLoading] = useState(false)

    const getPostData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}${location.pathname.replace('/', '')}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    useEffect(() => {
        getPostData()
    }, [])

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `http://localhost:5000/api/v1/post/all?npp=20&page=0`
            );
            const data = await res.json();
            setItems(data.results);
        };

        getComments();
    }, []);

    const fetchComments = async () => {
        const res = await fetch(
            `http://localhost:5000/api/v1/post/all?npp=20&page=${page}`
        );
        const data = await res.json();
        return data.results;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    const getSearchValue = (event) => {
        setSearch(event.target.value)
    }

    const searchValue = (event) => {
        event.preventDefault()
        setSearchData(search)
    }

    const getSearchData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}search?q=${searchData}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setItems(result)
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    useEffect(() => {
        getSearchData();
    }, [searchData])

    const getRandomPost = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setRecPost(result)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }


    useEffect(() => {
        getRandomPost();
    }, [])



    return (
        <>
            <PostDetails loading={loading} recPost={recPost} data={data} items={items} hasMore={hasMore} fetchData={fetchData} getSearchValue={getSearchValue} searchValue={searchValue} />
        </>
    )
}

export default PostDetailsController