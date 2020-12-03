import React, { useState, useEffect, useRef } from "react";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import { getTodos, deleteByTaskId, updateTask } from "../services/api";
import TaskRow from "../components/TaskRow/TaskRow";
import AddTask from "../components/AddTask/AddTask";
import {
  Wrapper,
  RemoveItem,
  TaskContent,
  Image,
} from "./HomepageScreen.styles";
import { HomepageContext } from "../context/HomepageContext";
import imageTik from "./tik.png";

const HomepageScreen = () => {
  const [isContentOpen, setContentOpen] = useState(false);
  const taskContentRef = useRef(null);

  const [singleTask, setSingleTask] = useState({
    title: "",
    isDone: false,
    user: "nijatkarimli",
  });
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  useOutsideAlerter(taskContentRef, () => {
    if (isContentOpen) {
      setContentOpen(false);
    }
  });

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getTodos();
        setTodos(data.filter(x => x.user === "nijatkarimli"));
      } catch (err) {
        setError(err);
      }
    };

    init();
  }, []);

  const handleDelete = taskId => {
    const init = async () => {
      try {
        await deleteByTaskId(taskId);
        const newTaskList = todos.filter(todo => todo.id !== taskId);
        setTodos(newTaskList);
      } catch (err) {
        setError(err);
      }
    };

    init();
  };

  const handleClickUpdate = async e => {
    e.preventDefault();
    setError("");
    console.log(singleTask);
    try {
      await updateTask(singleTask);

      const newTodosList = todos.map(todo => {
        const newTodos = { ...todo };
        if (todo.id === singleTask.id) {
          newTodos.title = singleTask.title;
          newTodos.isDone = singleTask.isDone;
        }
        return newTodos;
      });
      setTodos(newTodosList);
    } catch (err) {
      setError(err);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <HomepageContext.Provider value={{ todos, setTodos }}>
      <Wrapper>
        <h2>Tasks</h2>
        {todos.map((todo, index) => (
          <div key={index}>
            <>
              <TaskRow
                id={index}
                taskTitle={todo.title}
                onClickUpdate={() => {
                  setSingleTask({ ...todo });
                  setContentOpen(prevState => !prevState);
                }}
                onDelete={() => handleDelete(todo.id)}
              />
            </>

            {todo.isDone && (
              <Image src={imageTik} alt="tik" width="20" height="20" />
            )}
            <RemoveItem
              id={todo.id}
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              X
            </RemoveItem>
          </div>
        ))}
        <TaskContent isOpen={isContentOpen} ref={taskContentRef}>
          <h4>{singleTask.title}</h4>
          <form onSubmit={handleClickUpdate}>
            <input
              required
              value={singleTask.title}
              onChange={e => {
                setSingleTask({
                  ...singleTask,
                  title: e.target.value,
                });
              }}
            />
            {singleTask.isDone ? (
              <input
                type="checkbox"
                checked
                onChange={e => {
                  setSingleTask({
                    ...singleTask,
                    isDone: e.target.checked,
                  });
                }}
              />
            ) : (
              <input
                type="checkbox"
                onChange={e => {
                  setSingleTask({
                    ...singleTask,
                    isDone: e.target.checked,
                  });
                }}
              />
            )}

            <button type="submit">Change</button>
          </form>
        </TaskContent>
        <AddTask />
      </Wrapper>
    </HomepageContext.Provider>
  );
};

export default HomepageScreen;
