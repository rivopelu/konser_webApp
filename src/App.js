import "./App.scss";
import { ToggleTheme } from "./components";
import RouterMain from "./config/Router/RouterMain";

function App() {
  return (
    <div className="App bg-white dark:bg-gray-800 text-gray-700 dark:text-white duration-300">
      <RouterMain />
    </div>

  );
}

export default App;
