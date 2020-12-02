import React from 'react'
import FetchArtist from '../getArtist/getArtistInfo'

export const AboutArtist = ({match}) => (
  <>
    <FetchArtist match={match}/>
  </>
)
