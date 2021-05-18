import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownList = (props) => {
  return (
    <div style={{ textAlign: "left" }}>
      <label htmlFor={props.id}>{props.label}</label>
      <Dropdown
        id={props.id}
        fluid
        search
        selection
        options={props.options}
        value={props.data}
        onChange={(_, data) => props.setData(data.value)}
      />
    </div>
  );
};

export default DropdownList;
