// bring in React and Component instance from react
import React, {Component} from 'react'

// define our Hello component
//extends Component - This is the React library class we inherit from to create our component definition.
class Hello extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <h1>Hello World!</h1>
    )
  }
}
// This exposes the Hello class to other files which import from the App.js file. The default keyword means that any import that's name doesn't match a named export will default to this. Only one default is allowed per file.
export default Hello
