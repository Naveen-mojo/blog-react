import Category from '../pages/Category';
import { useState, useEffect } from 'react';
import * as React from 'react';
import apiEndPoint from '../environment';
import { useParams } from 'react-router-dom'

function CategoryController(props) {

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


    useEffect(() => {
        const getUserList = () => {
            setLoading(true);
            fetch(`${apiEndPoint}/all?npp=${skip}&page=${pageNum}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
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
                fetch(`${apiEndPoint}/all?npp=${(queryPageNum + 1) * 3}&page=0`)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        setTotalPages(res.pagination.total_pages);
                        setError(res.pagination.err);
                        setUserList([...userList, ...res.results]);
                        setLoading(false);
                    });
            }
            getUserLists();
        }
    }, []);


    return (
        <>
            <Category getPagenum={getPagenum} userList={userList} loading={loading} totalPages={totalPages} pageNum={pageNum} error={error} />
        </>
    )
}

export default CategoryController;