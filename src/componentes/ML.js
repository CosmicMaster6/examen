import React, {useState, useEffect} from "react"
import RecomendacionFragment from "./Fragments/MLFragment"
import Granger from "../assets/images/imagengranger.jpg"
import Clint from "../assets/images/imagenclint.jpg"
import "../componentes/Fragments/ML.css"

const Recomendaciones = () => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Personajes de Mobile Legends</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <RecomendacionFragment
                         titulo={"Clint"}
                         tipoAlerta="alert-danger">
                            Nadie sabe de dónde viene ni por qué lucha, pero todos en el Yermo entienden
                             que es lo más parecido a la justicia que existe por estos lares. Incluso el más
                              audaz de los ladrones no osaría enfrentarse a Clint y sus revólveres. Con sus reflejos felinos y 
                              su precisión inaudita es capaz de llenar de plomo a sus enemigos antes de que éstos puedan siquiera pestañear.
                               Solo desenfunda sus pistolas para lo que él
                             considera causas justas, pero cuando lo hace, no hay villano quién escape a sus cañones justicieros.
                         <br/>
                         <img src={Clint} alt="Clint" width={"600em"}/>
                        </RecomendacionFragment>
                    </div>

                    <div className="col-6">
                        <RecomendacionFragment
                        titulo={"Granger"}
                        tipoAlerta="alert-success">
                           La habilidad y la precisión que tenía con su arma podía interceptar cualquier enemigo e incluso causar
                            enormes daños. El peligro no representaba un reto para él, ya que podía cumplir cualquier tarea
                             rápidamente. Su desempeño lo hizo uno de los cazadores más conocidos en todo el Imperio de Moniya
                              y el tirador invencible de la Tierra del Amanecer. Los demonios al escuchar la melodía de
                               su violín huían a toda prisa, ya que les esperaba una muerte dolorosa.                  
                            <br/>
                            <img src={Granger} alt="Granger" width={"600em"}  height={"397em"} />
                        </RecomendacionFragment>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Recomendaciones