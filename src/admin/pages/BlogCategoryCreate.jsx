import React, { useState } from 'react';
import apiEndPoint from '../../environment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogCategoryCreate() {

    const [uploadImage, setUploadImage] = useState(null)
    const [status, setStatus] = useState(true)

    const [categoryValue, setCategoryValue] = useState({
        categoryName: '',
        categoryslug: '',
        rssfeedurl: ''
    })

    const getValue = (event) => {
        const { name, value } = event.target

        setCategoryValue((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const getImage = (e) => {
        setUploadImage(URL.createObjectURL(e.target.files[0]));
    }

    function convertToSlug(Text) {
        return Text.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            .replaceAll('--', '-');
    }

    const createPost = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "TermName": categoryValue.categoryName,
            "TermSlug": categoryValue.categoryslug,
            "TermImage": uploadImage,
            "RssFeedUrl": categoryValue.rssfeedurl,
            "TermStatus": status ? 1 : 0
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}/term`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === true) {
                    toast("Term Created Successfully")
                }
                if (result.status === 500) {
                    toast("Something went wrong! please try again after sometime")
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <form onSubmit={createPost}>
                        <div className='card'>
                            <div className='body'>
                                <label>Category Name</label>
                                <div className="form-group">
                                    <input type="text" name='categoryName' onChange={getValue} className="form-control" placeholder="Enter Category Name" required />
                                </div>
                                <label>Category Slug</label>
                                <div className="form-group">
                                    <input type="text" name='categoryslug' onChange={getValue} defaultValue={convertToSlug(categoryValue.categoryName)} className="form-control" placeholder="Enter Category Slug" required />
                                </div>
                                <label>RSS FeedURL</label>
                                <div className="form-group">
                                    <input type="text" name='rssfeedurl' onChange={getValue} className="form-control" placeholder="Enter RSS FeedURL" required />
                                </div>
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
                                <div className="form-group">
                                    <input onChange={(e) => { setStatus(e.target.checked) }} defaultChecked name='status' type="checkbox" />
                                    <span>Category Status</span>
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

export default BlogCategoryCreate