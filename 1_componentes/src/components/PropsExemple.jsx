import React from 'react'

// const PropsExemple = (props) => {
//   return (
//     <div>
//         <h3> olá {props.nome} </h3>
//         <p>Eu tenho {props.idade} anos. </p>
//     </div>
//   )
// }

// export default PropsExemple

// outra forma mais convencional
const PropsExemple = ({nome, idade}) => {
    return (
      <div>
          <h3> olá {nome} </h3>
          <p>Eu tenho {idade} anos. </p>
      </div>
    )
  }
  
  export default PropsExemple