import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <main className="Main_container">
        <nav></nav>
        <Header />
        <CardList />
      </main>
    </div>
  );
}

export default App;
