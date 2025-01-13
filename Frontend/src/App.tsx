import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./navigation/header";
import RegistrationForm from "./views/RegistrationForm";

const App: React.FC = () => {
    return (
      <>
        <Header />
        <main className="pt-16">
        </main>
      </>
    );
  };
  

export default App;
