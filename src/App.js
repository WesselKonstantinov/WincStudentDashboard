import { csv } from 'd3';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import StudentsListPage from './components/StudentsListPage';
import AssignmentsListPage from './components/AssignmentsListPage';
import SingleStudentPage from './components/SingleStudentPage';
import SingleAssignmentPage from './components/SingleAssignmentPage';
import Footer from './components/Footer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flexGrow: 1,
  },
})

function App() {
  const classes = useStyles();

  const [students, setStudents] = useState([]);
  const [evaluations, setEvaluations] = useState([]);
  const [visibility, setVisibility] = useState({
    difficultyRating: true,
    enjoyabilityRating: true,
  });
  const [lineChartDisplay, setLineChartDisplay] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('./data/students-data.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      setStudents(data.results);
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchEvaluations = async () => {
      const results = await csv('./data/evaluations-data.csv', {
        headers: {
          'Content-Type': 'text/csv',
          'Accept': 'text/csv'
        }
      });
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

  const toggleRatingsVisibility = e => {
    const { name, checked } = e.target;
    setVisibility({
      ...visibility,
      [name]: checked,
    });
  };

  const handleChartDisplay = () => setLineChartDisplay(!lineChartDisplay);

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Menu />
        <Container
          className={classes.main}
          maxWidth="xl"
          component="main"
        >
          <Switch>
            <Route exact path="/">
              <HomePage
                evaluations={evaluations}
                visibility={visibility}
                lineChartDisplay={lineChartDisplay}
                getAssignments={getAssignments}
                getAverageRatingsForAssignment={getAverageRatingsForAssignment}
                toggleRatingsVisibility={toggleRatingsVisibility}
                handleChartDisplay={handleChartDisplay}
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
              <SingleStudentPage
                students={students}
                evaluations={evaluations}
                visibility={visibility}
                lineChartDisplay={lineChartDisplay}
                toggleRatingsVisibility={toggleRatingsVisibility}
                handleChartDisplay={handleChartDisplay}
              />
            </Route>
            <Route exact path="/assignments/:name">
              <SingleAssignmentPage
                evaluations={evaluations}
                visibility={visibility}
                lineChartDisplay={lineChartDisplay}
                toggleRatingsVisibility={toggleRatingsVisibility}
                handleChartDisplay={handleChartDisplay}
              />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;