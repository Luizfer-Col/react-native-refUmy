interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion

}

interface Direccion {
    pais: string;
    codigoPostal: number
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Luis',
        edad: 29,
        direccion: {
            pais: 'Colombia',
            codigoPostal: 53007
        }
    }


    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
