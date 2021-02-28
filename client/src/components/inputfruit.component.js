import React from 'react';


function Inputfruit(props){

    return (
        <div>
            <label className="Input-label">{props.name}</label>
            <input
            required
            type="number"
            className="Input-fruit"
            name = {props.name}
            onChange={props.onChange}>
            
            </input>
        </div>
    )
}

export default Inputfruit;