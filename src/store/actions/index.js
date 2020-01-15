import { FETCH_DEVICES, FETCH_DEVICES_START, FETCH_DEVICES_FAILED } from "../actions/types";

import devices from '../../api/devices';

export const fetchDevices = () => async dispatch => {
    dispatch({type: FETCH_DEVICES_START});

    try {
        const response = await devices.get('/');
        dispatch({type: FETCH_DEVICES, payload: response.data});
    }
    catch(error) {
        dispatch({type: FETCH_DEVICES_FAILED, payload: error});     
    }
}

export const fetchDevicesFailed = (error) => {
    return {
        type: FETCH_DEVICES_FAILED,
        payload: error
    }
}