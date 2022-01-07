import { useUsuarios } from "../hooks/useUsuarios"
import { Usuario } from "../interfaces/reqRes"

export const Usuarios = () => {

    const{usuarios, cargarUsuarios}=useUsuarios()

    const renderItem = ({id, first_name, last_name, avatar, email}: Usuario)=>{
        return (
            <tr
            key={id.toString()}
            >
                <th>
                    <img 
                    src={avatar} 
                    alt={first_name} 
                    style={{
                        width:35,
                        borderRadius:100
                    }}
                    />
                </th>
                <th>{first_name} {last_name}</th>
                <th>{email}</th>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button 
            className="btn btn-primary"
            onClick={cargarUsuarios}
            >
                Anterior
            </button>
            &nbsp;
            &nbsp;
            <button 
            className="btn btn-primary"
            onClick={cargarUsuarios}
            >
                Siguiente
            </button>
        </>
    )
}
