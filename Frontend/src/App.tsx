import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./navigation/header";
import RegistrationForm from "./views/RegistrationForm";
import Dashboard from "./views/Dashboard";
import HomePage from "./views/Home";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
};

export default App;