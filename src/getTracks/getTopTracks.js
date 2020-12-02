import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { NavLink } from "react-router-dom";

import {getTopTracks} from './actions'
import {bindActionCreators} from 'redux'

const FetchData = ({tracks, getTopTracks, isLoaded}) => {
  useEffect(() => {
    if (!isLoaded) {
      getTopTracks()
    }
  }, [getTopTracks, isLoaded])

  return (
    <div>
      <h3>Top Tracks:</h3>
      {!isLoaded && (
        <div className="spinner-border text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <table className="table">
        <tbody>
          {tracks.map((track, index) => 
            <tr key={index}>
              <td>"{track.name}"</td>
              <td>
                <NavLink
                  to={`about/${track.artist.name}`}
                  exact
                >
                  {track.artist.name}
                </NavLink>
              </td>
              <td>
                <a href={track.artist.url}>to Last.fm</a>
              </td>
              <td>
                <img src={track.image[0]['#text']} alt="song item"/>
              </td>
            </tr>
          )}
        </tbody>
      </table>  
    </div>
  )
}

const mapStateToProps = state => ({
  tracks: state.tracksReducer.topTracks,
  isLoaded: state.tracksReducer.tracksLoaded
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getTopTracks
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FetchData)