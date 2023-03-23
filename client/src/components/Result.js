import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Result extends Component {
  render() {
    return (
      <Card className='animalCard'>
        <Card.Img variant='top' src={this.props.animalObj.img} />
        <Card.Body>
          <Card.Title>{this.props.animalObj.title}</Card.Title>
          <Card.Text>
            {this.props.animalObj.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
