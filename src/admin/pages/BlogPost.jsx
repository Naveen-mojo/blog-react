import React from 'react'
import DataTable from "react-data-table-component";
import moment from 'moment';

function BlogPost(props) {

    const editData = (id) => {
        console.log('edit click', id)
    }

    const deleteData = (id) => {
        console.log('delete click', id)
    }

    const category = props.category

    const columns = [
        {
            id: 1,
            name: "Title",
            selector: (row) => row.PostTitle,
            sortable: true,
            reorder: true
        },
        {
            id: 2,
            name: "Category",
            selector: (row) => category[row.CatId].termName,
            sortable: true,
            reorder: true
        },
        {
            id: 3,
            name: "Post Image",
            selector: (row) =>  (row.PostThumbUrl !== '') ? <img src={`${row.PostThumbUrl}`} style={{ height: "50px", width: "70px", margin: "7px" }} alt='img' /> : <img src={`${row.PostThumb}`} style={{ height: "50px", width: "70px", margin: "7px" }} alt='img' /> ,
            sortable: true,
            right: true,
            reorder: true
        },
        {
            id: 4,
            name: "Views",
            selector: (row) => row.PostViews,
            sortable: true,
            right: true,
            reorder: true
        },
        {
            id: 5,
            name: "Date",
            selector: (row) => moment(row.CreationDate).add(10, 'days').calendar(),
            sortable: true,
            right: true,
            reorder: true
        },
        {
            id: 6,
            name: "Action",
            selector: (row) => <div><span> <i class="zmdi zmdi-edit btn btn-success radius-15" onClick={() => editData(row.ID)}></i> </span> <span> <i class="zmdi zmdi-delete btn btn-danger radius-15" onClick={() => deleteData(row.ID)}></i> </span> </div>,
            sortable: true,
            right: true,
            reorder: true
        }
    ];

    return (
        <>
            {props.categoryloader ? <div className="d-flex justify-content-center my-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> :
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='body'>
                                <DataTable
                                    title="Posts"
                                    columns={columns}
                                    data={props.posts}
                                    defaultSortFieldId={1}
                                    sortIcon={<i class="zmdi zmdi-long-arrow-up"></i>}
                                    pagination
                                    selectableRows
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default BlogPost