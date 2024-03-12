import "./Styeall.css";

const Inputfile = ({ todo, setTodo, addTodo }) => {
  const handleInputvalue = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo(''); {/* Fixed typo, changed setTodos to setTodo */}
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
      id="todoInput" 
        value={todo}
        type="text"
        placeholder="😉Today Tasks......"
        className="input_box"
        onChange={handleInputvalue}
      />
      <button className="input_btn" type="submit">
        Task
      </button>
    </form>
  );
};

export default Inputfile;
