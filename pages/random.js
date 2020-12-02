import Link from "next/link"
import {useState} from "react"

function Random({ posts }) {
  const [myId, setMyId] = useState("")

  function handleClick() {
    const random = Math.floor(Math.random() * posts.length)
    const myRandom = posts[random]
    setMyId(myRandom.id)
    console.log(myId)
  }

  return (
    <div className="wrapper">
      <h1>Slumpa kapitel</h1>
      <button onClick={handleClick}>Slumpa kapitel</button>
      <div style={{display: myId ? "block" : "none"}}>
        <p>Ett kapitel har slumpats fram!</p>
          <Link
            href="/posts/[slug]"
            as={"/posts/" + myId}
          >
            <a><button>Visa kapitel</button></a>
          </Link>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://attpodda.se/wp-json/wp/v2/posts/?per_page=100')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default Random
