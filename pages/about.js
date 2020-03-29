import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout/Layout'

class About extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/thecrazzycourses')
    const data = await res.json()
    return { user: data }
  }

  render() {
    const { name, avatar_url } = this.props.user
    return (
      <Layout tittle="Home">
        <h1>Fetching Github Api for : {name}</h1>
        <img src={avatar_url} alt="Me" height="200px"></img>
      </Layout>
    )
  }
}

export default About
