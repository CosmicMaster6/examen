import React, {useState, useEffect} from "react"
import "./ML.css"

const RecomendacionFragment = ({titulo, children, tipoAlerta}) => {
    return(
        <>
            <div className={`alert ${tipoAlerta}`} role="alert" id="div">
                <h4 className="alert-heading" id="titulo">{titulo}</h4>
                <p>{children}</p>
            </div>
        </>
    )
}

export default RecomendacionFragment