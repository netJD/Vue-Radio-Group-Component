import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  
  const handleChange = (e) => {
    const newValueSelected = e.target.value;
    onChange(newValueSelected); // Pass the newly selected value back to the parent
  };


  const RadioOptions = 

  React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      checked: child.props.value === selected, // Determine if this option is selected
      onChange: () => onChange(child.props.value), // Call onChange with the value of the option
    })
  })

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input 
        id={value} 
        type="radio" 
        name={value}

        value={value} 
        checked={checked} 
        onChange={(e) => { 
          onChange(e.target.value); 
        }} 
        
      />
      <label htmlFor={value}>{children}</label>
    </div>

  );
};
