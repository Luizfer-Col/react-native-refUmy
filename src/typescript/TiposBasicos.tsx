export const TiposBasicos = () => {

    const nombre: string | number = 'Luis';
    const edad:number = 29;
    const estaActivo: boolean = true;
    const poderes : string[] = ['Volar', 'Rayo de fuego', 'Invisibilidad']


    return (
        <>
            <h3>Tipos básicos</h3>
            {nombre}, {edad}, {estaActivo?"Ok":"No"}
            <br/>
            {poderes.join(", ")}
        </>
    )
}
