import { Trash } from '@phosphor-icons/react'

import { TasksType } from '../../App'

import styles from './styles.module.css'

interface TaskProps {
  task: TasksType,
  onDelete: (id: string) => void,
  onComplete: (id: string) => void
}

export function Task({ task, onDelete, onComplete }:TaskProps) {
  return (
    <div className={styles.wrapper}>
      <div>
        <form>
          <input type="checkbox" name="" id="" onClick={() => onComplete(task.id)} /> 
          <span className={styles.checkmark}></span>
        </form>      
        <p className={task.isCompleted ? styles.completed : ''}>{task.title}</p>
      </div>
      <button className={styles.deleteTask} onClick={() => onDelete(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}