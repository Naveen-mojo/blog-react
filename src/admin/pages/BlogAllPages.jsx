import React from 'react'
import DataTable from 'react-data-table-component'
import moment from 'moment'
import { Link } from 'react-router-dom';

function BlogAllPages(props) {

    const deleteData = (id) => {
        console.log('delete click', id)
    }

    const columns = [
        {
            id: 1,
            name: "Page Title",
            selector: (row) => row.PageTitle,
            sortable: true,
            reorder: true
        },
        {
            id: 2,
            name: "Page Slug",
            selector: (row) => row.PageSlug,
            sortable: true,
            reorder: true
        },
        {
            id: 3,
            name: "Page Status",
            selector: (row) => row.PageStatus,
            sortable: true,
            reorder: true
        },
        {
            id: 4,
            name: "Page Creation Date",
            selector: (row) => moment(row.CreationDate).add(10, 'days').calendar(),
            sortable: true,
            reorder: true
        },
        {
            id: 5,
            name: "Action",
            selector: (row) => <div><Link to={`/dashboard/edit-page/${row.ID}`}> <i className="zmdi zmdi-edit btn btn-success radius-15"></i> </Link> <span> <i className="zmdi zmdi-delete btn btn-danger radius-15" onClick={() => deleteData(row.ID)}></i> </span> </div>,
            sortable: true,
            right: true,
            reorder: true
        }
    ];

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='body'>
                            <DataTable
                                title="Pages"
                                columns={columns}
                                data={props.pages}
                                defaultSortFieldId={1}
                                sortIcon={<i className="zmdi zmdi-long-arrow-up"></i>}
                                pagination
                                selectableRows
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogAllPages