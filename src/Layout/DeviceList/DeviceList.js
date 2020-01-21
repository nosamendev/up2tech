import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
        
        if (props.devices.length !== 0) {
            const deviceList =[];
            for (let i = 0; i < props.devices.length; i++) {
                const deviceProps = {};

                if (props.devices[i].lastData) {
                    deviceProps.id = props.devices[i].lastData.id;
                    deviceProps.fCntUp = props.devices[i].lastData.content.fCntUp;
                    deviceProps.battery = props.devices[i].lastData.content.battery;
                    deviceProps.lat = props.devices[i].lastData.content.lat;
                    deviceProps.lng = props.devices[i].lastData.content.lng;

                    if (props.devices[i].lastData.content.meta) {
                        deviceProps.barrierId = props.devices[i].lastData.content.meta.barrierId;
                    }
                }
                
                deviceList[i] = <Device key={props.devices[i].lastData.id} {...deviceProps} />;    
            }
            return deviceList;
        }    
    }

    if (props.loading) {
        return <Loader />;
    }
    
    return (
        <React.Fragment>
            <section className="device-list"> 
                <table>
                    <thead>
                        <tr>
                            <th>Monitoring ID</th>
                            <th>fCntUp</th>
                            <th>Battery</th>
                            <th>Lattitude</th>
                            <th>Longitude</th>
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

DeviceList.propTypes = {
    devices: PropTypes.array.isRequired,
    fetchDevices: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    errorDescription: PropTypes.string,
    loading: PropTypes.bool.isRequired
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