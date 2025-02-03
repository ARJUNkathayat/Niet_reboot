import React from 'react'
import { CDN_IMG_POS } from '../Utils/constants'

const MovieCard = ({img,title}) => {
  return (
    <div className='w-48 flex shrink-0'>
        <img src={CDN_IMG_POS+img} alt=''></img>
       
    </div>
  )
}

export default MovieCard