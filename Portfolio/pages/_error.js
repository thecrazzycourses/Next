import Layout from '../components/Layout/Layout'

export const _error = ({ statusCode }) => {
  return (
    <Layout title="Error">
      {statusCode
        ? `Couldn't load user data: Status Code ${statusCode}`
        : `Couldn't get that page!`}
    </Layout>
  )
}

export default _error
