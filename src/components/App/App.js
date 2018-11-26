import React, { Component, Fragment } from 'react'
import { renderRoutes } from 'react-router-config'

class App extends Component {
  render() {
    const {
      route: { routes },
    } = this.props
    return <Fragment>{renderRoutes(routes)}</Fragment>
  }
}

export default App
