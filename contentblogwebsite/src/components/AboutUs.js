import React from "react";
import snakeImg from "../Logo/snakeImg.jpg";
import dogImg from "../Logo/dogImg2.png";

function AboutUs() {
  return (
    <>
      <div className="row" style={{ border: "1px solid #52b788" }}>
        <div className="col-md-4">
          <img
            src={snakeImg}
            className="my-5 mx-5"
            style={{ width: "250px", height: "375px", borderRadius: "25px" }}
          ></img>
        </div>
        <div className="col-md-4">
          <div className="text-center mt-5">
            <h1 style={{ fontFamily: "sans-serif", color: "#52b788" }}>
              AboutUs
            </h1>
          </div>
          <div className="text-justify">
            <p style={{ fontFamily: "sans-serif", color: "#52b788" }}>
              Welcome to our Animal Planet blog, where the wonders of the animal
              kingdom come to life! Here, our passion for discovery fuels our
              journey to uncover the fascinating world of creatures big and
              small. From the dense rainforests to the vast oceans, we delve
              into the depths of nature's diversity to bring you captivating
              tales of animal species from around the globe. Our mission is to
              share their extraordinary stories, shed light on their unique
              habitats, and promote conservation efforts that ensure their
              survival. Join us on this exciting adventure as we explore the
              marvels of nature, one creature at a time. Together, let's
              celebrate the awe-inspiring beauty and incredible resilience of
              the animal kingdom.
            </p>
          </div>
        </div>
        <div className="col-md-4 text-end">
          <img
            src={dogImg}
            className="my-5 mx-5"
            style={{ width: "250px", borderRadius: "25px" }}
          ></img>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
