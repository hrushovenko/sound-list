import {GET_TOP_TRACKS} from './actions'

const initialState = {
  topTracks: [],
  tracksLoaded: false
}

const tracksReducer = (state = initialState, action) => {
  const {type, data} = action
  switch (type) {
    case GET_TOP_TRACKS:
      return {
        ...state, 
        topTracks: data,
        tracksLoaded: true
      }
    default:
      return state
  } 
}

export default tracksReducer