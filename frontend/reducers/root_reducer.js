import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import PhotosReducer from './photos_reducer';
const rootReducer = combineReducers({
  session: SessionReducer,
  user: UsersReducer,
  photos: PhotosReducer
});

export default rootReducer;
