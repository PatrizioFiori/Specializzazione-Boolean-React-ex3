import React from "react"


const Card = React.memo(({ politico }) => {
    //onsole.log("Rendering Card for:", politico.name);  // Log ogni volta che il componente viene renderizzato

    return (
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
    )
})

export default Card