import './styles.css'
import React, { useState, useEffect, useRef } from 'react';
import ComponenteTeste from './componentes/scriptReact'
//import 'bootstrap/dist/css/bootstrap.css';

function App() {
let [arrayState,setArrayState] =  useState(JSON.parse(localStorage.getItem('chave')) || '')
let input = useRef()

function exibindoInfo(event){
event.preventDefault()

let item = {
  nota: input.current.value
}
input.current.value = ""
localStorage.setItem('chave', JSON.stringify([...arrayState, item]))
setArrayState([...arrayState, item])

}

return (
    <>
  <header>
    <h1>TODO-LIST</h1>
</header>

<main>

        <div className = "mostrarDom">
        
        {
            arrayState.length > 0 ? (

                    arrayState.map(function(item, index, arrayState) {
                      return <ComponenteTeste  item={item} key={index} array={arrayState} index={index} setState= {setArrayState}/>;
              })

           ):('')
        } 

        </div>
        
    <form>

        <div className = "areainputbtn"> 

          <input type = "text" placeholder = "Digite Aqui" className = "input" ref={input}/>
          <button type = "submit" className = "botao" onClick={exibindoInfo}>+</button>

        </div>

    </form>

</main>


    </>
  );
}

export default App;










