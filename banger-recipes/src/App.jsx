import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <main className="Main_container">
        <NavBar />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
