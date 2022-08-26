import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { Link, NavLink } from "react-router-dom";
import apiEndPoint from "../../environment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogPost(props) {
  const deleteData = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}delete/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        toast(result.message);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const category = props.category;

  const columns = [
    {
      id: 1,
      name: "Title",
      selector: (row) => row.PostTitle,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: "Category",
      selector: (row) => category[row.post_term.CatId].termName,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: "Post Image",
      selector: (row) =>
        row.PostThumbUrl !== null ? (
          <img
            src={`${row.PostThumbUrl}`}
            style={{ height: "50px", width: "70px", margin: "7px" }}
            alt="img"
          />
        ) : (
          <img
            src={`${row.PostThumb}`}
            style={{ height: "50px", width: "70px", margin: "7px" }}
            alt="img"
          />
        ),
      sortable: true,
      right: true,
      reorder: true,
    },
    {
      id: 4,
      name: "Views",
      selector: (row) => row.PostViews,
      sortable: true,
      right: true,
      reorder: true,
    },
    {
      id: 5,
      name: "Date",
      selector: (row) => moment(row.CreationDate).add(10, "days").calendar(),
      sortable: true,
      right: true,
      reorder: true,
    },
    {
      id: 6,
      name: "Action",
      selector: (row) => (
        <div>
          <Link to={`/dashboard/edit-post/${row.ID}`}>
            <i className="zmdi zmdi-edit btn btn-success radius-15"></i>
          </Link>
          <span>
            <i
              className="zmdi zmdi-delete btn btn-danger radius-15"
              onClick={() => deleteData(row.ID)}
            ></i>
          </span>
        </div>
      ),
      sortable: true,
      right: true,
      reorder: true,
    },
  ];

  const [search, setsearch] = useState("");
  const [items, setItems] = useState([]);

  const getSearchValue = (event) => {
    setsearch(event.target.value);
  };

  const getSearch = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}post/search/all?q=${search}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getSearch();
  }, [search]);

  return (
    <>
      {props.categoryloader ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="body">
                <div className="d-flex mb-4">
                  <div className="flex-grow-1">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        onChange={getSearchValue}
                        value={search}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="col-md-8">
                      <NavLink
                        to="/dashboard/create-post"
                        className="btn btn-success"
                      >
                        Add Post
                      </NavLink>
                    </div>
                  </div>
                </div>
                <DataTable
                  title="Posts"
                  columns={columns}
                  data={items}
                  defaultSortFieldId={items.ID}
                  sortIcon={<i className="zmdi zmdi-long-arrow-up"></i>}
                  pagination
                  highlightOnHover
                // selectableRows
                // selectableRowsHighlight
                // selectableRowsVisibleOnly
                // contextActions=<button className="btn btn-danger">DELETE</button>
                />
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
}

export default BlogPost;
