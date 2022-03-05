import {combineReducers} from 'redux';
import stations from './stations';
import slots from './slots';
import places from './places';
export default combineReducers({ stations: stations,slots: slots,places : places});