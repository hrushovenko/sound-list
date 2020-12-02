import { combineReducers } from 'redux'

import tracksReducer from './getTracks/reducer'
import artistReducer from './getArtist/reducer'
import searchTrackReducer from './searchTrack/reducer'


const rootReducer = combineReducers({
  tracksReducer,
  artistReducer,
  searchTrackReducer
})

export default rootReducer