import React from "react";

const CountList = ({ count }) => {
  return (
    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
      <div class="count-box">
        <i class={count.icon}></i>
        <span
          data-purecounter-start="0"
          data-purecounter-end={count.count}
          data-purecounter-duration="1"
          class="purecounter"
        ></span>
        <p>{count.name}</p>
      </div>
    </div>
  );
};

export default CountList;
