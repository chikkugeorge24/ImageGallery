import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useRedirect } from 'hookrouter';
import Login from './components/Login';
import Dashboard from './components/DashBoard/DashBoard';
import 'antd/dist/antd.css';
import './App.css';
import './components/Spinner/Spinner.css';

function App() {
  useRedirect("/", "/login");
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}
export default App;
