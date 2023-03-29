import React, { Component } from 'react'
import axios from 'axios';

import SearchBar from './SearchBar';
import Results from './Results';

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
      // get api url 
      // send api request to server to et info
      // set the info to state
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


  resetSearch = () => {
    this.setState({
      animals: [],
      showResults: false,
      showError: false,
      errorMessage: ''
    })
  }


  render() {
    return (
      <main>
        <SearchBar
          search={this.searchForAnimals}
          reset={this.resetSearch}
        />
        <Results 
          showResults={this.state.showResults}
          showError={this.state.showError}
          eMessage={this.state.errorMessage}
          results={this.state.animals}
        />
      </main>
    )
  }
}
