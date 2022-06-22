import React, { useState, useEffect } from 'react';
import Home from '../pages/Home';
import apiEndPoint from '../environment';

function HomeController(props) {
    const [user, setUser] = useState([])
    const [carousel, setCarousel] = useState([])
    const [loading, setLoading] = useState(false)

    const getUser = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setUser(result)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    const getCarousel = () => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}carousel?npp=3&page=0`, requestOptions)
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

    useEffect(() => {
        getUser();
        getCarousel();
    }, [])



    return (
        <>
            <Home user={user} carousel={carousel} loading={loading} />
        </>
    )
}

export default HomeController;