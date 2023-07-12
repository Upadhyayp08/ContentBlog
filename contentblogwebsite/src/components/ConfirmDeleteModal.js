import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as usedata from "../redux/action";
import { Modal, Button } from "react-bootstrap";
// import bootstrap from "bootstrap";

function ConfirmDeleteModal(props) {
  console.log(props);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(usedata.deleteBlogData(props.props))
      .then(() => dispatch(usedata.getAllBlogData()))
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Delete
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this data?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                // aria-label="Close"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => handleDelete()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmDeleteModal;
