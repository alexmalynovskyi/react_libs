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

const UsersPage = () => {
  return (
    <>
      <h3>Users Page</h3>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </>
  );
};

// const UserPage = () => {
//   return (
//     <h3>User Page</h3>
//   );
// };

// const UserPage = ({ match, location }) => {
//   return (
//     <>
//       <p>
//         <strong>Match Props: </strong>
//         <code>{JSON.stringify(match, null, 2)}</code>
//       </p>
//       <p>
//         <strong>Location Props: </strong>
//         <code>{JSON.stringify(location, null, 2)}</code>
//       </p>
//     </>
//   );
// };

// const UserPage = ({ match }) => {
//   const { params: { userId } } = match;

//   return (
//     <>
//       <p>
//         <strong>User ID: </strong>
//         {userId}
//       </p>
//       <p>
//         <strong>User Name: </strong>
//         {users[userId - 1].name}
//       </p>
//     </>
//   );
// };

const users = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
];

function App() {
  return (
    <section className="App">
      <h1>React routing Example</h1>
      <Router>
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/users" className="link">Users</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/users" component={UsersPage} />
        {/* <Route exact path="/user/:userId" component={UserPage} /> */}
      </Router>
    </section>
  );
}

export default App;
