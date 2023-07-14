import React, { useEffect, useState } from "react";
import { Blogdata } from "../BlogData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as usedata from "../redux/action";
import Carousel from "react-bootstrap/Carousel";

function LatestBlog() {
  const [blogData, setBlogData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(usedata.getAllBlogData());
  }, []);

  const data = useSelector((store) => store.appReducer);

  useEffect(() => {
    setBlogData(data.payload);
  }, [data]);

  return (
    <>
      <div id="latestblog" style={{ backgroundColor: "#b7e4c7" }}>
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ fontFamily: "sans-serif", color: "white" }}
          >
            <div className="col-md-8 text-center">
              <h1 className="pt-4">Blogs</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <Carousel>
                {blogData?.map((item, index) => (
                  <Carousel.Item key={index}>
                    <div
                      className="card mx-auto my-auto mt-4 mb-5"
                      style={{ width: "180px", height: "300px" }}
                    >
                      <img
                        src={item.Image}
                        className="card-img-top"
                        alt="..."
                        style={{ height: "130px", backgroundSize: "cover" }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.Name}</h5>
                        <p className="card-text">{item.Description}</p>
                        <a
                          href="#"
                          className="btn"
                          onClick={() => navigate(`/watchblog/${item._id}`)}
                          style={{
                            color: "black",
                            backgroundColor: "#b7e4c7",
                          }}
                        >
                          See More
                        </a>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestBlog;
