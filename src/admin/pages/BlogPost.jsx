import React, { useState } from 'react'
import { CKEditor } from 'ckeditor4-react';
import { convertToHtml } from "mammoth/mammoth.browser";
import apiEndPoint from '../../environment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogPost(props) {

    const term = props.term

    const [docContent, setDocContent] = useState(null);
    const [editorValue, setEditorValue] = useState(null);

    const [postStatus, setPostStatus] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const [uploadImage, setUploadImage] = useState(null)

    const [postData, setPostData] = useState({
        category: '',
        title: '',
        postSlug: '',
        image: '',
        thumburl: '',
        views: 0,
        metaTitle: '',
        metaKeyword: '',
        metaDescription: '',
        tag: ''
    })

    const getInputValue = (event) => {
        const { name, value } = event.target;

        setPostData((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const getImage = (e) => {
        setUploadImage(URL.createObjectURL(e.target.files[0]));
    }

    const getPostStatusValue = (e) => {
        setPostStatus(e.target.checked);
    }

    const postDeleted = (e) => {
        setDeleted(e.target.checked);
    }

    const fileuploaded = (inputElement) => {
        let files = inputElement.target.files || [];
        if (!files.length) return;
        var file = files[0];

        console.time();
        let reader = new FileReader();
        reader.onloadend = function (event) {
            let arrayBuffer = reader.result;
            convertToHtml({ arrayBuffer: arrayBuffer }).then(function (resultObject) {
                let result1 = document.querySelector('#result1')
                result1.innerHTML = resultObject.value
                setDocContent(resultObject.value)
            })
            console.timeEnd();
        };
        reader.readAsArrayBuffer(file);
    }

    const editorData = (event) => {
        setEditorValue(event.editor.getData())
    }

    const createPost = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "PostTitle": postData.title,
            "post_excerpt": '',
            "PostContent": editorValue,
            "PostSlug": `${convertToSlug(postData.category)}/${postData.postSlug}`.toLowerCase(),
            "PostThumb": uploadImage,
            "PostViews": postData.views,
            "PostThumbUrl": postData.thumburl,
            "PostStatus": postStatus ? 1 : 0,
            "MetaTitle": postData.metaTitle,
            "MetaKey": postData.metaKeyword,
            "MetaDesc": postData.metaDescription,
            "PostTags": postData.tag,
            "is_deleted": deleted ? 0 : 1,
            "Affiliate": ''
        });

        console.log("raw data", raw)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status === true) {
                    toast("Post Created Successfully")
                }
                if (result.status === 500) {
                    toast("Something went wrong! please try again after sometime")
                }
            })
            .catch(error => console.log('error', error));
    }

    function convertToSlug(Text) {
        return Text.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            .replaceAll('--', '-');
    }


    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <form onSubmit={createPost}>
                        {props.loading ? <div className="d-flex justify-content-center my-5">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div> :
                            <div className="card">
                                <div className="body">
                                    <div className="form-group">
                                        <select name="category" onChange={getInputValue} required className="form-control show-tick">
                                            <option selected disabled>Select Category --</option>
                                            {
                                                term.map((curValue) => {
                                                    return (
                                                        <option key={curValue.TermId} value={curValue.TermName}>{curValue.TermName}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <label>Post Title</label>
                                    <div className="form-group">
                                        <input type="text" name='title' onChange={getInputValue} className="form-control" placeholder="Enter Post Title" required />
                                    </div>

                                    <label>Post Slug</label>
                                    <div className="form-group">
                                        <input type="text" onChange={getInputValue} defaultValue={convertToSlug(postData.title)} name='postSlug' className="form-control" placeholder="Post Slug" />
                                    </div>

                                    <div id="frmFileUpload" className="dropzone m-b-20 m-t-20" encType="multipart/form-data">
                                        <div className="dz-message fileupload">
                                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                            <h3>Drop files here or click to upload.</h3>
                                        </div>
                                        <div className="fallback">
                                            <input name="file" accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className='inputfilecss' type="file" onChange={fileuploaded} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="card">
                            <div className="body">

                                <div style={{ margin: "10px 0px", padding: "20px", border: "1px solid #ddd", display: "none" }}>
                                    <h3>convertToHtml</h3>
                                    <div id="result1"></div>
                                </div>

                                {
                                    (`${docContent}` === 'null') ? '' : <CKEditor onChange={editorData} name="editor1" id="editor1" rows="15" cols="80" initData={`${docContent}`} required />
                                }

                                {
                                    (`${docContent}` !== 'null') ? '' : <CKEditor onChange={editorData} name="editor1" id="editor1" rows="15" cols="80" initData='CKEditor4' required />
                                }


                            </div>
                        </div>

                        <div className="card">
                            <div className="body">
                                <div id="frmImageUpload" className="dropzone m-b-20 m-t-20" encType="multipart/form-data">
                                    <div className="dz-message fileupload">
                                        <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                        <h3>Drop Image here or click to upload.</h3>
                                    </div>

                                    <div className="fallback">
                                        <input name="image" onChange={getImage} accept="image/*" className='inputfilecss' type="file" />
                                    </div>
                                </div>
                                {
                                    (uploadImage === null) ? '' :
                                        <div>
                                            <img src={uploadImage} style={{ height: "200px", marginBottom: "15px", border: "1px solid #000" }} alt='img' />
                                        </div>
                                }


                                <label>Post ThumbUrl</label>
                                <div className="form-group">
                                    <input type="text" onChange={getInputValue} name='thumburl' className="form-control" placeholder="Post ThumbUrl" />
                                </div>

                                <label>Views</label>
                                <div className="form-group">
                                    <input type="text" onChange={getInputValue} name='views' className="form-control" placeholder="Post Views" />
                                </div>

                                <label>Meta Title</label>
                                <div className="form-group">
                                    <input type="text" onChange={getInputValue} name='metaTitle' className="form-control" placeholder="Meta Title" />
                                </div>

                                <label>Meta keyword</label>
                                <div className="form-group">
                                    <input type="text" onChange={getInputValue} name='metaKeyword' className="form-control" placeholder="Meta keyword" />
                                </div>

                                <label>Meta Description</label>
                                <div className="form-group">
                                    <input type="text" onChange={getInputValue} name='metaDescription' className="form-control" placeholder="Meta Description" />
                                </div>

                                <label>Post Tag</label>
                                <div className="form-group">
                                    <input type="text" onChange={getInputValue} name='tag' className="form-control" placeholder="Tag" />
                                </div>

                                <div className="form-group">
                                    <input name='postSuccess' onChange={getPostStatusValue} type="checkbox" defaultChecked />
                                    <span>Post Status</span>
                                </div>


                                <div className="form-group">
                                    <input name='deleted' onChange={postDeleted} type="checkbox" />
                                    <span>Is Deleted</span>
                                </div>


                                <div>
                                    <button type="submit" className="btn btn-primary btn-round waves-effect m-t-20">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default BlogPost