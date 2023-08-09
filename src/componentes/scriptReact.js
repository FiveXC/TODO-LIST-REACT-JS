import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ComponenteTeste(props) {

function excluir(index){
    props.array.splice(props.index, 1)
    localStorage.setItem('chave', JSON.stringify([...props.array]))
    props.setState( [...props.array])
}

function marcar(){
    if(!props.item.checado){
      props.item.checado = "checado"
      localStorage.setItem('chave', JSON.stringify([...props.array]))
      props.setState( [...props.array])
    }
    else{
      delete props.item.checado 
      localStorage.setItem('chave', JSON.stringify([...props.array]))
      props.setState( [...props.array])
    }

}

return (
<>
     {
        <div className='divDom'>

          <button type = "checkbox" className="checkDom" onClick={()=>{marcar()}}>V</button>     
          <div type = "text" className={`inputDom ${props.item.checado ? 'riscar' : ''}`}>{props.item.nota}</div>
          <button className="botaoDom"  onClick={()=>{excluir()}}><FontAwesomeIcon icon={faTrash}/></button>
      </div>  
    }

</>
 
    );
}

export default ComponenteTeste










    




    








    




    
