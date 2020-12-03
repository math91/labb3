import Head from "next/head"
import Link from "next/link"
import {useState} from "react"

function Create() {
  const [value, setValue] = useState("")

  function handleChange(event) {
      setValue(event.target.value)
  }

  return (
    <div className="wrapper">
      <Head><title>Skapa podcast</title></Head>
      <h1>Skapa podcast</h1>
      <h2>1. Ange namn</h2>
      <p>
      <label>Podcastens namn:</label> <br />
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
      </p>
      <Link
        href="/"
      >
        <a><button>Tillbaka</button></a>
      </Link>
      <Link
        href="/create-image/"
      >
        <a><button>Nästa</button></a>
      </Link>
    </div>
  )
}


export default Create
