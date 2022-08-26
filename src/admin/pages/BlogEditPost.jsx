import React, { useState, useEffect } from "react";
import { CKEditor } from "ckeditor4-react";
import { convertToHtml } from "mammoth/mammoth.browser";
import apiEndPoint from "../../environment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function BlogEditPost(props) {
  const posts = props.posts;
  const categoryByID = props.category[posts.CatId];

  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const [categoryValue, setcategoryValue] = useState("");

  const [docContent, setDocContent] = useState(null);
  const [editorValue, setEditorValue] = useState(null);

  const [postStatus, setPostStatus] = useState(true);

  const [uploadImage, setUploadImage] = useState(null);
  const [fileInfo, setFileInfo] = useState(null)
  const [slug, setslug] = useState("");

  const [postData, setPostData] = useState({
    title: "",
    thumburl: "",
    postthumb: '',
    views: 0,
    metaTitle: "",
    metaKeyword: "",
    metaDescription: "",
    tag: "",
  });

  useEffect(() => {
    if (posts) {
      setslug(posts.PostSlug);
      setEditorValue(posts.PostContent);
      setPostData({
        title: posts.PostTitle,
        thumburl: posts.PostThumbUrl,
        postthumb: posts.PostThumb,
        views: posts.PostViews,
        metaTitle: posts.MetaTitle,
        metaKeyword: posts.MetaKey,
        metaDescription: posts.MetaDesc,
        tag: posts.PostTags,
      });
    }
  }, [posts]);

  useEffect(() => {
    if (categoryByID) {
      setcategoryValue(categoryByID.termID);
    }
  }, [categoryByID]);

  const getInputValue = (event) => {
    const { name, value } = event.target;

    setslug(convertToSlug(postData.title));

    setPostData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const getImage = (e) => {
    setUploadImage(URL.createObjectURL(e.target.files[0]));
    setFileInfo(e.target.files[0]); 
  };

  const fileuploaded = (inputElement) => {
    let files = inputElement.target.files || [];
    if (!files.length) return;
    var file = files[0];

    // console.time();
    let reader = new FileReader();
    reader.onloadend = function (event) {
      let arrayBuffer = reader.result;
      convertToHtml({ arrayBuffer: arrayBuffer }).then(function (resultObject) {
        let result1 = document.querySelector("#result1");
        result1.innerHTML = resultObject.value;
        setDocContent(resultObject.value);
      });
      // console.timeEnd();
    };
    reader.readAsArrayBuffer(file);
  };

  const editorData = (event) => {
    setEditorValue(event.editor.getData());
  };

  const categoryName = props.category[categoryValue]

  const updatePost = (e) => {
    e.preventDefault();

    var formdata = new FormData();
        
    formdata.append("PostTitle", postData.title);
    formdata.append("PostContent", editorValue);
    formdata.append("PostSlug", `${convertToSlug(categoryName.termName)}/${convertToSlug(postData.title)}`.toLowerCase());
    formdata.append("PostThumbUrl", postData.thumburl)
    formdata.append("PostStatus", (postStatus === true) ? 1 : 0);
    formdata.append("MetaTitle", postData.metaTitle)
    formdata.append("MetaKey", postData.metaKeyword)
    formdata.append("MetaDesc", postData.metaDescription)
    formdata.append("PostTags", postData.tag);
    formdata.append("Affiliate", 1);
    formdata.append("PostViews", postData.views);
    formdata.append("CatId", categoryValue);
    formdata.append("SubCatId", 0);
    formdata.append("post_excerpt", '') 
    formdata.append("PostId", id)

    formdata.append("PostThumb", fileInfo);

    var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
    };

    fetch(`${apiEndPoint}update/post/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        toast(result.message);
      })
      .catch((error) => console.log("error", error));
  };

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
  }


  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <form onSubmit={updatePost}>
            {props.cateloader ? (
              <div className="d-flex justify-content-center my-5">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="body">
                  {categoryValue !== "undefined" || categoryValue !== "null" ? (
                    <div className="form-group">
                      <select
                        value={categoryValue}
                        name="category"
                        onChange={(event) =>
                          setcategoryValue(event.target.value)
                        }
                        required
                        className="form-control show-tick"
                      >
                        {props.term.map((curValue) => {
                          {
                            /* {curValue.TermId === categoryValue ? selected=true : ''} */
                          }
                          return (
                            <option
                              key={curValue.TermId}
                              value={curValue.TermId}
                            >
                              {curValue.TermName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    <h1>nothing</h1>
                  )}

                  <label>Post Title</label>
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      value={postData.title}
                      onChange={getInputValue}
                      className="form-control"
                      placeholder="Enter Post Title"
                      required
                    />
                  </div>

                  <label>Post Slug</label>
                  <div className="form-group">
                    <input
                      type="text"
                      value={slug}
                      onChange={getInputValue}
                      name="postSlug"
                      className="form-control"
                      placeholder="Post Slug"
                    />
                  </div>

                  <div
                    id="frmFileUpload"
                    className="dropzone m-b-20 m-t-20"
                    encType="multipart/form-data"
                  >
                    <div className="dz-message fileupload">
                      <div className="drag-icon-cph">
                        <i className="material-icons">touch_app</i>
                      </div>
                      <h3>Drop files here or click to upload.</h3>
                    </div>
                    <div className="fallback">
                      <input
                        name="file"
                        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="inputfilecss"
                        type="file"
                        onChange={fileuploaded}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="card">
              <div className="body">
                <div
                  style={{
                    margin: "10px 0px",
                    padding: "20px",
                    border: "1px solid #ddd",
                    display: "none",
                  }}
                >
                  <h3>convertToHtml</h3>
                  <div id="result1"></div>
                </div>

                {`${editorValue}` === "undefined" ||
                  `${editorValue}` === "null" ||
                  `${docContent}` === "null" ? (
                  ""
                ) : (
                  <CKEditor
                    onChange={editorData}
                    name="editor1"
                    id="editor1"
                    rows="15"
                    cols="80"
                    initData={`${docContent}`}
                    required
                  />
                )}

                {`${editorValue}` === "undefined" ||
                  `${editorValue}` === "null" ||
                  `${docContent}` !== "null" ? (
                  ""
                ) : (
                  <CKEditor
                    onChange={editorData}
                    name="editor1"
                    id="editor1"
                    rows="15"
                    cols="80"
                    initData={`${editorValue}`}
                    required
                  />
                )}
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
                  <div>
                    {
                      (`${postData.thumburl}` !== 'null') ?
                        <img src={postData.thumburl} style={{
                          height: "200px",
                          marginBottom: "15px",
                          border: "1px solid #000",
                        }}
                          alt="img" />
                        :
                        <img src={postData.postthumb} style={{
                          height: "200px",
                          marginBottom: "15px",
                          border: "1px solid #000",
                        }}
                          alt="img" />

                    }
                  </div>
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

                <label>Post ThumbUrl</label>
                <div className="form-group">
                  <input
                    type="text"
                    value={postData.thumburl}
                    onChange={getInputValue}
                    name="thumburl"
                    className="form-control"
                    placeholder="Post ThumbUrl"
                  />
                </div>

                <label>Views</label>
                <div className="form-group">
                  <input
                    type="text"
                    value={postData.views}
                    onChange={getInputValue}
                    name="views"
                    className="form-control"
                    placeholder="Post Views"
                  />
                </div>

                <label>Meta Title</label>
                <div className="form-group">
                  <input
                    type="text"
                    value={postData.metaTitle}
                    onChange={getInputValue}
                    name="metaTitle"
                    className="form-control"
                    placeholder="Meta Title"
                  />
                </div>

                <label>Meta keyword</label>
                <div className="form-group">
                  <input
                    type="text"
                    value={postData.metaKeyword}
                    onChange={getInputValue}
                    name="metaKeyword"
                    className="form-control"
                    placeholder="Meta keyword"
                  />
                </div>

                <label>Meta Description</label>
                <div className="form-group">
                  <input
                    type="text"
                    value={postData.metaDescription}
                    onChange={getInputValue}
                    name="metaDescription"
                    className="form-control"
                    placeholder="Meta Description"
                  />
                </div>

                <label>Post Tag</label>
                <div className="form-group">
                  <input
                    type="text"
                    value={postData.tag}
                    onChange={getInputValue}
                    name="tag"
                    className="form-control"
                    placeholder="Tag"
                  />
                </div>
                {posts.PostStatus === "1" ? (
                  <div className="form-group">
                    <input
                      name="postSuccess"
                      onChange={(event) => setPostStatus(event.target.checked)}
                      type="checkbox"
                      defaultChecked
                      value={posts.PostStatus}
                    />
                    <span>Post Status</span>
                  </div>
                ) : (
                  <div className="form-group">
                    <input
                      name="postSuccess"
                      onChange={(event) => setPostStatus(event.target.checked)}
                      type="checkbox"
                      value={posts.PostStatus}
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
    </>
  );
}

export default BlogEditPost;
