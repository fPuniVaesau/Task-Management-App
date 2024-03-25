import styles from './TestForm.module.css';

export default function TestForm({
  setTaskItem,
  taskItem,
  setTaskList,
  taskList,
  taskCount,
  setTaskCount,
}) {
  let handleInput = (e) => {
    setTaskItem({ name: e.target.value, taskComplete: false });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (taskItem.name !== '') {
      setTaskList([...taskList, taskItem]);
      setTaskCount(taskCount + 1);
    } else {
      console.log('Please add task');
    }
    setTaskItem({ name: '', taskComplete: false });
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor=''>🧩</label>
        <input
          className={styles.inputField}
          type='text'
          onChange={handleInput}
          value={taskItem.name}
          placeholder='What tasks do we have today?'
        />
        <button className={styles.submitButton}>+</button>
      </form>
    </div>
  );
}
