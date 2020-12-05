import Head from "next/head"
import Link from "next/link"
import {useState, useContext} from "react"
import {PodContext} from "./_app.js"

function Notes() {
  const [value, setValue] = useState("Okategoriserad")
  const {pod, setPod} = useContext(PodContext)

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleNext() {
    setPod(prevPod => {
      return {
        ...prevPod,
        category: value
      }
    })
  }

  return (
    <div className="wrapper">
    <Head><title>Kategori</title></Head>
    <h1>Kategori</h1>
    <p>Ange kategori:</p>
    <p>
      <select value={value} onChange={handleChange}>
        <option value="Okategoriserad">Okategoriserad</option>
        <option value="Humor">Humor</option>
        <option value="Samhälle">Samhälle</option>
        <option value="Kultur">Kultur</option>
        <option value="Sport">Sport</option>
      </select>
    </p>
      <Link
        href="/create-bio/"
      >
        <a><button>Tillbaka</button></a>
      </Link>
      <Link
        href="/create-ready/"
      >
        <a><button onClick={handleNext}>Nästa</button></a>
      </Link>
    </div>
  )
}

export default Notes
