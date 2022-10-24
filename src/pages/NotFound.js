import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  let ImgPath = process.env.PUBLIC_URL + "assets/img/PageNotFound.png";

  let navigate = useNavigate();

  function changeLink(location) {
    navigate(location, { replace: true });
    window.location.reload();
  }
  return (
    <center className="not-found">
      <h4 className="text-center text-danger">Oops!,</h4>
      <div className="container">
        <img src={ImgPath} className="img-fluid" alt="No image" width="600" />
      </div>
      <h5 className="text-danger">link is temporarily Not available</h5>
      <p></p>
      <Link to="/#portfolio" onClick={() => changeLink("/#portfolio")}>
        <i className="bi bi-arrow-left btn btn-outline-success">
          &nbsp;&nbsp;Return Back
        </i>
      </Link>
    </center>
  );
}

export default NotFound;
