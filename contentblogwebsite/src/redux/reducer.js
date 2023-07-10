import * as types from "./actionType";

// initial state-
const initState = {
  isLoading: false,
  payload: [],
  singleData: {},
  updateResponse: {},
  postResponse: {},
  deleteResponse: {},
  isError: false,
};

// reducer function-
export const reducer = (state = initState, action) => {
  const {
    type,
    payload,
    postResponse,
    singleData,
    updateResponse,
    deleteResponse,
  } = action;

  switch (type) {
    // get all students data-
    case types.GET_ALL_BLOG_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_ALL_BLOG_SUCCESS:
      return { ...state, isLoading: false, payload };

    case types.GET_ALL_BLOG_ERROR:
      return { ...state, isLoading: false, isError: true, payload };

    // get single student data-
    case types.GET_SINGLE_BLOG_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_SINGLE_BLOG_SUCCESS:
      return { ...state, isLoading: false, singleData };

    case types.GET_SINGLE_BLOG_ERROR:
      return { ...state, isLoading: false, isError: true, singleData };

    // post student data-
    case types.POST_BLOG_REQUEST:
      return { ...state, isLoading: true };

    case types.POST_BLOG_SUCCESS:
      return { ...state, isLoading: false, postResponse };

    case types.POST_BLOG_ERROR:
      return { ...state, isLoading: false, isError: true, postResponse };

    // update student data-
    case types.UPDATE_BLOG_REQUEST:
      return { ...state, isLoading: true };

    case types.UPDATE_BLOG_SUCCESS:
      return { ...state, isLoading: false, updateResponse };

    case types.UPDATE_BLOG_ERROR:
      return { ...state, isLoading: false, isError: true, updateResponse };

    // delete student data-
    case types.DELETE_BLOG_REQUEST:
      return { ...state, isLoading: true };

    case types.DELETE_BLOG_SUCCESS:
      return { ...state, isLoading: false, deleteResponse };

    case types.DELETE_BLOG_ERROR:
      return { ...state, isLoading: false, isError: true, deleteResponse };

    default:
      return { ...state };
  }
};
