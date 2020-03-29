import React from 'react'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'

const Post = () => {
  const route = useRouter().query.title
  return (
    <Layout title={route}>
      <p>Frontend Framework : {route}</p>
    </Layout>
  )
}
export default Post
