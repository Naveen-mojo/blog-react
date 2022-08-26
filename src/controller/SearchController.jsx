import React, { useState, useEffect } from 'react'
import Search from '../component/Search';
import { useSearchParams } from 'react-router-dom';
import apiEndPoint from '../environment';

function SearchController(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get("q")

    const [search, setSearch] = useState(searchValue)
    const [items, setItems] = useState([])
    const [state, setState] = useState([])

    const getSearch = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}post/search/all?q=${search}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setItems(result)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getSearch();
    }, [search])


    const getSettingData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}setting/all`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setState(result[0])
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    useEffect(() => {
        getSettingData();
    }, [])

    const getSearchValue = (event) =>{
        setSearch(event.target.value)
    }

    return (
        <>
            <Search items={items} searchValue={searchValue} getSearchValue={getSearchValue} search={search} monsterSearch={state} category={props.category} catgeloader={props.catgeloader} />
        </>
    )
}

export default SearchController;