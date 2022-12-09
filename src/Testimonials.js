import React from "react";
import "./testimonials.css";
import heroimage from "./assets/heroimage.jpeg";
import { Carousel } from "react-responsive-carousel";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ousseynou DIOP",
      fonction: "CEO and Founder at Xarala",
      text: "This guy is incredibly awesome, I Hired him and when he delivered",
      image: heroimage,
    },
    {
      name: "El Hadji Malick SECK",
      fonction: "Full Stack Software developer",
      text: "This guy is incredibly awesome, I Hired him and when he delivered",
      image: heroimage,
    },
    {
      name: "Sokhna Mariama DIOP",
      fonction: "Designer Graphique",
      text: "This guy is incredibly awesome, I Hired him and when he delivered",
      image: heroimage,
    },
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {testimonials.map((value) => (
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div className="card shadow testimonail-card d-flex flex-column">
                <div className="Box">
                  <img
                    className="img-test"
                    src={value.image}
                    alt={value.name}
                  />
                  <span className="name">{value.name}</span>
                  <span className="why-text-sub">{value.fonction}</span>
                  <span className="text">
                    <blockquote className="callout quote EN">
                      {value.text}
                    </blockquote>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
