import { useState, useReducer, useEffect, useMemo } from 'react'
import Card from '../components/card'

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
              <Card politico={politico} />
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

📌 Milestone 3: Ottimizzare il rendering delle card con React.memo
Obiettivo: Se la lista filtrata cambia, solo le nuove card devono essere renderizzate, mentre le altre rimangono in memoria senza essere ridisegnate.

*/