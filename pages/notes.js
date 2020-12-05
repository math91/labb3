import Head from "next/head"
import Link from "next/link"
import {useState, useEffect} from "react"

function Notes() {
  const [value, setValue] = useState("")

  function handleChange(event) {
    setValue(event.target.value)
    console.log(value)
  }

  function handleClick() {
    localStorage.setItem("note", value);
  }

  useEffect(() => {
    const data = localStorage.getItem('note')
    setValue(data)
  }, [])

  return (
    <div className="wrapper">
    <Head><title>Anteckningar</title></Head>
    <h1>Anteckningar</h1>
      <textarea
      value={value}
      onChange={handleChange}
      />
      <button onClick={handleClick}>Spara</button>
      <h1>Dina anteckningar:</h1>
      <p>{value}</p>
      <Link
        href="/"
      >
        <a><button>Tillbaka</button></a>
      </Link>
    </div>
  )
}

export default Notes
