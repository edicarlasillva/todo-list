import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import logo from '../../assets/logo-todo.svg'

import styles from './styles.module.css'
import { Task } from '../Task'

interface HeaderProps {
  onCreateNewTask: (newTaskTitle: string) => void
}

export function Header({ onCreateNewTask }:HeaderProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(newTaskTitle)
    setNewTaskTitle('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskTitle(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo To Do" />

      <form className={styles.newTask} onSubmit={handleCreateNewTask}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewTaskChange}
          value={newTaskTitle}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type='submit'>
          Criar
          <PlusCircle size={16} />
        </button>
      </form> 
    </header>
  )
}