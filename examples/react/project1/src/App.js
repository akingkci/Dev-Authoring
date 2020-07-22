import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';

import MTable from './tables/MaterialTable';
import RTable from './tables/ReactTable';
import AntDTable from './tables/AntDTable';
import MForm from './forms/MaterialUIForm';
import AntDForm from './forms/AntDForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//       </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     just a placeholder link
//       </a>
// </header>


function IndexPage() {
  return (
    <Fragment>
      <h1>A11y exploration of several different React table components.</h1>
      <p>click through the nav links to see 3 different examples....</p>
    </Fragment>
  );
}

function MaterialUIFormPage() {
  return (
    <Fragment>
      <h1>Material UI Form</h1>
      <MForm />
    </Fragment>
  );
}

function MaterialUITablePage() {
  return (
    <Fragment>
      <h1>Material UI Table (no problems)</h1>
      <MTable />
    </Fragment>
  );
}


function AntDFormPage() {
  return (
    <Fragment>
      <h1>Ant Design Form</h1>
      <AntDForm />
    </Fragment>
  );
}

function AntDTablePage() {
  return (
    <Fragment>
      <h1>Ant Design Table</h1>
      <AntDTable />
    </Fragment>
  );
}

function ReactTablePage() {
  return (
    <Fragment>
      <h1>React Table</h1>
      <h2>bad</h2>
      <p>Error: The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.
      WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.HeadersRequired
          &lt;table role="table">&lt;thead>&lt;tr role="row">&lt;th colsp...&lt;/table> (select with "#root > div > main > div:nth-child(2) > table")</p>
      <p>Error: The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.
      Section508.H.MissingHeadersAttrs
          &lt;table role="table"&gt;&lt;thead&gt;&lt;tr role="row"&gt;&lt;th colsp...&lt;/table&gt; (select with "#root &gt; div &gt; main &gt; div:nth-child(5) &gt; table")</p>
      <RTable />
    </Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/material-ui-table">Material UI Table</Link>
            </li>
            <li>
              <Link to="/material-ui-form">Material UI Form</Link>
            </li>
            <li>
              <Link to="/antd-form">Ant Design Form</Link>
            </li>
            <li>
              <Link to="/antd-table">Ant Design Table</Link>
            </li>
            <li>
              <Link to="/react-table">React Table</Link>
            </li>
          </ul>
        </nav>

        <main>

          {/* A <Switch> looks through its children <Route>s and
		  renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/material-ui-form">
              <MaterialUIFormPage />
            </Route>
            <Route path="/material-ui-table">
              <MaterialUITablePage />
            </Route>
            <Route path="/antd-form">
              <AntDFormPage />
            </Route>
            <Route path="/antd-table">
              <AntDTablePage />
            </Route>
            <Route path="/react-table">
              <ReactTablePage />
            </Route>
            <Route path="/">
              <IndexPage />
            </Route>
          </Switch>

        </main>
      </Router>
    </div>
  );
}

export default App;
