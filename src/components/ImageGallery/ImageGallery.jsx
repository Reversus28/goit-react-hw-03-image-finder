import React from 'react'
import { List } from './ImageGallery.style'

function ImageGallery({ children }) {
  return <List className="ImageGallery">{children}</List>
}

export default ImageGallery
