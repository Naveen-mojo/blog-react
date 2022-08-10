import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { Link, NavLink } from "react-router-dom";
import apiEndPoint from "../../environment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BlogAllPages(props) {
  const deleteData = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`${apiEndPoint}/pages/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.success === true) {
          toast("Page deleted successully!");
        }
        if (result.success === 500) {
          toast("Something went wrong! please try again after sometime");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const columns = [
    {
      id: 1,
      name: "Page Title",
      selector: (row) => row.PageTitle,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: "Page Slug",
      selector: (row) => row.PageSlug,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: "Page Status",
      selector: (row) => row.PageStatus,
      sortable: true,
      reorder: true,
    },
    {
      id: 4,
      name: "Page Creation Date",
      selector: (row) => moment(row.CreationDate).add(10, "days").calendar(),
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: "Action",
      selector: (row) => (
        <div>
          <Link to={`/dashboard/edit-page/${row.ID}`}>
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

    fetch(`${apiEndPoint}search/pages?q=${search}`, requestOptions)
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
                      to="/dashboard/create-page"
                      className="btn btn-success"
                    >
                      Add Pages
                    </NavLink>
                  </div>
                </div>
              </div>
              <DataTable
                title="Pages"
                columns={columns}
                data={items}
                defaultSortFieldId={1}
                sortIcon={<i className="zmdi zmdi-long-arrow-up"></i>}
                pagination
                selectableRows
                selectableRowsHighlight
                selectableRowsVisibleOnly
              />
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default BlogAllPages;
