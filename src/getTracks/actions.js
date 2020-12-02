import axios from "axios"

export const GET_TOP_TRACKS = 'GET_TOP_TRACKS'

export const getTopTracks = () => {
  const apiKey = 'c5f2b268792d9e9174e7e6a3071f32ac'
  const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`

  return async function (dispatch) {
    const res = await axios.get(url)
    const pay = res.data;
    const payload = pay.tracks.track
    return dispatch({
      type: GET_TOP_TRACKS,
      data: payload
    })
  }
}
