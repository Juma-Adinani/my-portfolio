import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  let ImgPath = process.env.PUBLIC_URL + "assets/img/not-found.png";

  let navigate = useNavigate();

  function changeLink(location) {
    navigate(location, { replace: true });
    window.location.reload();
  }
  return (
    <center className="not-found">
      <img src={ImgPath} className="img-fluid" alt="No image" width="450" />
      <h5 className="text-danger">temporarily Not available</h5>
      <Link to="/#portfolio" onClick={() => changeLink("/#portfolio")}>
        <i className="bi bi-arrow-left btn btn-outline-success">
          &nbsp;&nbsp;Return Back
        </i>
      </Link>
    </center>
  );
}

export default NotFound;
