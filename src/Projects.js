import React from "react";

const Projects = () => {
  return (
    <div className="d-flex flex-column">
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">Personal Porfolio Website</span>
          <span className="university-degree">using React and Bootstrap</span>
        </div>
        <div className="">
          <a href="">
            <span className="year-passedout">View</span>
          </a>
        </div>
      </div>
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">Mobile E-shop</span>
          <span className="university-degree">
            React Native, Expo , Firebase
          </span>
        </div>
        <div className="">
          <a href="">
            <span className="year-passedout">View</span>
          </a>
        </div>
      </div>
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name">E-commerce application</span>
          <span className="university-degree">
            using MERN stack and Redux for state management
          </span>
        </div>
        <div className="">
          <a href="https://github.com/ngomdev?tab=repositories">
            <span className="year-passedout">View</span>
          </a>
        </div>
      </div>
      <div className="education-one my-4 justify-content-between d-flex flex-row">
        <div className="d-flex flex-column new-one">
          <span className="university-name"> Pizza Mamma</span>
          <span className="university-degree">Python, Django and Heroku</span>
        </div>
        <div className="">
          <a href="#">
            <span className="year-passedout">View</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
