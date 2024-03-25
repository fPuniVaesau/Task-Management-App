import styles from './ListItems.module.css';

export default function ListItems({
  taskItem,
  taskList,
  setTaskList,
  setTaskItem,
  taskCount,
  setTaskCount,

}) {
  let handleDelete = (task) => {
    setTaskList(taskList.filter((taskInList) => taskInList !== task));
    setTaskCount(taskCount - 1);
    console.log(task);
  };

  let handleTaskComplete = (taskName) => {
    let mapped = taskList.map((object) =>
      taskName === object.name
        ? { ...object, taskComplete: !object.taskComplete }
        : object
    );
    setTaskList(mapped);
  };

  return (
    <div className={styles.wrapper}>
      {taskList.map((task) => (
        <div className={styles.taskContainer}>
          <p key={task.name} className={styles.taskTitle}>
            <span className={task.taskComplete ? styles.toggleComplete : ''}>
              {task.name}
            </span>
          </p>

          <div className={styles.buttonContainer}>
            <button
              className={styles.completeAndClose}
              onClick={() => {
                handleTaskComplete(task.name);
              }}
            >
              Complete
            </button>
            <button
              className={styles.completeAndClose}
              onClick={() => {
                handleDelete(task);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
