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
  const [data, setData] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const divStyle = {
    // position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "50vh",
    // backgroundColor: `linear-gradient(to right, #38ef7d, #11998e)`, // Replace with your desired background color or styles
  };

  // handleChange for the autosave API to be called
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
          dispatch(usedata.updateBlogData(formValues));
        }
        console.log("Making API call...");
      }, 10000)
    );
  };

  // From redux Store we have to get the data we can get the data by using dataresponse
  const dataresponse = useSelector((store) => store.appReducer);

  useEffect(() => {
    dispatch(usedata.getAllBlogData());
    setData(dataresponse?.payload);
  }, []);

  // Created a useEffect so that it remove unnecessary key from the response
  useEffect(() => {
    const { __v, ...updatedData } = dataresponse.postResponse;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ...updatedData,
    }));
  }, [dataresponse.postResponse]);
  console.log("dataresponse", dataresponse);

  // Clean up the typing timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  const handleDelete = (_id) => {
    const filteredData = data.filter((item) => item._id != _id);
    setData(filteredData);
    dispatch(usedata.deleteBlogData(_id));
  };

  const handleEdit = (item) => {
    // const filteredData = data.filter((item) => item._id != _id);
    // setData(filteredData);
    // dispatch(usedata.deleteBlogData(_id));
    setFormValues(item);
  };

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
                    value={formValues.Name}
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
                    value={formValues.Description}
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
                    value={formValues.Image}
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
                    value={formValues.Paragraph}
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
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col" className="ps-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.Name}</td>
                    <td>{item.Description}</td>
                    <td>
                      <img
                        // className="form-cont"
                        style={{ height: "60px", width: "60px" }}
                        src={item.Image}
                      />
                    </td>
                    <td>
                      <button style={{ border: "none" }} className="btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          onClick={() => {
                            handleEdit(item);
                          }}
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </button>
                      <button style={{ border: "none" }} className="btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          onClick={() => handleDelete(item._id)}
                          // fill="white"
                          class="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
            {/* <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AddBlog;
