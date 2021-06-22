// import React, { Component } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// // import logo from './logo.svg';
// import Button from "@material-ui/core/Button";
// import './App.css';
// import Menu from "./Menu"; // <= 作成したメニュー画面を読み込み

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Menu/> 
//       </div>
//     );
//   }
// }

//   export default App;
import React , { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About"; 
import Card from "react-bootstrap/Card";
// import { Avatar } from "@material-ui/core";

export default function App() {
  
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="#">work experience</Link>
          </li>
          <li>
            <Link to="#">skills and competencies</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/topics">
            <Topics />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home(props) {
  // const { classes } = props;
  const styles = {
    drawer: "drawer",
    drawerPaper: "drawerPaper"
  };

  return (
    <div>
      <h2>Home</h2>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}