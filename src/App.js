import "./App.css";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Contacts />
        <Form />
      </div>
    </div>
  );
}

export default App;
