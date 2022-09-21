import React from "react";

export const InputDefault = ({
  typeI,
  autocomplete,
  disable,
  max,
  min,
  maxlength,
  minlength, 
  value,
  placeholder
}) => {
  return (
    
    <input
      type={typeI}
      autoComplete={autocomplete ? autocomplete : "on"}
      {...(disable ? "disabled" : null)}
      value ={value}
      placeholder = {placeholder ? (placeholder) : ("")}
      {... max? (`max="${max}"`):("")}
      {... min? (`min="${min}"`):("")}
      {... maxlength? (`maxlength="${maxlength}"`):("")}
      {... minlength? (`minlength="${minlength}"`):("")}
    ></input>
      
  );
};
