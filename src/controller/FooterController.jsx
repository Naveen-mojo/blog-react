import React, { useState, useEffect } from 'react';
import Footer from '../component/Footer'
import apiEndPoint from '../environment';

function FooterController(props) {

    const [term, setTerm] = useState([])


    const getTerm = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}term/all`, requestOptions)
            .then(response => response.json())
            .then(result => setTerm(result.data))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getTerm();
    }, [])

    return (
        <>
            <Footer term={term} footerAds={props.footerData} siteLogo={props.siteLogo} />
        </>
    )
}

export default FooterController