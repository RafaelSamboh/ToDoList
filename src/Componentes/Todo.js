import React,{useState} from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'
function Todo({listas, completalista, remover, aplicarEditar}) {
    const [editar,setEditar] = useState({
        id: null,
        value: ''
    })

    const aplicarAtt = value =>{
        aplicarEditar(editar.id, value)
        setEditar({
            id: null,
            value : ''
        })
    }
    if(editar.id){
        return <TodoForm editar = {editar} onSubmit = {aplicarAtt}/>
    }

  return listas.map((lista, index) => (
    <div className = {lista.Completada ? 'lista-completada' : 'lista-not' } key = {index}>
        <div key ={lista.id} onClick = {() => completalista(lista.id)}>
            {lista.text}
        </div>
        <div className='icones'>
            <RiCloseCircleLine onClick={() => remover(lista.id)} className = 'deletar'/>
            <TiEdit onClick={() => setEditar({id : lista.id, value : lista.text})} className = 'editar'/>
        </div>
    </div>
  ))
}

export default Todo