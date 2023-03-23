import React, { Component } from 'react'
import axios from 'axios';

import SearchBar from './SearchBar'

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      animals: [],
      showResults: false,
      showError: false,
      errorMessage: ''
    }
  }

  searchForAnimals = async (animalType) => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/animals?type=${animalType}`;
      const response = await axios.get(url);
      const animalResults = response.data;
  
      this.setState({
        animals: animalResults,
        showResults: true,
        showError: false
      })

    } catch (error) {
      this.setState({
        showError: true,
        showResults: false,
        errorMessage: error.message
      })
    }

  }


  render() {
    return (
      <main>
        <SearchBar
          search={this.searchForAnimals}
        />
        <p>display component</p>
      </main>
    )
  }
}
