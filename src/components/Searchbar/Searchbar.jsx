import React from 'react'
import { Header, Form, Button, Span, Input } from './Searchbar.style'

function Searchbar() {
  return (
    <Header className="Searchbar">
      <Form className="SearchForm">
        <Button type="submit" className="SearchForm-button">
          <Span className="SearchForm-button-label">Search</Span>
        </Button>

        <Input
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  )
}

export default Searchbar
