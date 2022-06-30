import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import apiEndPoint from '../environment';


function HeaderController() {
    const [term, setTerm] = useState([])
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const getSearchValue = (event) => {
        setSearch(event.target.value)
    }

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

    const getSearch = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}search?q=${search}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setSearchResult(result)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getTerm();
    }, [])

    useEffect(() => {
        getSearch();
    }, [search])

    return (
        <>
            <Header term={term} getSearchValue={getSearchValue} searchResult={searchResult} />
        </>
    )
}

export default HeaderController