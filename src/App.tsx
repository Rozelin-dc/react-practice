import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Router>
          <Routes>
            <Route exact path="/"></Route>
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}
