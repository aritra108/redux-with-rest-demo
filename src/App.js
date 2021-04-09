import { useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <Contacts />
      <Form />
    </div>
  );
}

export default App;
