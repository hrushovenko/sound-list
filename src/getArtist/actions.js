import axios from 'axios'

export const GET_ARTIST_INFO = 'GET_ARTIST_INFO'
export const RESET_ARTIST = 'RESET_ARTIST'

export const getArtistInfo = (name) => {
  const apiKey = 'c5f2b268792d9e9174e7e6a3071f32ac'
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${apiKey}&format=json`

  return async function (dispatch) {
    const res = await axios.get(url)
    const payload = res.data.artist
    return dispatch({
      type: GET_ARTIST_INFO,
      data: payload
    })
  }
}

export function resetArtist() {
  return {
    type: RESET_ARTIST
  }
}