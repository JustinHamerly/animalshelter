import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  updateSearchText = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.searchText)
    this.setState({searchText: ''})
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} id='searchForm'>
        <Form.Group>
          <Form.Label>Animal Type</Form.Label>
          <Form.Control type='text' placeholder='ex: cat' onChange={this.updateSearchText} value={this.state.searchText}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='success'>
          Search
        </Button>
        <Button variant='secondary' onClick={this.props.reset}>
          Reset
        </Button>
      </Form>
    )
  }
}
