import React, { Fragment } from 'react'
import FetchArtist from '../getArtist/getArtistInfo'

export const AboutArtist = ({match}) => {
  return (
    <Fragment>
      <FetchArtist match={match}/>
    </Fragment>
  )
}