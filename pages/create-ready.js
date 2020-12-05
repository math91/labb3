import Head from "next/head"
import Link from "next/link"
import {useContext} from "react"
import {PodContext} from "./_app.js"

function Ready() {
  const {pod, setPod} = useContext(PodContext)
  console.log(pod)

  return(
    <div className="wrapper">
    <h1>Grattis, din podcast är redo!</h1>
    <p>Namn: <b>{pod.name}</b></p>
    <p>Kategori: <b>{pod.category}</b></p>
    <p>Biografi: <b>{pod.bio}</b></p>
    <p>Profilbild:</p>
    <p><img src={pod.img} width="200px" /></p>
    <Link
      href="/"
    >
      <a><button>Tillbaka</button></a>
    </Link>
    </div>
  )
}

export default Ready
