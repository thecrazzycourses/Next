import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStar = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = url => {
  NProgress.done()
}

Router.onRouteChangeError = url => {
  NProgress.done()
}

export default function Layout({ children, tittle }) {
  return (
    <div className="root">
      <Head>
        <title>NextApp</title>
      </Head>

      <header>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>
      </header>

      {children}

      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        header {
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 1em;
          font-size: 1.2rem;
          background: indigo;
        }

        header a {
          color: darkgrey;
          text-decoration: none;
        }

        header a:hover {
          font-weight: bold;
          color: lightgrey;
        }

        footer {
          padding: 1em;
        }
      `}</style>

      <style global jsx>{`
        body {
          margin: 0;
          font-size: 110%;
          background: #f0f0f0;
        }
      `}</style>
    </div>
  )
}
