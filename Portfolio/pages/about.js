import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout/Layout'
import Error from './_error'

class About extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/thecrazzycourses')
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json()
    return { user: data, statusCode }
  }

  render() {
    const { name, avatar_url } = this.props.user
    const statusCode = this.props.statusCode

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title="About">
        <h1>Next Rest Api</h1>
        <h3>Github Api - User : {name}</h3>
        <img src={avatar_url} alt="Me" height="200px"></img>
      </Layout>
    )
  }
}

export default About
