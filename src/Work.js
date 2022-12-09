import React from "react";
import logo from "./assets/logo.png";
import "./work.css";
const Work = () => {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">
              Xarala
              <img
                src={logo}
                alt={logo}
                style={{ width: "60px", marginLeft: "50px" }}
              />
            </span>
            <span className="year-passedout"> 2022-present</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <span className="position">Full Stack Developer</span>
          <span className="description-position">
            <ul>
              <li>Analyze customer needs with UML</li>
              <li>Design and prototype features (Figma, AdobeXd ..)</li>
              <li>
                Integrate user interfaces (Nextjs, React , TypeScript,
                MaterialUI..)
              </li>
              <li>
                Design Sql and NoSql databases (MongoDB, PostgreSql, MySql..)
              </li>
              <li>
                create web and mobile applications from A to Z (M.E.R.N stack,
                Python , Django, React Native ..)
              </li>
              <li>Drive feature development</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

export default Work;
