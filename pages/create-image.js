import Head from "next/head"
import Link from "next/link"
import {useState, useContext} from "react"
import {PodContext} from "./_app.js"

function CreateImage() {
  const [img, setImg] = useState("")
  const {pod, setPod} = useContext(PodContext)

  function handleClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      setImg(data.message)
    })
  }

  function handleNext() {
    setPod(prevPod => {
      return {
        ...prevPod,
        img: img
      }
    })
  }

  return (
    <div className="wrapper">
      <Head><title>Skapa podcast- Välj profilbild</title></Head>
      <h1>Skapa podcast</h1>
      <h2>2. Välj profilbild</h2>
      <p><button onClick={handleClick}>Slumpa profilbild</button></p>
      <img src={img} width="600px"/>
      <p>
        <Link
          href="/create/"
        >
          <a><button>Tillbaka</button></a>
        </Link>
        <Link
          href="/create-bio/"
        >
          <a><button onClick={handleNext}>Nästa</button></a>
        </Link>
      </p>
    </div>
  )
}

export default CreateImage
