import React, { useState, useEffect } from 'react';
import Home from '../pages/Home';
import apiEndPoint from '../environment';


function HomeController(props) {

    const mSearch = props.monsterSearch

    const [carousel, setCarousel] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = React.useState('')
    const [searchData, setSearchData] = useState('')
    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);
    const [recentPost, setRecentPost] = useState([]);
    const [post3, setPost3] = useState([]);
    const [carouselPost2, setCarouselPost2] = useState([])
    const [carouselPost3, setCarouselPost3] = useState([])

    const carouselNppValue = 4;
    const carouselPageValue = 0;

    const getSearchValue = (event) => {
        setSearch(event.target.value)
    }

    const searchValue = (event) => {
        event.preventDefault()
        setSearchData(search)
    }

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `${apiEndPoint}post/pagination/all?page=1&size=23`
            );
            const data = await res.json();
            setItems(data.results);
        };

        getComments();
    }, []);

    const fetchComments = async () => {
        const res = await fetch(
            `${apiEndPoint}post/pagination/all?page=${page}&size=23`
        );
        const data = await res.json();
        return data.results;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 23) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    const getCarousel = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}post/pagination/carousel?page=${carouselPageValue}&size=${carouselNppValue}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setCarousel(result.results)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    const getRecentPost = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}post/pagination/carousel?size=4&page=1`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setRecentPost(result.results)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    const getPost3 = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}post/pagination/carousel?size=6&page=2`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setPost3(result.results)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    const getCarouselPost2 = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}post/pagination/carousel?size=3&page=6`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setCarouselPost2(result.results)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    const getCarouselPost3 = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}post/pagination/carousel?size=3&page=7`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setCarouselPost3(result.results)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    const getSearchData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}post/search/all?q=${searchData}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // setItems(result)
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    useEffect(() => {
        getCarousel();
        getRecentPost();
        getPost3();
        getCarouselPost2();
        getCarouselPost3();
    }, [])


    useEffect(() => {
        getSearchData();
    }, [searchData])



    return (
        <>
            <Home carouselPost3={carouselPost3} carouselPost2={carouselPost2} post3={post3} recentPost={recentPost} monsterSearch={mSearch} items={items} fetchData={fetchData} hasMore={hasMore} carousel={carousel} loading={loading} getSearchValue={getSearchValue} searchValue={searchValue} search={search} category={props.category} categoryloader={props.categoryloader} />
        </>
    )
}

export default HomeController;