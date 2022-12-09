import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div className="d-flex flex-column">
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">Xarala Academy</span>
          <span className="university-degree">
            Certification in full-stack JavaScript development
          </span>
        </div>
        <div className="">
          <span className="year-passedout">2021-2022</span>
        </div>
      </div>
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">
            Higher institute of informatics (ISI)
          </span>
          <span className="university-degree">
            Higher technician Certificate in software engineering
          </span>
        </div>
        <div className="">
          <span className="year-passedout">2017-2019</span>
        </div>
      </div>
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">
            Higher institute of informatics (ISI)
          </span>
          <span className="university-degree">
            Higher technician certificate in network
          </span>
        </div>
        <div className="">
          <span className="year-passedout">2017-2019</span>
        </div>
      </div>
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">
            {" "}
            Higher institute of informatics (ISI)
          </span>
          <span className="university-degree">
            Higher Technician Certificate in Software Engineering
          </span>
        </div>
        <div className="">
          <span className="year-passedout">2017-2019</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
