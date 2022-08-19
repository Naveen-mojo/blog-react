import React from "react";
import img from '../img/page-not-found-error-404.jpg'

function PageNotFound() {
  return <>
    <div>
        <img src={img} alt="page not found image" className="w-100 h-100" />
    </div>
  </>;
}

export default PageNotFound;
