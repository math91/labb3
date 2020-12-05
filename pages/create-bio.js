import Head from "next/head"
import Link from "next/link"
import {useState, useContext} from "react"
import {PodContext} from "./_app.js"

function Notes() {
  const [value, setValue] = useState("")
  const {pod, setPod} = useContext(PodContext)

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleNext() {
    setPod(prevPod => {
      return {
        ...prevPod,
        bio: value
      }
    })
  }

  return (
    <div className="wrapper">
    <Head><title>Biografi</title></Head>
    <h1>Biografi</h1>
    <p>Beskriv din podcast!</p>
      <textarea
      value={value}
      onChange={handleChange}
      />
      <Link
        href="/create-image/"
      >
        <a><button>Tillbaka</button></a>
      </Link>
      <Link
        href="/create-category/"
      >
        <a><button onClick={handleNext}>Nästa</button></a>
      </Link>
    </div>
  )
}

export default Notes
