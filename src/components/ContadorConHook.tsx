import { useState } from "react"
import { useContador } from "../hooks/useContador"

export const ContadorConHook = () => {

    const {valor, contar}= useContador(20);

    return (
        <>
           <h3>Contador con hook: <small>{valor}</small></h3> 

           <button 
           className="btn btn-primary"
           onClick={()=>contar(-1)}
           >-1</button>
           &nbsp;
           <button 
           className="btn btn-primary"
           onClick={()=>contar(+1)}
           >
               +1</button>
        </>
    )
}
