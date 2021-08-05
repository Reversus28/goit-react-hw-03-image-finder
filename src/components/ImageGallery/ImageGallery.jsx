import React, { Component } from 'react'
import { List, Title, LoaderWrap } from './ImageGallery.style'
import NewFetchApiImage from '../../services/apiService'
import ImageGalleryItem from '../ImageGalleryItem'
import Button from '../Button'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'

const newFetchApiImage = new NewFetchApiImage()

export default class ImageGallery extends Component {
  static propTypes = {
    modalImage: PropTypes.string.isRequired,
    onOpenModal: PropTypes.func.isRequired,
  }

  state = {
    images: null,
    page: 1,
    status: 'idle',
    error: '',
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery
    const newQuery = this.props.searchQuery
    const prevPage = prevState.page
    const newPage = this.state.page

    if (prevQuery !== newQuery && newQuery !== '') {
      this.setState({
        status: 'pending',
        page: 1,
      })
      newFetchApiImage
        .fetchApiImage(newQuery, newPage)
        .then((images) =>
          this.setState({
            images: images.hits,
            status: 'resolved',
          }),
        )
        .catch((error) => this.setState({ error, status: 'rejected' }))
    }

    if (prevPage !== newPage) {
      this.setState({
        status: 'pending',
      })

      newFetchApiImage
        .fetchApiImage(newQuery, prevPage)
        .then((images) =>
          this.setState({
            images: [...prevState.images, ...images.hits],
            status: 'resolved',
          }),
        )
        .catch((error) => this.setState({ error, status: 'rejected' }))
        .finally(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
        })
    }
  }

  loadsMorePages = (e) => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }))
    newFetchApiImage.incrementPage()
  }

  render() {
    const { images, status } = this.state

    if (status === 'idle') {
      return (
        <Title>
          Find your image, wraith now. Please, write your image query
        </Title>
      )
    }

    if (status === 'pending') {
      return (
        <LoaderWrap>
          <Loader
            type="Puff"
            color="#1f2527"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </LoaderWrap>
      )
    }

    if (status === 'resolved') {
      return (
        <>
          {images.length === 0 && (
            <Title>Sorry, we didn't find anything of the request!</Title>
          )}
          {images.length > 0 && (
            <List className="ImageGallery">
              {images.map((image) => {
                const { id, webformatURL, tags, largeImageURL } = image
                return (
                  <ImageGalleryItem
                    key={id}
                    smallImage={webformatURL}
                    alt={tags}
                    largeImage={largeImageURL}
                    onClick={this.props.onOpenModal}
                  />
                )
              })}
            </List>
          )}
          {images.length >= 12 && (
            <Button onClick={this.loadsMorePages}>Load more</Button>
          )}
        </>
      )
    }

    if (status === 'rejected') {
      return <Title>Uh, oh we have a problem: Error 404</Title>
    }
  }
}
