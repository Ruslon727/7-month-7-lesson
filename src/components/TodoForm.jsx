import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";
import { Input, Button } from "antd";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <Input
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "300px", marginRight: "8px" }}
      />
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};

export default TodoForm;
