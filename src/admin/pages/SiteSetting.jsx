import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiEndPoint from '../../environment';
import { CKEditor } from 'ckeditor4-react';


function SiteSetting() {

    const [editor, seteditor] = useState(null)

    const [state, setstate] = useState({
        sitetitle: '',
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
        seteditor(event.editor.getDate())
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <form>
                        <div className='card'>
                            <div className='body'>
                                <label>Site Title</label>
                                <div className="form-group">
                                    <input type="text" name='sitetitle' onChange={getInputValue} className="form-control" placeholder="Site Title" required />
                                </div>
                                <label>Fotter About</label>
                                <div className="form-group">
                                    <CKEditor onChange={editorData} name="editor1" id="editor1" rows="15" cols="80" initData='CKEditor4' required />
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

export default SiteSetting