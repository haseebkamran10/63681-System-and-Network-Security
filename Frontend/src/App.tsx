import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./navigation/header";
import RegistrationForm from "./views/RegistrationForm";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </main>
    </>
  );
};

export default App;