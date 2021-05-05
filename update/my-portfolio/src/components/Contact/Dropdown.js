import React from "react";


function Dropdown(props) {


    return <>
        <select {...props}>
        {props.options.map((options) => (
              <option value={options.value}>{options.label}</option>
            ))}
        </select>
    </>;
}
export default Dropdown;

