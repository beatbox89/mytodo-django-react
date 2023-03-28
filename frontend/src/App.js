import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Headers from "./component/Headers";
import MainPage from "./pages/MainPage";
import Todo from "./pages/Todo";

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Headers />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<Todo />} />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
