import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/TodoSlice";
import { List, Button, Input } from "antd";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleUpdate = (id) => {
    if (newText.trim()) {
      dispatch(updateTodo({ id, newText }));
      setEditingId(null);
      setNewText("");
    }
  };

  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(item) => (
        <List.Item
          actions={[
            editingId === item.id ? (
              <>
                <Button onClick={() => handleUpdate(item.id)} type="primary">
                  Save
                </Button>
                <Button onClick={() => setEditingId(null)}>Cancel</Button>
              </>
            ) : (
              <>
                <Button onClick={() => setEditingId(item.id)}>Edit</Button>
                <Button danger onClick={() => dispatch(deleteTodo(item.id))}>
                  Delete
                </Button>
              </>
            ),
          ]}
        >
          {editingId === item.id ? (
            <Input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="Edit task"
            />
          ) : (
            <span>{item.text}</span>
          )}
        </List.Item>
      )}
    />
  );
};

export default TodoList;
