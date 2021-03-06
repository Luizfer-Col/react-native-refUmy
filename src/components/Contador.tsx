import { useState } from "react"

export const Contador = () => {
    //el tipado en el useState con<> no sie pre es necesario
const [valor, setValor] = useState<number>(10)
    const contar = (numero:number)=>{
        setValor(valor+numero)

    }
    return (
        <>
           <h3>Contador: <small>{valor}</small></h3> 

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
