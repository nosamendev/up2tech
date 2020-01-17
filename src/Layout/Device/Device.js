import React from 'react';
import PropTypes from 'prop-types';
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

Device.propTypes = {
    id: PropTypes.string.isRequired,
    fCntUp: PropTypes.string,
    battery: PropTypes.string,
    lat: PropTypes.string,
    lng: PropTypes.string,
    barrierId: PropTypes.string
}

export default Device;