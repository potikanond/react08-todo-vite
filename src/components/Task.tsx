import { type TodoItem } from "../types";

// interface TodoItem {
//   id: string;
//   todoText: string;
//   isDone: boolean;
// }

const decoration = (isDone: boolean) => {
  return isDone ? "line-through" : "";
};

const Task = (props: TodoItem) => {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span style={{ textDecoration: decoration(props.isDone) }}>
        {props.title}
      </span>
      <button className="btn btn-success">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default Task;
