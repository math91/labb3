import '../styles/globals.css'
import {useState, createContext} from "react"

export const PodContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const [pod, setPod] = useState({"name": "", "img": "", "bio": "", "category": ""})

  return (
    <PodContext.Provider value={{pod, setPod}}>
      <Component {...pageProps} />
    </PodContext.Provider>
  )
}


export default MyApp
