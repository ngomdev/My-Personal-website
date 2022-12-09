import React from "react";
import "./programming.css";

const Programming = () => {
  const value = [
    {
      text: "JavaScript",
      pourcentage: 85,
    },
    {
      text: "Node JS",
      pourcentage: 80,
    },
    {
      text: "TypeScript",
      pourcentage: 75,
    },
    {
      text: "Express JS",
      pourcentage: 80,
    },
    {
      text: "React JS",
      pourcentage: 85,
    },
    {
      text: "Python/Django",
      pourcentage: 50,
    },
    {
      text: "Next JS",
      pourcentage: 75,
    },
    {
      text: "MongoDB/Mysql",
      pourcentage: 80,
    },
    {
      text: "HTML/ CSS",
      pourcentage: 90,
    },
    {
      text: "React Native",
      pourcentage: 65,
    },
  ];
  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                  <span className="langage">{value.text}</span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${value.pourcentage}%` }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Programming;
