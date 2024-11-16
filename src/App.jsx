import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { Layout, Typography } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Provider store={store}>
      <Layout style={{ padding: "20px" }}>
        <Header style={{ backgroundColor: "#1890ff", color: "white" }}>
          <Title level={2} style={{ color: "white", textAlign: "center" }}>
            Todo App
          </Title>
        </Header>
        <Content style={{ padding: "20px" }}>
          <TodoForm />
          <TodoList />
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
