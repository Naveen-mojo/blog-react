import React, { useEffect, useState } from "react";
import apiEndPoint from "../../environment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function BlogEditCategory(props) {
  const category = props.category;

  const [uploadImage, setUploadImage] = useState(null);
  const [status, setStatus] = useState(true);
  const [slug, setslug] = useState("");
  const [fileInfo, setFileInfo] = useState(null)

  const [categoryValue, setCategoryValue] = useState({
    categoryName: "",
    rssfeedurl: "",
    categoryImage: "",
  });

  useEffect(() => {
    if (category) {
      setslug(category.TermSlug);
      setUploadImage(category.TermImage)
      setCategoryValue({
        categoryName: category.TermName,
        rssfeedurl: category.RssFeedUrl,
        categoryImage: category.TermImage,
      });
    }
  }, [category]);

  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const getValue = (event) => {
    const { name, value } = event.target;

    setslug(convertToSlug(categoryValue.categoryName));

    setCategoryValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const getImage = (e) => {
    setUploadImage(URL.createObjectURL(e.target.files[0]));
    setFileInfo(e.target.files[0]);
  };

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .replaceAll("--", "-");
  }

  const createPost = (e) => {
    e.preventDefault();

    var formdata = new FormData();

    formdata.append("TermName", categoryValue.categoryName);
    formdata.append("TermSlug", `${convertToSlug(categoryValue.categoryName)}`.toLowerCase());
    formdata.append("TermImage", fileInfo);
    formdata.append("RssFeedUrl", categoryValue.rssfeedurl);
    formdata.append("TermStatus", status ? 1 : 0);

    var requestOptions = {
      method: 'PUT',
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${apiEndPoint}update/term/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        toast(result.message);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {props.loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={createPost}>
              <div className="card">
                <div className="body">
                  <label>Category Name</label>
                  <div className="form-group">
                    <input
                      type="text"
                      name="categoryName"
                      onChange={getValue}
                      value={categoryValue.categoryName}
                      className="form-control"
                      placeholder="Enter Category Name"
                      required
                    />
                  </div>
                  <label>Category Slug</label>
                  <div className="form-group">
                    <input
                      type="text"
                      name="categoryslug"
                      onChange={getValue}
                      value={slug}
                      // defaultValue={convertToSlug(categoryValue.categoryName)}
                      className="form-control"
                      placeholder="Enter Category Slug"
                      required
                    />
                  </div>
                  <label>RSS FeedURL</label>
                  <div className="form-group">
                    <input
                      type="text"
                      name="rssfeedurl"
                      onChange={getValue}
                      value={categoryValue.rssfeedurl}
                      className="form-control"
                      placeholder="Enter RSS FeedURL"
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="body">
                  <div
                    id="frmImageUpload"
                    className="dropzone m-b-20 m-t-20"
                    encType="multipart/form-data"
                  >
                    <div className="dz-message fileupload">
                      <div className="drag-icon-cph">
                        <i className="material-icons">touch_app</i>
                      </div>
                      <h3>Drop Image here or click to upload.</h3>
                    </div>

                    <div className="fallback">
                      <input
                        name="image"
                        onChange={getImage}
                        accept="image/*"
                        className="inputfilecss"
                        type="file"
                      />
                    </div>
                  </div>
                  {uploadImage === null ? (
                    <img
                      src={categoryValue.categoryImage}
                      style={{
                        height: "200px",
                        marginBottom: "15px",
                        border: "1px solid #000",
                      }}
                      alt="img"
                    />
                  ) : (
                    <div>
                      <img
                        src={uploadImage}
                        style={{
                          height: "200px",
                          marginBottom: "15px",
                          border: "1px solid #000",
                        }}
                        alt="img"
                      />
                    </div>
                  )}
                  {category.TermStatus === "1" ? (
                    <div className="form-group">
                      <input
                        name="postSuccess"
                        onChange={(event) => setStatus(event.target.checked)}
                        type="checkbox"
                        defaultChecked
                      />
                      <span>Category Status</span>
                    </div>
                  ) : (
                    <div className="form-group">
                      <input
                        name="postSuccess"
                        onChange={(event) => setStatus(event.target.checked)}
                        type="checkbox"
                      />
                      <span>Category Status</span>
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-round waves-effect m-t-20"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
}

export default BlogEditCategory;
