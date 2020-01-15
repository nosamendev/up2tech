import { combineReducers } from 'redux';

import fetchDevicesReducer from './fetchDevicesReducer';

export default combineReducers({
    fetchDevicesReducer: fetchDevicesReducer
});
