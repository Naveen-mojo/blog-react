import React, { useEffect, useState } from 'react'
import About from '../pages/About';
import apiEndPoint from '../environment';

function AboutController() {

    const [state, setState] = useState([])

    const getAboutData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}about`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setState(result)
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    useEffect(() => {
        getAboutData();
    }, [])
    return (
        <>
            <About about={state} />
        </>
    )
}

export default AboutController