import Layout from '../components/Layout/Layout'
import Posts from './posts'

const Blog = () => {
  return (
    <Layout title="Blog">
      <ul>
        <li>
          <Posts urlName="react-post" title="React" />
        </li>
        <li>
          <Posts urlName="angular-post" title="Angular" />
        </li>
        <li>
          <Posts urlName="vue-post" title="Vue" />
        </li>
      </ul>
    </Layout>
  )
}

export default Blog
