import TestForm from './TestForm';
import ListItems from './ListItems';
import { useState } from 'react';
import styles from './Top.module.css';

export default function Top() {
  const [taskItem, setTaskItem] = useState({ name: '', taskComplete: false });
  const [taskList, setTaskList] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>💣 Tasks</h1>
        <p className={styles.counter}>Pending Items: {taskCount}</p>
      </div>

      <TestForm
        taskItem={taskItem}
        setTaskItem={setTaskItem}
        setTaskList={setTaskList}
        taskList={taskList}
        taskCount={taskCount}
        setTaskCount={setTaskCount}
      />
      <ListItems
        className={styles.test}
        taskItem={taskItem}
        setTaskItem={setTaskItem}
        taskList={taskList}
        setTaskList={setTaskList}
        taskCount={taskCount}
        setTaskCount={setTaskCount}
      />
    </div>
  );
}
