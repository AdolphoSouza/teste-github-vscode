// Componente Pai
import './App.css'
//Importar o component filho
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExemple from './components/PropsExemple'

function App() {
  

  return (
    <>
      <h1>Hello World React</h1>
      {/* Utilizando o componente importado jsx */}
      <FunctionalComponent/>
      <ClassComponent/>
      {/* dados numericos são passados atraves de{} */}
      <PropsExemple nome="Ana" idade={33}/>
    </>
  )
}

export default App
