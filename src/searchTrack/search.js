import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {serchTrack, setSearchInput, resetFoundTracks, switchLoading} from './actions'
import {bindActionCreators} from 'redux'

const FetchData = ({
  setSearchInput, 
  serchTrack, 
  foundTracks, 
  isLoaded, 
  input, 
  resetFoundTracks,
  switchLoading,
  loading
}) => {
  useEffect(() => {
    resetFoundTracks()
  }, [resetFoundTracks])
  
  const hanldeSubmit = (e) => {
    e.preventDefault()

    if (input.length > 0) {
      switchLoading()
      serchTrack(input)
    }
  }

  return (
    <div>
      <h3>Search Track:</h3>
      
      <form onSubmit={hanldeSubmit}>
        <div className="form-group">
          <hr />
          <input 
            type="text" 
            className="form-control" 
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Input name of track and press 'Enter'..." 
          />
        </div>
      </form>
      {loading && (
        <div className="spinner-border text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <div> 
        <ul className="list-group">
          {isLoaded && (
            <li className="list-group-item active"><h3>Founded Tracks:</h3></li>
          )}

          {foundTracks.map((track, index) =>   
            <li key={index+1} className="list-group-item">
              <a href={track.url}>
                "{track.name}" - {track.artist}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  foundTracks: state.searchTrackReducer.foundTracks,
  isLoaded: state.searchTrackReducer.tracksLoaded,
  input: state.searchTrackReducer.inputTrack,
  loading: state.searchTrackReducer.loading
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSearchInput,
  serchTrack,
  resetFoundTracks,
  switchLoading
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FetchData)