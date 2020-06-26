import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavLayout from "./components/NavLayout";
import { AuthProvider } from "./context/auth";

import "antd/dist/antd.css";
import "./App.css";
import AuthRoute from "./utils/AuthRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavLayout />
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
      </Router>
    </AuthProvider>
  );
}

export default App;
