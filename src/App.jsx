import { useState, useReducer, useEffect, useMemo } from 'react'

const App = () => {

  const [politici, setPolitici] = useState([])
  const [search, setSearch] = useState("")

  const politiciFiltrati = useMemo(() => {
    return politici.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) || p.biography.toLowerCase().includes(search.toLowerCase())
    )
  }, [politici, search]); // si aggiorna solo quando cambia search o politici


  async function fetchAndJson() {
    const res = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/politicians`);
    const data = await res.json();
    setPolitici(data)
    return;
  }

  useEffect(() => {
    fetchAndJson()
  }, [])


  return (
    <>
      <div className="navbar bg-dark py-3 px-4 shadow-sm">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h3 className="text-white mb-0">🌍 POLITICI</h3>
          <input
            type="text"
            className="form-control w-50 w-md-25 ms-3"
            placeholder="🔍 Cerca i politici..."
            value={search}
            style={{ maxWidth: "500px" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>


      <div className='container mt-4'>
        <div className='row g-4'>
          {politiciFiltrati.map(politico => (
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
                  <h6>{politico.country} - {politico.position}</h6>
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
Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.

*/