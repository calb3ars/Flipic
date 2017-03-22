import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserProfileReducer from './user_profile_reducer';
import PhotosReducer from './photos_reducer';
const rootReducer = combineReducers({
  session: SessionReducer,
  profile: UserProfileReducer,
  stream: PhotosReducer
});

export default rootReducer;
