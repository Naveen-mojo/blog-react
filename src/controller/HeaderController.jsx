import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import apiEndPoint from '../environment';


function HeaderController(props) {

    const mSearch = props.monsterSearch
    const siteTitle= props.siteTitle
    const siteLogo = props.siteLogo
    
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
            <Header monsterSearch={mSearch} headerAds={props.headerData} term={term} getSearchValue={getSearchValue} searchResult={searchResult} siteLogo={siteLogo} siteTitle={siteTitle} siteLogo2={props.siteLogo2} category={props.category} loading={props.loading} />
        </>
    )
}

export default HeaderController