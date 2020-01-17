import React from 'react';
import './Device.css'; 

const Device = (props) => {

    let className = "";
    if (props.battery < 50) {
        if (props.battery > 30) {
            className = "warn1"
        }
        else {
            className = "warn2";
        }
    }

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.fCntUp}</td>
            <td className={className}>{props.battery}</td>
            <td>{props.lat}</td>
            <td>{props.lng}</td>
            <td>{props.barrierId}</td>
        </tr>
    );
}

export default Device;