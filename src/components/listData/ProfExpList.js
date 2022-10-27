import React from "react";

const ProfExpList = ({ profExp }) => {
  return (
    <div className="resume-item">
      <h4>{profExp.title}</h4>
      <h5>{profExp.date}</h5>
      <p>
        <em>{profExp.company}</em>
      </p>

      <ul>
        {profExp.works.map((data, index) => (
          <li key={index}>{data.list}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfExpList;
