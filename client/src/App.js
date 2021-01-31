import React from 'react';

//1 Habilitar routing del proyecto
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORTAR COMPONENTES
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

import ProjectState from './context/projects/ProjectState';
import WorkState from './context/works/WorkState';

function App() {
  return (
    <ProjectState>
      <WorkState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </WorkState>
    </ProjectState>
  );
}

export default App;
