import React, { useEffect, useState } from "react";
import SidebarMenu from "./Sidebar";
import bgimage from "../Wallpapers/SideImg.png";
import LatestBlog from "./LatestBlog";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <SidebarMenu />
      <div className="row backgroundpic">
        <div
          className="col-md-6"
          style={{
            backgroundImage: `url(${bgimage})`,
            paddingBottom: "50%",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="col-md-6 d-flex align-items-center"
          style={{ backgroundColor: "#52b788" }}
        >
          <div className="container text-center">
            <div>
              <h1
                style={{
                  fontFamily: "sans-serif",
                  color: "white",
                  marginTop: "1rem",
                }}
              >
                Animal Planet
              </h1>
            </div>
            <div>
              <h5
                style={{
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                Discovering Animals
              </h5>
            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div
                className="col-md-2"
                style={{ borderBottom: "1px solid black" }}
              ></div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <LatestBlog />
      <Footer />
    </>
  );
}

export default Home;
