import Head from 'next/head'
import Link from "next/link"

function Post({ id, post }) {
  const idNum = parseInt(id)
  const data = post.find(o => o.id === idNum)

  const title = data.title.rendered
  const content = data.content.rendered

  return(
    <div className="wrapper">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Link href="/">
        <a><button>Visa alla kapitel</button></a>
      </Link>
    </div>
  )
}


export async function getStaticPaths() {
  const res = await fetch('https://attpodda.se/wp-json/wp/v2/posts?per_page=100&_fields=id')
  const posts = await res.json()

  const myPaths = posts.map((post) => `/posts/${post.id}`)

  return {
    paths: myPaths,
    fallback: false
  }
}


export const getStaticProps = async ({params: {id}}) => {
  const res = await fetch(`https://attpodda.se/wp-json/wp/v2/posts?per_page=100&_fields=id,title,content`)
  const post = await res.json()

  return {
    props: {
      post,
      id: id
    }
  }
}


export default Post
