import { Contador } from "./components/Contador";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

 const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a Ts - React</h1>
      <hr/>
      <TiposBasicos />
      <hr/>
      <ObjetosLiterales />
      <hr/>
      <Funciones/>
      <hr/>
      <Contador/>
    </div>
  )
}

export default App;
