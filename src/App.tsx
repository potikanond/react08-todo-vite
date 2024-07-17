import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";

import { TodoItem } from "./types";

function App() {
  const tasks: TodoItem[] = [
    { id: 1, title: "Read a book", isDone: true },
    { id: 2, title: "Take a shower", isDone: false },
    { id: 3, title: "Sleep", isDone: false },
  ];

  return (
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />

        {tasks.map((item) => {
          return <Task key={item.id} {...item} />; // spread operator to pass all props to Task component{...item} />;  // spread operator to pass all props to Task component
        })}

        {/* <Task {...tasks[0]} />
        <Task {...tasks[1]} />
        <Task {...tasks[2]} /> */}
      </div>

      {/* //footer section */}
      <Footer year="2023" fullName="Chayanin Suatap" studentId="12345678" />
    </div>
  );
}

export default App;
