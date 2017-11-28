import React, { Component } from 'react';
import Layout from './HOC/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
