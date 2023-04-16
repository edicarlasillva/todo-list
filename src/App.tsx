import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header'
import { TasksList } from './components/TasksList'

import './styles/global.css'

export interface TasksType {
  id: string;
  title: string;
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TasksType[]>([])

  function handleCreateNewTask(newTaskTitle: string) {
    setTasks((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        title: newTaskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTask(id: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => (
      id !== task.id
    ))

    setTasks(tasksWithoutDeleteOne)
  }

  function handleCompleteTask(id: string) {
    const completeTask = tasks.map(task => { 
      if (task.id === id) {
        return {
          ...task,
          isCompleted: true
        }
      }

      return task
    })

    setTasks(completeTask)
  }

  return (
    <>
      <Header  onCreateNewTask={handleCreateNewTask} />
      <TasksList 
        tasks={tasks} 
        onDelete={deleteTask}
        onComplete={handleCompleteTask}
      />
    </>
  )
}