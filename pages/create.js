import Head from "next/head"
import Link from "next/link"
import {useState, useContext} from "react"
import {PodContext} from "./_app.js"

function Create() {
  const [value, setValue] = useState("")
  const {pod, setPod} = useContext(PodContext)

  function handleChange(event) {
      setValue(event.target.value)
  }

  function handleClick() {
      setPod(prevPod => {
        return {
          ...prevPod,
          name: value
        }
      })
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
        <a><button onClick={handleClick}>Nästa</button></a>
      </Link>
    </div>
  )
}


export default Create
