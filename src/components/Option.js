import React from "react";

const Option = (props) => {
  return <option value={props.option.value}>{props.option.name}</option>;
};

export default Option;
