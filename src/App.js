import { csv } from 'd3';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import StudentsListPage from './components/StudentsListPage';
import AssignmentsListPage from './components/AssignmentsListPage';

function App() {
  const [students, setStudents] = useState([]);
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('./data/students-data.json');
      const data = await response.json();
      setStudents(data.results);
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchEvaluations = async () => {
      const results = await csv('./data/evaluations-data.csv');
      const data = results.map(result => ({
        student: result.student,
        assignment: result.assignment,
        difficulty: +result.difficulty,
        enjoyability: +result.enjoyability,
      }));
      setEvaluations(data);
    };
    fetchEvaluations();
  }, []);

  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Menu />
        <Container fixed component="main">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/students">
              <StudentsListPage students={students} />
            </Route>
            <Route exact path="/assignments">
              <AssignmentsListPage />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
