import React, { Component } from 'react'
import { Alert, Card } from 'react-bootstrap'

export default class Results extends Component {
  render() {
    return (
      <>
        {
          this.props.showResults &&
          <section id='animalCards'>
            {
              this.props.results.map((animalObj, idx) => (
                <Card key={idx} className='animalCard'>
                  <Card.Img variant='top' src={animalObj.img}/>
                  <Card.Body>
                    <Card.Title>{animalObj.title}</Card.Title>
                    <Card.Text>
                      {animalObj.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            }
            
          </section>

        }
        {
          this.props.showError &&
          <Alert variant='info'>
            {this.props.eMessage}
          </Alert>
        }
      </>
    )
  }
}
