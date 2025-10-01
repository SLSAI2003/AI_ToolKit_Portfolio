import React from "react";

const Tool_card = ({ title, tag, description, features, footertext, link }) => {
  return (
    <div className="border tool-card rounded-5 mx-0">
      <div className="row py-4 Inter d-flex align-items-center px-5 mt-3 ">
        <div className="col-6 fs-3 mx-0"> {title} </div>
        <div className="col-6 text-end mx-0">
          <span className="border Montserrat rounded-5 text-dark px-2 py-1 bg-light">
            {tag}
          </span>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col py-1 px-5 fs-6 Inter text-left mx-0">{description}</div>
      </div>
      <div className="row py-3 mx-0 text-left">
        <div className="col px-3 d-flex text-left text-secondary mx-0">
          <ul className="ms-3 mx-0">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row d-flex align-items-center mt-auto mb-3 mx-0">
        <div className="col px-5 mx-0"> {footertext} </div>
        <div className="col text-end px-5 mx-0">
          <a href={link} className="btn border text-dark bg-light" target="_blank">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tool_card;
