import React, { useState, useEffect } from 'react'
import Search from '../component/Search';
import { useSearchParams } from 'react-router-dom';
import apiEndPoint from '../environment';

function SearchController() {

    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get("s")

    const [search, setSearch] = useState(searchValue)
    const [items, setItems] = useState([])

    const getSearch = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}search?q=${search}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setItems(result)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getSearch();
    }, [search])

    const getSearchValue = (event) =>{
        setSearch(event.target.value)
    }

    return (
        <>
            <Search items={items} searchValue={searchValue} getSearchValue={getSearchValue} search={search} />
        </>
    )
}

export default SearchController;