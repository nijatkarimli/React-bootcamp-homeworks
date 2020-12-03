import React from "react";
import { Wrapper, TaskItem } from "./TaskRow.styles";
import imageTik from "./tik.png";

const TaskRow = ({ taskTitle, id, onClickUpdate }) => {
  return (
    <Wrapper>
      <TaskItem onClick={() => onClickUpdate(id)}>{taskTitle}</TaskItem>
    </Wrapper>
  );
};

export default TaskRow;
