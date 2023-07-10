import React, { useState, useEffect } from "react";
import SidebarMenu from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import * as usedata from "../redux/action";

function AddBlog() {
  const [formValues, setFormValues] = useState({
    _id: 0,
    Name: "",
    Description: "",
    Image: "",
    Paragraph: "",
  });
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [typingTimeout, setTypingTimeout] = useState(null);
  const divStyle = {
    // position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    // backgroundColor: `linear-gradient(to right, #38ef7d, #11998e)`, // Replace with your desired background color or styles
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormValues((prevFormValues) => ({
  //     ...prevFormValues,
  //     [name]: value,
  //     // _id: 0,
  //   }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => {
      const hasId = Object.prototype.hasOwnProperty.call(prevFormValues, "_id");
      return {
        ...prevFormValues,
        [name]: value,
        _id: hasId ? prevFormValues._id : 0,
      };
    });

    // Clear previous typing timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Start a new typing timeout
    setTypingTimeout(
      setTimeout(() => {
        // Make API call here
        if (formValues._id == 0) {
          dispatch(usedata.postBlogData(formValues));
        } else {
          dispatch(usedata.updateBlogData({ ...formValues }));
        }
        console.log("Making API call...");
      }, 10000)
    );
  };

  const dataresponse = useSelector((store) => store.appReducer);

  useEffect(() => {
    const { __v, ...updatedData } = dataresponse.postResponse;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ...updatedData,
    }));
  }, [dataresponse.postResponse]);

  console.log("dataresponse", dataresponse);

  useEffect(() => {
    // Clean up the typing timeout on unmount
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  console.log("formValues::>", formValues);

  return (
    <>
      <SidebarMenu />
      <div className="addblogbody" style={divStyle}>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3"></div>
            <div
              className="col-md-6 mt-5 px-5 py-5"
              style={{
                border: "1px solid black",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "white",
              }}
            >
              <div className="row">
                <div className="col-md-4 text-start">
                  <label className="mt-2">Name:</label>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    placeholder="Enter Animal's Name"
                    name="Name"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4 text-start">
                  <label className="mt-2">Short Description:</label>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    name="Description"
                    placeholder="Enter Description Of Animal"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4 text-start">
                  <label className="mt-2">Image:</label>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    name="Image"
                    placeholder="Enter Animal's Image Link"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4 text-start">
                  <label className="mt-2">Long Description:</label>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    name="Paragraph"
                    placeholder="Enter Long Description Of Animal"
                    onChange={(e) => handleChange(e)}
                  ></input>
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

export default AddBlog;
