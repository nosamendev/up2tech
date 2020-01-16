import React, {useEffect} from 'react';
import './Device.css'; 

const Device = (props) => {
    useEffect(() => {
        //console.log(props);
        
    }, [])
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.fCntUp}</td>
            <td className={(props.battery < 50) ? "warn" : null}>{props.battery}</td>
            <td>{props.lat}</td>
            <td>{props.lng}</td>
            <td>{props.barrierId}</td>
        </tr>
    );
}

export default Device;