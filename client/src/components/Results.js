import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import Result from './Result'

export default class Results extends Component {
  render() {
    return (
      <>
        {
          this.props.showResults &&

          <section id='animalCards'>
            {
              this.props.results.map((animalObj, idx) => (
                <Result key={idx} animalObj={animalObj} />
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
