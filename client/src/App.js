// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';

import Landing from './components/landing/landing';
import SingleCharecter from './components/details/SingleCharecter';

function App() {
  return (
    <Router>
      <Container fluid>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='/' bg='dark'>
            Harry Potter App
          </Navbar.Brand>
        </Navbar>
      </Container>

      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/charecter/:name' exact component={SingleCharecter} />
      </Switch>
    </Router>
  );
}

export default App;
