import React from 'react'


const JsxExemples = () => {
  const username = "João";
  const user = {
   name :"Jose",
   lastname :"Souza"
  }
  const userLogado = false;
  const userChecar = "admin";
  const users = [
    {id:1, name:"João"},
    {id:2, name:"Pedro"},
    {id:3, name:"Maria"},
  ];
    
  return (
    <div>
      <h2>Conteudo que o usuario vai ver</h2>
        {/* listando dados do usuario */}
        <p>Ususario {username}</p>
        <p>usuario {user.name} {user.lastname} </p>
        <p>{2+2}</p>
        
        {/* diferença de html */}
        
        <div className="test">ok</div>
        <button onClick={()=>(alert("teste"))}>clique em min</button>
         <input type="text" placeholder='digite aqui' />

        {/* renderização condicional */}
       { userLogado ? (
       <div>
        <p>Esta logado</p>
        </div>
        ):(
        <p>Não esta logado</p>) }

        <p>{userChecar === "admin" && <p> Você é um admin</p> }</p>

      <div>
        <ul>
          {users.map((user)=>(
            <li key={user.id}>
              {user.id}-{user.name}
            </li>
          )

          )

          }
        </ul>

      </div>

    </div>
    
  )
}

export default JsxExemples