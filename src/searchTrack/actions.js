import axios from "axios";

export const SEARCH_TRACK = 'SEARCH_TRACK'
export const INPUT_TRACK = 'INPUT_TRACK'
export const RESET_FOUND_TRACKS = 'RESET_FOUND_TRACKS'
export const SWITCH_LOADING = 'SWITCH_LOADING'

export const setSearchInput = (searchName) => {
  return async function (dispatch) {
    return dispatch({
      type: INPUT_TRACK,
      data: searchName
    })
  }
}

export const serchTrack = (trackName) => {
  const apiKey = 'c5f2b268792d9e9174e7e6a3071f32ac'
  const url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=${apiKey}&format=json`

  return async function (dispatch) {
    const res = await axios.get(url)
    const payload = res.data.results.trackmatches.track;
    return dispatch({
      type: SEARCH_TRACK,
      data: payload
    })
  }
}

export function resetFoundTracks() {
  return {
    type: RESET_FOUND_TRACKS
  }
}

export function switchLoading() {
  return {
    type: SWITCH_LOADING
  }
}
