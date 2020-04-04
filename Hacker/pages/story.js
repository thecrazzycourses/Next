import React, { Component } from 'react'
import _fetch from 'isomorphic-fetch'
import Error from 'next/error'
import Layout from '../components/Layout'

class Story extends Component {
  static async getInitialProps({ req, res, query }) {
    let story

    try {
      const storyId = query.id
      const res = await _fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      )
      story = await res.json()
    } catch (error) {
      story = null
    }
    return { story }
  }

  render() {
    const { story } = this.props
    if (!story) {
      return <Error statusCode={503} />
    }

    return (
      <Layout title={story.title}>
        <main>
          <h1 className="story-title">
            <a href={story.url}>{story.title}</a>
          </h1>

          <div className="story-details">
            <strong>{story.points} points</strong>
            <strong>{story.comments_count} comments</strong>
            <strong>{story.time_ago}</strong>
          </div>
        </main>

        <style jsx>{`
          main {
            padding: 1rem;
          }

          .story-title {
            font-size: 1.2rem;
            font-weight: 300;
            margin: 0;
            padding-bottom: 0.5rem;
          }

          .story-title a {
            color: #333;
            text-decoration: none;
          }

          .story-title a:hover {
            text-decoration: underline;
          }

          .story-details {
            font-size: 0.8rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 1em;
          }

          .story-details strong {
            margin-right: 1em;
          }

          .story-details a {
            color: #f60;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Story
