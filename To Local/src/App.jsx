
import "./App.css";
import { useState } from 'react';
import { useEffect } from 'react';
import Inputfile from "./Component/Inputfile";
import Todolist from "./Component/Todolist";
import Footer from "./Component/Footer";


const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
    setIsLoading(false);
  }, []);
 
  
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoading]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, done: false }]);
  };
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const markAsDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = true;
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.done);
    setTodos(updatedTodos);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <span className="heading">😎you have do😎</span>
      <Inputfile todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <Todolist
        todos={todos}
        deleteTodo={deleteTodo}
        markAsDone={markAsDone}
        clearCompleted={clearCompleted}
      />
      <Footer clearCompleted={clearCompleted} />
    </div>
  );
};

export default App;