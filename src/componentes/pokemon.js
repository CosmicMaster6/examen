import React, { useEffect,useState } from "react"
import Dialga from "../assets/images/pokemon1_dialga.png"
import Palkia from "../assets/images/pokemon2_palkia.png"
import Giratina from "../assets/images/pokemon3_giratina.png"
import PokemonFragment from "./Fragments/PokemonFragments"
import "../componentes/Fragments/pokemon.css"

const Pokemon = () => {
    return(
        <>
        <body id="bo1">
            <div className="container" >
                <div className="row">
                    <div className="col-12">
                        <h1>Pokedex!</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4" >
                        <PokemonFragment 
                        textoDescripcion={"Un Pokémon de leyenda.Se dice que el tiempo comenzó a avanzar cuando Dialga nació."}
                        imagen={Dialga}
                        titulo="Dialga"
                        tipotitu={"Tipo :"}
                        tipo="Acero Dragón"/>
                        {/*<div className="card" style={{width: "18rem"}}>
                            <img src={Dialga} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dialga</h5>
                                <p className="card-text">Un Pokémon de leyenda.
                                Se dice que el tiempo comenzó a avanzar cuando Dialga nació.</p>
                            </div>
                        </div>*/}
                    </div>
                    <div className="col-4">
                        <PokemonFragment 
                        textoDescripcion={"Se dice que vive en una dimensión espacial paralela. Aparece en la mitología."}
                        imagen={Palkia}
                        titulo="Palkia"
                        tipotitu={"Tipo :"}
                        tipo="Agua Dragón"/>
                    </div>
                    <div className="col-4">
                    <PokemonFragment 
                        textoDescripcion={"Vive en el Mundo Distorsión, un mundo opuesto al nuestro y cuyas leyes desafían el sentido común."}
                        imagen={Giratina}
                        titulo="Giratina"
                        tipotitu={"Tipo :"}
                        tipo="Fantasma Dragón"/>
                    </div>
                </div>
            </div>
        </body>
        </>
    )
}

export default Pokemon
