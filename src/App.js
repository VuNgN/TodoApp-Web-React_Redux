import "./styles.css";
import TodoApp from "./bindings/todoApp";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello VuNgN</h1>
        <h2>Start taking notes to see some magic happen on your life!</h2>
        <TodoApp />
      </div>
    </Provider>
  );
}
