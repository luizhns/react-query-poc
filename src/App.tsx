import React from "react";
import { Button, makeToast, ToastContainer } from "junto-design-system";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Button onClick={() => makeToast("success", "Hooray!")}>
          Clique aqui
        </Button>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
