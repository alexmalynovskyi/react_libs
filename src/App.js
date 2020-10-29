import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const IndexPage = () => {
  return (
    <h3>Home Page</h3>
  );
};

const AboutPage = () => {
  return (
    <h3>About Page</h3>
  );
};

function App() {
  return (
    <section className="App">
      <h1>React routing Example</h1>
      <Router>
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Route  path="/" component={IndexPage} />
        <Route  path="/about" component={AboutPage} />
      </Router>
    </section>
  );
}

export default App;
