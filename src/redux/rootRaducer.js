import {combineReducers} from 'redux';
import {templateReducer} from './template/templateReducer';
import {dataReducer} from './data/dataReducer';
import {appReducer} from './app/appReducer';
import {userReducer} from './user/userReducer';

export const rootReducer = combineReducers({
  DATA: dataReducer,
  APP: appReducer,
  USER: userReducer,
  Temp: templateReducer,
});
