import React, { Component, Fragment } from 'react'
import cry1 from 'src/assets/emoji/cry-1.svg'

class NotFoundPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Sorry, but this page not exist</h1>
        <img src={cry1} alt="cry emoji" />
      </Fragment>
    )
  }
}

export default NotFoundPage
