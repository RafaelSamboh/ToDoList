import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList() {
    const [listas, setListas] = useState([])

    const Adicionar = lista =>{
        if(!lista.text || /^\s*$/.test(lista.text)){
            return
        }
        const Novo = [lista, ...listas]
        setListas(Novo)
    }

    const aplicarEditar = (listaId, novoValor) => {
      if(!novoValor.text || /^\s*$/.test(novoValor.text)){
        return
    }
      setListas(prev => prev.map(item => (item.id === listaId ? novoValor : item)))
    }

    const remover = id =>{
      const removeArray = [...listas].filter(lista => lista.id !== id)
      setListas(removeArray)
    }

    const completalista = id =>{
      let atualizaLista = listas.map(lista =>{
        if(lista.id === id){
          lista.Completada = !lista.Completada
        }
        return lista
      })
      setListas(atualizaLista)
    }
  return (
    <div>
      <h1>To Do List</h1>
    <TodoForm onSubmit = {Adicionar}/>
    <Todo listas = {listas} completalista = {completalista} remover = {remover} aplicarEditar = {aplicarEditar} />
    </div>
  )
}

export default TodoList