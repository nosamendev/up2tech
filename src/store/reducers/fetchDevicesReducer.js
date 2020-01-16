import { FETCH_DEVICES, FETCH_DEVICES_START, FETCH_DEVICES_FAILED } from "../actions/types";

const INITIAL_STATE = {
    error: false,
    loading: false,
    description: ''
};

const fetchDevicesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DEVICES:
            return {...state, ...action.payload, loading: false};       
        case FETCH_DEVICES_START:
            return {...state, loading: true}
        case FETCH_DEVICES_FAILED:
            return {...state, loading: false, description: action.payload, error: true}    

        default:
            return state;
    }
}

export default fetchDevicesReducer;