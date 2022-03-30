import React from 'react'
// This is a React Router v6 app
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Our components
import HomePage from './components/HomePage/HomePage';
import FeedPage from './components/FeedPage/FeedPage';

// Import our context and wrapp by it the Switch
import AppState from './context/AppState';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/feed">Feed</Link>
              </li>
            </ul>
          </nav>
        <AppState>
          <Routes>
            <Route path='/home' element={ <HomePage/> }/>
            <Route path='/feed' element={ <FeedPage/> }/>
          </Routes>
        </AppState>
      </Router>
    </div>
  )
}

export default App