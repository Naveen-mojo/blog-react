import React from 'react';
import apiEndPoint from '../environment';
import fileDownload from 'js-file-download';


function Createsitemap() {

    const createSitemap = ((e) => {
        e.preventDefault()
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}createxml`, requestOptions)
            .then(response => response.text())
            .then(result => {
                fileDownload(result, `sitemap.xml`)
            })
            .catch(error => console.log('error', error));
    })

    return (
        <>
            <div className='my-5' style={{textAlign:"center"}}>
            <button className='btn btn-success' onClick={createSitemap}>Download</button>
        </div>
        </>
    )
}

export default Createsitemap;