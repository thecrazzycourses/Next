import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{"Home"}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Working as a Software Developer</p>
        <p>
          {" "}
          <b>My Blog Post : </b>
        </p>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
