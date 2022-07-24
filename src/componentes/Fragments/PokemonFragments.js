import React, {useState, useEffect} from "react"
import Dialga from "../../assets/images/pokemon1_dialga.png"
import Palkia from "../../assets/images/pokemon2_palkia.png"
import Giratina from "../../assets/images/pokemon3_giratina.png"
import "./pokemon.css"

const PokemonFragment = ({imagen, titulo, textoDescripcion, tipotitu, tipo}) => {
    return(
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={imagen} className="card-img-top" alt="..." id="div2" />
                <div className="card-body">
                <h5 className="card-title" id="div1">{titulo}</h5>
                <p className="card-text"id="div2">{textoDescripcion}</p>
                <h5 className="card-title" id="div1">{tipotitu}</h5>
                <p className="card-text" id="div2">{tipo}</p>
                </div>
            </div>
        </>
    )
}

export default PokemonFragment