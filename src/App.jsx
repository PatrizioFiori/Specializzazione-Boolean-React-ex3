import React, { useState, useReducer, useEffect } from 'react'

const App = () => {


  const [politici, setPolitici] = useState([])

  async function fetchDataJson(url) {
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
    setPolitici(data)
    return
  }

  useEffect(() => {
    fetchDataJson("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
  }, []); // array vuoto = esegui solo una volta al primo render

  return (
    <>
      <div className='navbar'>
        NAVBAR
      </div>
      <div >
        <ul className='container'>
          {politici.map((item) => (
            <li className='card' key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.image} alt="img" />
              <p><strong>{item.position}</strong></p>
              <p>{item.biography}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App



/*
📌 Milestone 1: Recuperare e visualizzare i dati
Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.
*/