import React, { Component } from 'react'
import _fetch from 'isomorphic-fetch'
import Error from 'next/error'
import StoryList from '../components/StoryList'
import Layout from '../components/Layout'
import Link from 'next/link'

class Index extends Component {
  static async getInitialProps({ req, res, query }) {
    let stories
    let page

    try {
      page = Number(query.page) || 1
      const res = await _fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      )
      stories = await res.json()
    } catch (error) {
      console.log(error)
      stories = []
    }

    return { stories, page }
  }

  render() {
    const { stories, page } = this.props
    if (stories.length === 0) {
      return <Error statusCode={503} />
    }
    return (
      <Layout title="Hacker News" description="Hacker News Next App">
        <StoryList stories={stories} />

        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>

        <style jsx>{`
          footer {
            padding: 1em;
          }

          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Index
