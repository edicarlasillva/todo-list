import { Task } from "../Task";
import { TasksType } from "../../App";

import clipboard from "../../assets/clipboard.svg";

import styles from "./styles.module.css";

interface TasksProps {
  tasks: TasksType[];
  onDelete: (id: string) => void,
  onComplete: (id: string) => void
}

export function TasksList({ tasks, onDelete, onComplete }: TasksProps) {
  const tasksQuantity = tasks.length;
  const tasksQuantityCompleted = tasks.filter(
    (task) => task.isCompleted === true
  ).length;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <strong className={styles.taskCreated}>
            Tarefas criadas <span>{tasksQuantity}</span>
          </strong>
        </div>

        <div>
          <strong className={styles.taskDone}>
            Concluídas
            <span>
              {tasksQuantityCompleted} de {tasksQuantity}
            </span>
          </strong>
        </div>
      </header>

      {tasks.length > 0 ? (
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <Task task={task} key={task.id} onDelete={onDelete} onComplete={onComplete} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyTask}>
          <img src={clipboard} />

          <strong>Você ainda não tem tarefas cadastradas</strong>

          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </div>
  );
}
