import {GET_ARTIST_INFO, RESET_ARTIST} from './actions'

const initialState = {
  artist: {},
  artistLoaded: false
}

const artistReducer = (state = initialState, action) => {
  const {type, data} = action
  switch (type) {
    case GET_ARTIST_INFO:
      return {
        ...state, 
        artist: data,
        artistLoaded: true
      }
    case RESET_ARTIST:
      return {
        ...state, 
        artist: {},
        artistLoaded: false
      }
    default:
      return state
  } 
}

export default artistReducer