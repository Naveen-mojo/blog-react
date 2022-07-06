import React, { useState, useEffect } from 'react';
import Footer from '../component/Footer'
import apiEndPoint from '../environment';

function FooterController() {

    const [term, setTerm] = useState([])


    const getTerm = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}/term`, requestOptions)
            .then(response => response.json())
            .then(result => setTerm(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getTerm();
    }, [])

    return (
        <>
            <Footer term={term} />
        </>
    )
}

export default FooterController