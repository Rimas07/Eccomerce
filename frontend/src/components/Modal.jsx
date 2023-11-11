// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../css/Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(
      defaultValue || {
        name: "",
        status: "",
      }
    );

  // const handleNameChange = (e) => {
  //     setFormState({
  //       ...formState,
  //       [e.target.name]: e.target.value,
  //     });
  // }

  //   const handleStatusChange = (e) => {
  //     setFormState({
  //       ...formState,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

    const [errors ,setErrors] = useState("")
    const ValidateForm = () => {
        if (formState.name && formState.status) {
            setErrors("")
            return true
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState))
            {
                if (!value) {
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(","));
            return false;
        }
        }
    
    
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      

      if (!ValidateForm()) return;


      onSubmit(formState)
      closeModal();
  };
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="Modal">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" value={formState.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={formState.status}
              onChange={handleChange}
            >
              <option value="Owner">Owner</option>
              <option value="Member">Member</option>
            </select>
                  </div>
                  {errors && <div className="error">{ `Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
