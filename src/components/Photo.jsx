import React from 'react'
import { useParams } from 'react-router-dom'

const Photo = ({data}) => {
    const { id } = useParams()
  return (
    <div>Photo {id} 
    <img  src={data ? data[id].photo_url : ""}></img>
    </div>
  )
}

export default Photo