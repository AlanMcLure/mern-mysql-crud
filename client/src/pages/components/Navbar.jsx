import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/tasks/new">New Task</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;