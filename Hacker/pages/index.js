import React, { Component } from 'react'
import _fetch from 'isomorphic-fetch'
import Error from 'next/error'
import StoryList from '../components/StoryList'
import Layout from '../components/Layout'

class Index extends Component {
  static async getInitialProps() {
    let stories

    try {
      const res = await _fetch('https://node-hnapi.herokuapp.com/news?page=1')
      stories = await res.json()
    } catch (error) {
      console.log(error)
      stories = []
    }

    return { stories }
  }

  render() {
    const { stories } = this.props
    if (stories.length === 0) {
      return <Error statusCode={503} />
    }
    return (
      <Layout title="Hacker News" description="Hacker News Next App">
        <StoryList stories={stories} />
      </Layout>
    )
  }
}

export default Index
