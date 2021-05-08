import { csv } from 'd3';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import StudentsListPage from './components/StudentsListPage';
import AssignmentsListPage from './components/AssignmentsListPage';
import SingleStudentPage from './components/SingleStudentPage';

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

  const getAssignments = evaluations => [...new Set(evaluations.map(evaluation => evaluation.assignment))];

  const getAverageRatingsForAssignment = assignment => {
    const ratingsForAssignment = evaluations.filter(evaluation => evaluation.assignment === assignment);
    const averageDifficulty = ratingsForAssignment.map(rating => rating.difficulty).reduce((total, currentValue) => total + currentValue, 0) / ratingsForAssignment.length;
    const averageEnjoyability = ratingsForAssignment.map(rating => rating.enjoyability).reduce((total, currentValue) => total + currentValue, 0) / ratingsForAssignment.length;
    return {
      assignment,
      averageDifficulty,
      averageEnjoyability,
    };
  };

  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Menu />
        <Container maxWidth="xl" component="main">
          <Switch>
            <Route exact path="/">
              <HomePage
                evaluations={evaluations}
                getAssignments={getAssignments}
                getAverageRatingsForAssignment={getAverageRatingsForAssignment}
              />
            </Route>
            <Route exact path="/students">
              <StudentsListPage students={students} />
            </Route>
            <Route exact path="/assignments">
              <AssignmentsListPage
                evaluations={evaluations}
                getAssignments={getAssignments}
                getAverageRatingsForAssignment={getAverageRatingsForAssignment}
              />
            </Route>
            <Route exact path="/students/:name">
              <SingleStudentPage students={students} />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;