import { useState, useReducer, useEffect, useMemo } from 'react'

const App = () => {

  const [politici, setPolitici] = useState([])

  async function fetchAndJson() {
    const res = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/politicians`);
    const data = await res.json();
    setPolitici(data)
    console.log("Array di politici: ", data);
    console.log("Struttura: ", data[0]);
    return;
  }

  useEffect(() => {
    fetchAndJson()
  }, [])


  return (
    <>
      <div className='navbar bg-dark py-3 px-5 d-flex justify-content-between align-items-center'>
        <h3 className='text-white mb-0'>POLITICI</h3>
        <input
          className="form-control w-25 ms-3"
          type="text"
          placeholder="Cerca i politici..."
        />
      </div>

      <div className='container mt-4'>
        <div className='row g-4'>
          {politici.map(politico => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={politico.id}>
              <div className='card h-100 shadow-sm text-center'>
                <img
                  src={politico.image}
                  className="card-img-top d-block mx-auto"
                  alt="immagine"
                  style={{ height: "250px", width: "200px", objectFit: "cover" }}
                />
                <div className='card-body'>
                  <h5 className="card-title">{politico.name}</h5>
                  <h6>{politico.country} – {politico.position}</h6>
                  <p className="card-text">{politico.biography}</p>
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
Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
❌ Non usare useEffect per aggiornare l’array filtrato.

Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.

*/