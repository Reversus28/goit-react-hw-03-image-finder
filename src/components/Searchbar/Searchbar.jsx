import React, { Component } from 'react'
import { Header, Form, Button, Span, Input } from './Searchbar.style'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  state = {
    searchQuery: '',
  }

  handleInputChange = (e) => {
    const searchQuery = e.currentTarget.value.toLowerCase()
    this.setState({
      searchQuery,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    if (this.state.searchQuery === '') {
      toast.warn('🦄 Enter yor query!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    this.props.onSubmit(this.state.searchQuery)

    this.setState({
      searchQuery: '',
    })
  }

  render() {
    return (
      <Header className="Searchbar">
        <Form className="SearchForm" onSubmit={this.handleFormSubmit}>
          <Button type="submit" className="SearchForm-button">
            <Span className="SearchForm-button-label">Search</Span>
          </Button>

          <Input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
          />
        </Form>
      </Header>
    )
  }
}
