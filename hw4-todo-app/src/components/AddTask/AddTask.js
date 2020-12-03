import React, { useState, useContext } from "react";
import { HomepageContext } from "../../context/HomepageContext";
import { addNewTask, getTodos } from "../../services/api";
import { FormContainer, ButtonSubmit, FormInput } from "./AddTask.styles";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    isDone: false,
    user: "nijatkarimli",
  });
  const [error, setError] = useState("");
  const { setTodos } = useContext(HomepageContext);

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");

    try {
      await addNewTask(task);
      const { data } = await getTodos();
      setTodos(data.filter(x => x.user === "nijatkarimli"));
    } catch (err) {
      setError(err);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          required
          name="title"
          placeholder="Enter Task"
          value={task.title}
          onChange={event => {
            setTask({
              ...task,
              title: event.target.value,
            });
          }}
        />
        <ButtonSubmit type="submit">Add Task</ButtonSubmit>
      </FormContainer>
    </div>
  );
};

export default AddTask;
