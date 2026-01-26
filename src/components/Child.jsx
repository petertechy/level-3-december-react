import React from "react";

const Child = ({ title, subtitle, image }) => {
//   console.log(title);
  return (
    <div className="text-center">
      <div className="card" style={{ width: "16rem" }}>
        <img width={255} src={image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subtitle}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Child;
