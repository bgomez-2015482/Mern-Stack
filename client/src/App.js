import React from 'react';

//1 Habilitar routing del proyecto
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORTAR COMPONENTES
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

function App() {
  return (
    // 2 Crear router y switch, definiendo rutas
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/new-account" component={NewAccount} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
