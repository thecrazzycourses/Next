import React, { Component } from 'react'

class About extends Component {
  getInitialProps() {}

  componentDidMount() {
    fetch('https://api.github.com/users/thecrazzycourses')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return <div></div>
  }
}

export default About
