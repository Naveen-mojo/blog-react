import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

function BlogCategory(props) {
  const deleteData = (id) => {
    console.log("delete click", id);
  };

  const columns = [
    {
      id: 1,
      name: "Category Name",
      selector: (row) => row.TermName,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: "Action",
      selector: (row) => (
        <div>
          <Link to={`/dashboard/edit-category/${row.TermId}`}>
            <i className="zmdi zmdi-edit btn btn-success radius-15"></i>
          </Link>
          <span>
            <i
              className="zmdi zmdi-delete btn btn-danger radius-15"
              onClick={() => deleteData(row.TermId)}
            ></i>
          </span>
        </div>
      ),
      sortable: true,
      right: true,
      reorder: true,
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="body">
              <DataTable
                title="Category"
                columns={columns}
                data={props.category}
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
  );
}

export default BlogCategory;
