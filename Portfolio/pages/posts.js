import Link from 'next/link'

const Posts = ({ title, urlName }) => {
  return (
    <Link as={`/${urlName}`} href={`/post?title=${title}`}>
      <a>Frontend framework : {title} </a>
    </Link>
  )
}

export default Posts
