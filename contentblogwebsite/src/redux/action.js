import axios from "axios";
import * as types from "./actionType";

// get all students data-
export const getAllBlogData = () => (dispatch) => {
  dispatch({ type: types.GET_ALL_BLOG_REQUEST });
  return axios
    .get("http://localhost:8080/api/v1/blogs")
    .then((res) => {
      dispatch({ type: types.GET_ALL_BLOG_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_ALL_BLOG_ERROR });
    });
};

// get single student data-
export const getSingleBlogData = (_id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_BLOG_REQUEST });
  return axios
    .get(`http://localhost:8080/api/v1/blogs/${_id}`)
    .then((res) => {
      dispatch({
        type: types.GET_SINGLE_BLOG_SUCCESS,
        singleStudentData: res.data[0],
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_SINGLE_BLOG_ERROR });
    });
};

// add student data-
export const postBlogData = (payload) => (dispatch) => {
  dispatch({ type: types.POST_BLOG_REQUEST });
  return axios
    .post("http://localhost:8080/api/v1/blogs/insert", payload)
    .then((res) => {
      alert(res.data.message);
      dispatch({ type: types.POST_BLOG_SUCCESS, postResponse: res.data });
    })
    .catch((err) => {
      alert(err.response.data.error);
      dispatch({
        type: types.POST_BLOG_ERROR,
        postResponse: err.response.data,
      });
    });
};

// update student data-
export const updateBlogData = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_BLOG_REQUEST });
  return axios
    .put(`http://localhost:8080/api/v1/blogs/${payload._id}`, payload)
    .then((res) => {
      dispatch({
        type: types.UPDATE_BLOG_SUCCESS,
        updateResponse: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.UPDATE_BLOG_ERROR,
        updateResponse: err.response.data,
      });
    });
};

// delete student data-
export const deleteBlogData = (_id) => (dispatch) => {
  dispatch({ type: types.DELETE_BLOG_REQUEST });
  return axios
    .delete(`http://localhost:8080/api/v1/blogs/${_id}`)
    .then((res) => {
      dispatch({
        type: types.DELETE_BLOG_SUCCESS,
        deleteResponse: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.DELETE_BLOG_ERROR,
        deleteResponse: err.response.data,
      });
    });
};
