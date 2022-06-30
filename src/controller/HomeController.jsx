import React, { useState, useEffect } from 'react';
import Home from '../pages/Home';
import apiEndPoint from '../environment';


function HomeController() {
    const [carousel, setCarousel] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = React.useState('')
    const [searchData, setSearchData] = useState('')
    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);

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
        console.log(commentsFormServer);

        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
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

        fetch(`${apiEndPoint}carousel?npp=${carouselNppValue}&page=${carouselPageValue}`, requestOptions)
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
        getCarousel();
    }, [])


    useEffect(() => {
        getSearchData();
    }, [searchData])



    return (
        <>
            <Home items={items} fetchData={fetchData} hasMore={hasMore} carousel={carousel} loading={loading} getSearchValue={getSearchValue} searchValue={searchValue} search={search} />
        </>
    )
}

export default HomeController;