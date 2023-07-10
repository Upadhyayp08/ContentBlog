import React, { useEffect, useState } from "react";
import { Blogdata } from "../BlogData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as usedata from "../redux/action";

function LatestBlog() {
  const [blogData, setBlogData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(usedata.getAllBlogData());
  }, []);

  const data = useSelector((store) => store.appReducer);

  // useEffect(() => {
  //   setFormValues(data.postResponse);
  // const { __v, ...updatedData } = data;
  // setFormValues(updatedData);
  // }, []);

  useEffect(() => {
    setBlogData(data.payload);
  }, [data]);

  console.log("data::>>", data);

  return (
    <>
      <div id="latestblog" style={{ backgroundColor: "#b7e4c7" }}>
        <div className="container">
          <div
            className=" row"
            style={{ fontFamily: "sans-serif", color: "white" }}
          >
            <div className="col-md-8 text-end">
              <h1 className="pt-5" style={{ marginRight: "100px" }}>
                Latest Blogs
              </h1>
            </div>
            <div className="col-md-4 mt-5 pt-2 text-end">
              <a href="#" style={{ border: "none" }}>
                <button
                  className="btn btn-primary"
                  style={{
                    color: "black",
                    border: "1px solid #b7e4c7",
                    backgroundColor: "white",
                  }}
                >
                  See More
                </button>
              </a>
            </div>
          </div>

          <div className="card-container text-center d-flex flex-wrap">
            {blogData?.slice(0, 4)?.map((item, index) => (
              <div
                className="card mx-auto my-auto mt-5 mb-5"
                style={{ width: "300px" }}
                key={index}
              >
                <img src={item.Image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.Name}</h5>
                  <p className="card-text">{item.Description}</p>
                  <a
                    href="#"
                    className="btn"
                    style={{
                      color: "black",
                      // border: "1px solid black",
                      backgroundColor: "#b7e4c7",
                    }}
                  >
                    See More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestBlog;
