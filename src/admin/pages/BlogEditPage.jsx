import React, { useState, useEffect } from "react";
import apiEndPoint from "../../environment";
import { CKEditor } from "ckeditor4-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function BlogEditPage(props) {
  const editPage = props.pages;

  const [editorValue, setEditorValue] = useState(null);
  const [pageStatus, setPageStatus] = useState(true);

  const [title, settitle] = useState("");
  const [slug, setslug] = useState("");

  useEffect(() => {
    if (editPage) {
      settitle(editPage.PageTitle);
      setslug(editPage.PageSlug);
      setEditorValue(editPage.PageContent);
    }
  }, [editPage]);

  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const getTitleValue = (event) => {
    settitle(event.target.value);
    setslug(convertToSlug(title));
  };

  const editorData = (event) => {
    setEditorValue(event.editor.getData());
  };

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
      .replaceAll("--", "-");
  }

  const createAbout = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      PageTitle: title,
      PageContent: editorValue,
      PageSlug: `${convertToSlug(title)}`.toLowerCase(),
      PageStatus: pageStatus ? 1 : 0,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${apiEndPoint}update/page/${id}`, requestOptions)
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
            <form onSubmit={createAbout}>
              <div className="card">
                <div className="body">
                  <label>Page Title</label>
                  <div className="form-group">
                    <input
                      type="text"
                      name="pagetitle"
                      value={title}
                      onChange={getTitleValue}
                      className="form-control"
                      placeholder="Page Title"
                      required
                    />
                  </div>
                  <label>Page Slug</label>
                  <div className="form-group">
                    <input
                      type="text"
                      value={slug}
                      name="pageSlug"
                      className="form-control"
                      placeholder="Page Slug"
                    />
                  </div>

                  <label>Page Description</label>
                  <div className="form-group">
                    {`${editPage.PageContent}` === "undefined" ? (
                      ""
                    ) : (
                      <CKEditor
                        onChange={editorData}
                        name="editor1"
                        id="editor1"
                        rows="15"
                        cols="80"
                        initData={`${editPage.PageContent}`}
                        required
                      />
                    )}
                  </div>
                  {editPage.PageStatus === 1 ? (
                    <div className="form-group">
                      <input
                        name="postSuccess"
                        onChange={(event) =>
                          setPageStatus(event.target.checked)
                        }
                        type="checkbox"
                        defaultChecked
                      />
                      <span>Post Status</span>
                    </div>
                  ) : (
                    <div className="form-group">
                      <input
                        name="postSuccess"
                        onChange={(event) =>
                          setPageStatus(event.target.checked)
                        }
                        type="checkbox"
                      />
                      <span>Post Status</span>
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

export default BlogEditPage;
