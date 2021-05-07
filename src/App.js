import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import StudentsListPage from './components/StudentsListPage';
import AssignmentsListPage from './components/AssignmentsListPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
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
              <StudentsListPage />
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
