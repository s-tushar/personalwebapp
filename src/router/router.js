import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from'../components/about';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Projects from '../components/projects';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <About/>
  },
  {
    path: "/experience",
    main: () => <Experience/>
  },
  {
    path: "/skills",
    main: () => <Skills/>
  },
  {
    path: "/projects",
    main: () => <Projects/>
  }
];

export default function AppRouter() {
  return (
    <Router>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>

        <div >
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>

      </div>
    </Router>
  );
}
