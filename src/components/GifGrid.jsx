import React, { useEffect, useState } from 'react'
import {getGifs} from '../services/getGifs.services'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getGifInformation = async() => {
    const getInformation = await getGifs(category)
    setImages(getInformation)
    setIsLoading(false)
  }

  useEffect(() => {
    getGifInformation()
  }, [])
  
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className='card-grid'>
        {
          images.map((image) => (
            <GifGridItem key={image.id} {...image}/>
          ))
        }
      </div>
    </>
  )
}

export default GifGrid