import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <nav>
    <Link to={'/'}><div class="sailbar">
        <div class="bar">
        <div></div>
        <div></div>
        <div></div>
        <div></div></div></div></Link>
    <Link to={'/'}>Homepage</Link>
    <Link to={'projects'}>Projects</Link>
    <Link to={'technologies'}>Technologies</Link>
    <Link to={'journey'}>Journey</Link>
    </nav>
    <Outlet />
    </div>
  )
}

export default App
