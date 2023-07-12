import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as usedata from "../redux/action";
import SidebarMenu from "./Sidebar";

function WatchBlog() {
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    dispatch(usedata.getSingleBlogData(id));
  }, []);

  const dataresponse = useSelector((store) => store.appReducer);
  useEffect(() => {
    setBlogData(dataresponse.singleData);
  }, [dataresponse.singleData]);
  console.log("dataresponse", dataresponse, id);
  const divStyle = {
    // position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "94vh",
    // backgroundColor: "green",
  };
  return (
    <>
      <SidebarMenu />
      <div style={divStyle}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <div
                class="card"
                style={{
                  width: "28rem",
                  backgroundColor: "#b7e4c7",
                  marginTop: "60px",
                }}
              >
                <img src={blogData.Image} class="card-img-top" alt="..." />
                <div class="card-body">
                  {/* <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p> */}
                  <div className="row">
                    <div className="col-md-auto">
                      <div>
                        <label>
                          <b>Name:</b>
                          {blogData.Name}
                        </label>
                      </div>
                      {/* <div>
                        <label>Description:{blogData.Description}</label>
                      </div> */}
                    </div>
                    <div className="col-md-auto">
                      <label>
                        <b>Description:</b>
                        {blogData.Description}
                      </label>
                      {/* <div>{blogData.Paragraph}</div> */}
                    </div>
                  </div>
                  <div className="mt-4">
                    <b>About:-</b>
                  </div>
                  <div className="text-justify">{blogData.Paragraph}</div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchBlog;
