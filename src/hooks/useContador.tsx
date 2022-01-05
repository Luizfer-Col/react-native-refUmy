import { useState } from "react"

export const useContador = (inicial:number = 10) => {
    const [valor, setValor] = useState<number>(inicial)
    const contar = (numero:number)=>{
        setValor(valor+numero)
    }

    return {
        valor,
        contar
    }
}
