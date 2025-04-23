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
      <div className="navbar bg-dark text-white p-3">
        NAVBAR
      </div>
      <div className="container text-center mt-4">
        <div className="row">
          {politici.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.image}
                  className="card-img-top mx-auto d-block"
                  alt="img"
                  style={{ width: '100%', height: 'auto' }}
                />                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text"><strong>{item.position} - {item.country}</strong></p>
                  <p className="card-text">{item.biography}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )

}

export default App



/*
📌 Milestone 1: Recuperare e visualizzare i dati
Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

📌 Milestone 2: Implementare la ricerca ottimizzata
Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.
- Aggiungere campo di ricerca (<input type="text">)
- Filtrate in base a nome o bio (Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.)


Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
❌ Non usare useEffect per aggiornare l’array filtrato.

Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.
*/