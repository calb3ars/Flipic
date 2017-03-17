import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer
});

export default rootReducer;
