import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [loading, setLoading] = useState(true)
  const [isLongQuote, setIsLongQuote] = useState(false)

  // async function fetchData(){
  //   try{
  //     const res = await fetch("https://type.fit/api/quotes")
  //     const data = await res.json()
  //         const randomIndex = Math.round(Math.random() * data.length)
  //         const randomQuote = data[randomIndex]
  //         setQuote(randomQuote.text)
  //         setAuthor(randomQuote.author)
  //         setIsLongQuote(quote.length > 120 ? true : false)
  //         setIsLoading(false)
  //         console.log("sbdb");
      
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }
  const fetchData = () => {
    setLoading(true)
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then(data => {
        const randomIndex = Math.round(Math.random() * data.length)
        const randomQuote = data[randomIndex]
        setQuote(randomQuote.text)
        setIsLongQuote(quote.length > 120 ? true : false)
        setAuthor(randomQuote.author || "Unknown")
        setLoading(false)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>

      {/* <!-- loader --> */}
      {loading ? <div class="loader" id="loader"></div> :
        <div class="quote-container" id="quote-container">
          {/* <!-- quote --> */}
          <div class="quote-text">
            <i class="fas fa-quote-left"></i>
            <span className={`${isLongQuote ? 'long-quote' : ''}`} id="quote">{quote}</span>
          </div>
          {/* <!-- author --> */}
          <div class="quote-author">
            <div id="author">{author}</div>
          </div>
          {/* <!-- buttons --> */}
          <div class="button-container">
            <button
              onClick={() => {
                const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
                window.open(twitterUrl, '_blank') // open new tab
              }}
              class="twitter-button" id="twitter" title="Tweet This!">
              <i class="fab fa-twitter"></i>
            </button>
            <button
              onClick={() => {
                fetchData()
              }}
              id="new-quote">New Quote</button>
          </div>
        </div>}
    </>
  )
}

export default App


