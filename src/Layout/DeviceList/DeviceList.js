import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDevices } from '../../store/actions'; 
import Device from '../Device/Device';
import Loader from '../Loader/Loader';

const DeviceList = (props) => {

    useEffect(() => {
        props.fetchDevices();
    }, []);

    const displayDevices = () => {

        if (props.error) {
            return (
                <tr>
                    <td colSpan="6" className="error">{props.errorDescription}</td>
                </tr>
            )
        }
        if (props.devices) {
            const items = props.devices.map((_, i) => {
                return <Device 
                    id={props.devices[i].lastData.id} 
                    fCntUp={props.devices[i].lastData.content.fCntUp} 
                    battery={props.devices[i].lastData.content.batteryLife} 
                    lat={props.devices[i].lastData.content.lat}
                    lng={props.devices[i].lastData.content.lng}
                    barrierId={props.devices[i].lastData.content.meta.barrierId}
                    key={i} />            
            });
            return items;
        }    
    }

    if (props.loading) {
        return <Loader />;
    }
    
    return (
        <React.Fragment>
            <section className="item-list"> 
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>fCntUp</th>
                            <th>Battery</th>
                            <th>Lat</th>
                            <th>Lng</th>
                            <th>Barrier ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayDevices()}  
                    </tbody>
	            </table>                        
            </section>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        devices: state.fetchDevicesReducer.devices,
        errorDescription: state.fetchDevicesReducer.description.message,
        error: state.fetchDevicesReducer.error,
        loading: state.fetchDevicesReducer.loading
    }
}

export default connect(mapStateToProps, { fetchDevices })(DeviceList);