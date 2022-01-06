import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

//se define el estado inicial
const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};
type LoginPayload ={ username: string, nombre: string  }
type AuthAction = { type: "logout" } | {type: "login", payload: LoginPayload}

//creamos el reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
      case "login":
         const {nombre, username} = action.payload
          return {
              validando: false,
              token: "ABC123",
              nombre,
              username
          }
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
     isLogout()
    }, 1500);
  }, []);
const isLogin = ()=>{
    dispatch({type: 'login', payload: {username: 'DarkAngel', nombre : 'Luis'}})
}
const isLogout = ()=>{
    dispatch({type: 'logout'})
}
  if (validando) {
    return (
      <>
        <h3>Login</h3>

        <div className="alert alert-info">Validando...</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>
      {token ? (
        <>
          <div className="alert alert-success">Autenticado como: {nombre}</div>
          <button className="btn btn-danger" onClick={isLogout}>Logout</button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No Autenticado</div>
          <button className="btn btn-primary" onClick={isLogin}>Login</button>
        </>
      )}
    </>
  );
};
