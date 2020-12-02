import Head from 'next/head'
import Link from "next/link"

function Post({ id, post }) {
  const idNum = parseInt(id)
  const data = post.find(o => o.id === idNum)

  const title = data.title.rendered
  const date = data.date.substring(0, data.date.length - 9)
  const content = data.content.rendered

  return(
    <div className="wrapper">
      <Head>
        <title>{data.title.rendered}</title>
      </Head>
      <h1>
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </h1>
      <p>
        <i>Publicerad: {date}</i>
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Link href="/">
        <a><button>Tillbaka</button></a>
      </Link>
    </div>
  )
}


export async function getStaticPaths() {
  const res = await fetch('https://attpodda.se/wp-json/wp/v2/posts')
  const posts = await res.json()

  const myPaths = posts.map((post) => `/posts/${post.id}`)

  return {
    paths: myPaths,
    fallback: false
  }
}


export const getStaticProps = async ({params: {id}}) => {
  const res = await fetch(`https://attpodda.se/wp-json/wp/v2/posts`)
  const post = await res.json()

  return {
    props: {
      post,
      id: id
    }
  }
}


export default Post
