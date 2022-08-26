import React, { useState } from 'react'
import { CKEditor } from 'ckeditor4-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiEndPoint from '../../environment';

function BlogAddPage() {

    const [editorValue, setEditorValue] = useState(null)
    const [pageStatus, setPageStatus] = useState(true)

    const [state, setstate] = useState({
        pagetitle: '',
        postSlug: ''
    })

    const getInputValue = (event) => {
        const { name, value } = event.target

        setstate((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const editorData = (event) => {
        setEditorValue(event.editor.getData())
    }

    function convertToSlug(Text) {
        return Text.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
            .replaceAll('--', '-');
    }

    const createAbout = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "PageTitle": state.pagetitle,
            "PageContent": editorValue,
            "PageSlug": `${convertToSlug(state.pagetitle)}`.toLowerCase(),
            "PageStatus": pageStatus ? 1 : 0,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}create/page`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === 201) {
                    toast("Page Created Successfully")
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
                    <form onSubmit={createAbout}>
                        <div className='card'>
                            <div className='body'>
                                <label>Page Title</label>
                                <div className="form-group">
                                    <input type="text" name='pagetitle' onChange={getInputValue} className="form-control" placeholder="Page Title" required />
                                </div>
                                <label>Post Slug</label>
                                <div className="form-group">
                                    <input type="text" onChange={getInputValue} defaultValue={convertToSlug(state.pagetitle)} name='postSlug' className="form-control" placeholder="Post Slug" />
                                </div>
                                {/* <label>Page Url</label>
                                <div className="form-group">
                                    <input type="text" name='pageurl' onChange={getInputValue} className="form-control" placeholder="Page Url" required />
                                </div> */}

                                <label>Page Description</label>
                                <div className="form-group">
                                    <CKEditor onChange={editorData} name="editor1" id="editor1" rows="15" cols="80" initData='CKEditor4' required />
                                </div>
                                <div className="form-group">
                                    <input name='postSuccess' onChange={(event) => setPageStatus(event.target.checked)} type="checkbox" defaultChecked />
                                    <span>Post Status</span>
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

export default BlogAddPage