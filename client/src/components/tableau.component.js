import React from 'react';


function Tableau(props){

    var fruit = props.fruit;

    return (
        
        <td>{props.tableau.stock.[fruit]}</td>
    
        
    )
}

export default Tableau;