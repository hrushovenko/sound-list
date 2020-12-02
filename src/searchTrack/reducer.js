import {SEARCH_TRACK, INPUT_TRACK, RESET_FOUND_TRACKS, SWITCH_LOADING} from './actions'

const initialState = {
  foundTracks : [],
  inputTrack: '',
  tracksLoaded: false,
  loading: false
}

const searchTrackReducer = (state = initialState, action) => {
  const {type, data} = action
  switch (type) {
    case SEARCH_TRACK:
      return {
        ...state, 
        foundTracks: data,
        tracksLoaded: true,
        loading: !state.loading
      }
    case INPUT_TRACK:
      return {
        ...state, 
        inputTrack: data,
      }
    case RESET_FOUND_TRACKS:
      return {
        ...state, 
        foundTracks: [],
        inputTrack: '',
        tracksLoaded: false
      }
    case SWITCH_LOADING:
      return {
        ...state, 
        loading: !state.loading
      }
    default:
      return state
  } 
}

export default searchTrackReducer