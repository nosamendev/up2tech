import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDevices } from '../../store/actions'; 
import Device from '../Device/Device';
import Loader from '../Loader/Loader';

const DeviceList = (props) => {

    useEffect(() => {
        props.fetchDevices();
    }, []);

    const devicesArr = Object.values(props.devices);
    
    const isInitailReducerObject = (arr) => {
       if (devicesArr.length !== arr.length) {
            return true;
       }
       else {
           if ((arr[0] == false) && (arr[1] == false) && (arr[2] == "")) {
                return true;
           }
           else {
               return false;
           }
       }
    }

    const displayDevices = () => {
        if (props.error) {
            return (
                <tr>
                    <td colSpan="6" className="error">{props.errorDescription}</td>
                </tr>
            )
        }
        
        if (!isInitailReducerObject(devicesArr)) {

            const deviceList =[];

            for (let i = 0; i < devicesArr.length; i++) {
                const props = {};
                if (devicesArr[i].lastData) {
                    props.id = devicesArr[i].lastData.id;
                    props.fCntUp = devicesArr[i].lastData.content.fCntUp;
                    props.battery = devicesArr[i].lastData.content.battery;
                    props.lat = devicesArr[i].lastData.content.lat;
                    props.lng = devicesArr[i].lastData.content.lng;

                    if (devicesArr[i].lastData.content.meta) {
                        props.barrierId = devicesArr[i].lastData.content.meta.barrierId;
                    }
                }
                else {
                    console.log(i)
                }
                
                deviceList[i] = <Device key={i} {...props} />;    
            }
            return deviceList
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

const mapStateToProps = (state) => {
    return {
        devices: state.fetchDevicesReducer,
        errorDescription: state.fetchDevicesReducer.description.message,
        error: state.fetchDevicesReducer.error,
        loading: state.fetchDevicesReducer.loading
    }
}

export default connect(mapStateToProps, { fetchDevices })(DeviceList);