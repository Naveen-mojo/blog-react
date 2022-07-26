import Category from '../pages/Category';
import { useState, useEffect } from 'react';
import * as React from 'react';
import apiEndPoint from '../environment';
import { useParams } from 'react-router-dom'

function CategoryController(props) {

    const mSearch = props.monsterSearch

    let { pageNumber } = useParams();

    const queryPageNum = parseInt(pageNumber)

    var [pageNum, setPageNum] = React.useState(0)

    const getPagenum = () => {
        if (isNaN(queryPageNum) !== true) {
            setPageNum(pageNum + 1)
        } else {
            setPageNum(0)
        }
    }

    useEffect(() => {
        if (isNaN(queryPageNum) !== true) {
            setPageNum(queryPageNum)
        } else {
            setPageNum(0)
        }
    }, [queryPageNum])


    const [skip, setSkip] = React.useState(3)
    const [totalPages, setTotalPages] = useState(1);

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);

    const [search, setSearch] = React.useState('')
    const [searchData, setSearchData] = useState('')


    useEffect(() => {
        const getUserList = () => {
            setLoading(true);
            fetch(`${apiEndPoint}/all?npp=${skip}&page=${pageNum}`)
                .then(res => res.json())
                .then(res => {
                    setTotalPages(res.pagination.total_pages);
                    setError(res.pagination.err);
                    setUserList([...userList, ...res.results]);
                    setLoading(false);
                });
        }
        getUserList();
    }, [pageNum]);

    useEffect(() => {
        window.onload = (event) => {
            const getUserLists = () => {
                setLoading(true);
                if (isNaN(queryPageNum) === true) {
                    fetch(`${apiEndPoint}/all?npp=${(0 + 1) * 3}&page=0`)
                        .then(res => res.json())
                        .then(res => {
                            setTotalPages(res.pagination.total_pages);
                            setError(res.pagination.err);
                            setUserList([...userList, ...res.results]);
                            setLoading(false);
                        });
                } else {
                    fetch(`${apiEndPoint}/all?npp=${(queryPageNum + 1) * 3}&page=0`)
                        .then(res => res.json())
                        .then(res => {
                            setTotalPages(res.pagination.total_pages);
                            setError(res.pagination.err);
                            setUserList([...userList, ...res.results]);
                            setLoading(false);
                        });
                }
            }
            getUserLists();
        }
    }, []);


    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `http://localhost:5000/api/v1/post/all?npp=5&page=0`
            );
            const data = await res.json();
            setItems(data.results);
        };

        getComments();
    }, []);

    const fetchComments = async () => {
        const res = await fetch(
            `http://localhost:5000/api/v1/post/all?npp=5&page=${page}`
        );
        const data = await res.json();
        return data.results;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 5) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    const getSearchValue = (event) => {
        setSearch(event.target.value)
    }

    const searchValue = (event) => {
        event.preventDefault()
        setSearchData(search)
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
        // getSearchData();
    }, [searchData])

    return (
        <>
            <Category mSearch={mSearch} getPagenum={getPagenum} userList={userList} loading={loading} totalPages={totalPages} pageNum={pageNum} error={error} items={items} hasMore={hasMore} fetchData={fetchData} getSearchValue={getSearchValue} searchValue={searchValue} />
        </>
    )
}

export default CategoryController;