import Head from "next/head"
import Link from "next/link"
import {useState} from "react"

function CreateImage() {
  const [img, setImg] = useState("")

  function handleClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      setImg(data.message)
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
          href="/create-image/"
        >
          <a><button>Nästa</button></a>
        </Link>
      </p>
    </div>
  )
}

export default CreateImage
