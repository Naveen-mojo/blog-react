import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import apiEndPoint from '../environment';
// import site from '../Sitemap.xml'

function Sitemap() {
    // console.log("xml", site)
    const [postUrl, setPostUrl] = useState([])
    const [categoryUrl, setCategoryUrl] = useState([])

    const category = 'category';

    const getPostUrl = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${apiEndPoint}xmlmap`, requestOptions)
            .then(response => response.text())
            .then(result => {
                setPostUrl(result)
            })
            .catch(error => {
                console.log('error', error)
            });

    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "Sitemap.xml", true);
    xhttp.send();

    function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        var x = xmlDoc.getElementsByTagName("urlset")[0].innerHTML = postUrl;
        console.log("print xml doc", xmlDoc)

    }

    const getCategoryUrl = (postUrl) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            "Content-Type": "application/xml; charset=utf-8"
        };

        fetch(`${apiEndPoint}sitemapterm`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log("result of text", result)
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    const d = new Date();
    let dateTime = d.toISOString();

    // console.log(postUrl)

    useEffect(() => {
        getPostUrl();
        // getCategoryUrl();
    }, [])

    const originUrl = window.location.hostname

    // const data =
    // postUrl.map((curValue) => {
    //         return (<url>
    //             <loc>{curValue.PostSlug}</loc>
    //             <lastmod>{dateTime}</lastmod>
    //             <changefreq>monthly</changefreq>
    //             <priority>0.64</priority>
    //         </url>)
    //     })
    // console.log("data", data)

    return (
        <>

        </>
    )
}

export default Sitemap