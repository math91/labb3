import Head from "next/head"
import Link from "next/link"

function Blog({ posts }) {

  const list = posts.map((post) =>
    <li key={post.id}>
      <Link
        href="/posts/[slug]"
        as={"/posts/" + post.id}
      >
        <a>
        <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </a>
      </Link>
    </li>
  )

  return(
    <div className="wrapper">
      <Head><title>Gör din egen podcast</title></Head>
      <h1>Gör din egen podcast</h1>
      <ul>
        {list}
      </ul>
      <Link
        href="/about/"
      >
        <a><button>Om boken</button></a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://attpodda.se/wp-json/wp/v2/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
