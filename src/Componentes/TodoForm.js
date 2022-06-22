import React,{useState, useEffect, useRef} from 'react'
import { v4 as uuid } from 'uuid';


function TodoForm(props) {
    const[input, setInput] = useState(props.editar ? props.editar.value : '')

    const focar = useRef(null)

    useEffect( () => {
      focar.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: uuid(),
            //id: Math.floor(Math.random() * 1000),
            text: input
        })
        
      setInput('') 
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.editar ? (
        <>
        <input type = "text" placeholder='Atualizar' value={input} name = "text" 
        className='todo-input-editar' 
        onChange={handleChange}
        ref = {focar}
        ></input>

        <button className='todo-button-editar'>Atualizar</button>
        </>
        ) :
      
       (
        <>

       <input type = "text" placeholder='Adicione uma tarefa' value={input} name = "text" 
        className='todo-input' 
        onChange={handleChange}
        ref = {focar}
        ></input>

        <button className='todo-button'>Adicionar</button>
        </>
        )}
    </form>
  )
}

export default TodoForm