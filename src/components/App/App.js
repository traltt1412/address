import React, { Component } from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Listing from '../Listing/Listing'
import Edit from '../Edit/Edit'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Listing} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/add' component={Edit} />
        </div>
      </BrowserRouter>
    )
  }
}
