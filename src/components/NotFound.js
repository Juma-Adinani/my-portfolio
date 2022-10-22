import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();

  function changeLink(location) {
    navigate(location, { replace: true });
    window.location.reload();
  }
  return (
    <center className="not-found">
      <h5 className="text-danger">Oops!, link is temporarily Not available</h5>
      <p></p>
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
