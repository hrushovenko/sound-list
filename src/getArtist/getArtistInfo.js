import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {getArtistInfo, resetArtist} from './actions'
import {bindActionCreators} from 'redux'

const FetchData = ({artist, getArtistInfo, resetArtist, isLoaded, match}) => {

  useEffect(() => {
    isLoaded && resetArtist()
    getArtistInfo(match.params.name)
  }, [])

  return (
    <div>
      <h3>Artist Info:</h3>
      {!isLoaded && (
        <div className="spinner-border text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {artist && (
        <table className="table">
          <tbody>
            <tr >
              <td>
                {artist.bio && (
                  <img src={artist.image[1]['#text']} alt="artist item"/>
                )}
              </td>
              <td>
                <h3>{artist.name}</h3>
              </td>
            </tr>
          </tbody>
        </table>  
      )}
    <div>
      {artist.bio && artist.tags.tag.map((tag, index) => {
          return(
            <a 
              href={tag["url"]}
              key ={index} 
              type="button" 
              className="btn btn-outline-secondary"
            >
              #{tag["name"]}
            </a>
          )
        })
      }
    </div>
    <hr />
    <div>
      <p className="text-justify">
        {artist.bio && artist.bio.content}
      </p>
    </div>
  </div>
  )
}

const mapStateToProps = state => ({
  artist: state.artistReducer.artist,
  isLoaded: state.artistReducer.artistLoaded
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getArtistInfo,
  resetArtist
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FetchData)