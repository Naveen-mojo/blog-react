import React, {useState, useEffect} from 'react';
import Header from '../component/Header';
import apiEndPoint from '../environment';


function HeaderController() {
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
            <Header term={term} />
        </>
    )
}

export default HeaderController