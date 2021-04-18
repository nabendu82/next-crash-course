import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>TheWebDev</title>
        <meta name='keywords' content='web-development, programming' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
