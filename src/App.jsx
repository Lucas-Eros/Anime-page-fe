import React, { useEffect, useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput'

const BASEURI = 'https://kitsu.io/api/edge/'

function App() {
  const [text, setText] = useState('')
  const [info, setInfo] = useState ({})

  useEffect(() => {
    if(text) {
      setInfo({});
      fetch(`${BASEURI}anime?filter[text]=${text}&page[limit]=12`)
      .then((response) => response.json())
      .then((response) =>{
        setInfo(response)
      })
    }
  }, [text])

  return (
    <>
    <h1 className='title'>Animes</h1>
    <SearchInput value = {text} onChange={(search) => {setText(search)}} />
    {text && !info.data && <span>Loading... </span> }
    {info.data && (
  <ul className='animes-list'>
    {info.data.map((anime) => (
      <li key={anime.id}>
        <img src={anime.attributes.posterImage.small}/>
        {anime.attributes.canonicalTitle}
      </li>
    ))}
  </ul>
)}
    </>
  )
}

export default App
   