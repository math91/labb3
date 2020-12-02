import Head from 'next/head'
import Link from "next/link"

function About() {
  return (
    <div className="wrapper">
      <Head><title>Om boken</title></Head>
      <h1>Om boken</h1>
      <p>Den här boken är för dig som vill göra podcast. Här får du veta allt om vilken utrustning du behöver, hur du planerar ett avsnitt, hur du publicerar din podcast på nätet och hur du får fler lyssnare. Du får också lära dig om intervjuteknik och hur du kan tjäna pengar på din podcast.</p>
      <p>Har du ingen tidigare erfarenhet av podcastproduktion får du här grunderna. Du som redan poddar lär hitta strategier för att utvecklas.</p>
      <p>Varje vecka lyssnar över en miljon svenskar på podcast och antalet växer stadigt. Podcasten är ett demokratiskt verktyg som möjliggör för fler att göra sin röst hörd. Den här boken vill inspirera dig till att göra din röst hörd.</p>
      <Link href="/">
        <a><button>Tillbaka</button></a>
      </Link>
    </div>
  )
}

export default About
