import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import { DataContext } from "../../Context/ContextStore";

import "./Form.modules.css";

const Form = () => {
  const {
    onChange: onChangeState,
    state,
    clearFields,
  } = useContext(DataContext);

  const ChangeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    onChangeState(e.target.name, e.target.value);
  };

  const clear = () => {
    clearFields();
  };

  return (
    <div className="form_wrapper">
      <form className="form" onChange={ChangeHandler}>
        <h3>Enter Your Signature Details</h3>
        <div className="field_wrapper">
          <TextField
            // onChange={ChangeHandler}
            value={state.name}
            name="name"
            label="Fullname"
            fullWidth
            margin="dense"
            variant="filled"
          />
        </div>
        <div className="field_wrapper">
          <TextField
            variant="filled"
            // onChange={ChangeHandler}
            value={state.email}
            name="email"
            label="Email"
            fullWidth
            type="email"
            margin="dense"
          />
        </div>
        <div className="field_wrapper">
          <TextField
            variant="filled"
            // onChange={ChangeHandler}
            name="profession"
            label="Profession"
            value={state.profession}
            fullWidth
            margin="dense"
          />
        </div>
        <div className="field_wrapper">
          <TextField
            variant="filled"
            value={state.domain}
            // onChange={ChangeHandler}
            name="domain"
            label="Domain"
            fullWidth
            margin="dense"
          />
        </div>
        <div className="field_wrapper">
          <TextField
            variant="filled"
            name="companyName"
            label="CompanyName"
            value={state.companyName}
            // onChange={ChangeHandler}
            fullWidth
            margin="dense"
          />
        </div>

        <div className="field_wrapper">
          <TextField
            variant="filled"
            name="address"
            value={state.address}
            label="Address"
            fullWidth
            margin="dense"
          />
        </div>

        <div className="field_wrapper">
          <TextField
            variant="filled"
            value={state.officeNumber}
            name="officeNumber"
            label="Office Number"
            fullWidth
            margin="dense"
          />
        </div>

        <div className="field_wrapper">
          <TextField
            variant="filled"
            name="phoneNumber"
            label="Phone"
            fullWidth
            value={state.phoneNumber}
            margin="dense"
          />
        </div>
        <div className="field_wrapper">
          <TextField
            variant="filled"
            name="facebook"
            label="Facebook URL"
            fullWidth
            margin="dense"
            value={state.facebook}
          />
        </div>
        <div className="field_wrapper">
          <TextField
            variant="filled"
            name="instagram"
            label="Instagram URL"
            fullWidth
            value={state.instagram}
            margin="dense"
          />
        </div>
        <div className="field_wrapper">
          <TextField
            variant="filled"
            name="linkdin"
            label="Linkdin URL"
            fullWidth
            margin="dense"
            value={state.linkdin}
          />
        </div>
        <div className="field_wrapper">
          <TextField
            variant="filled"
            name="profileURL"
            label="Profile URL"
            fullWidth
            margin="dense"
            value={state.profileURL}
          />
        </div>
        <div className="field_wrapper">
          <TextField
            variant="filled"
            value={state.twitterURL}
            name="twitterURL"
            label="Twitter URL"
            fullWidth
            margin="dense"
          />
        </div>
        <Button
          onClick={clear}
          className="clear"
          variant="outlined"
          color="secondary"
        >
          CLEAR FIELDS
        </Button>
      </form>
    </div>
  );
};

export default Form;
