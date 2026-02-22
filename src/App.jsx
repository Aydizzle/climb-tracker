import ClimbForm from "./components/ClimbForm"
import './App.css'
import logo from './assets/Logo.webp'

function App() {
  return (
    <div className="app-container">
      <img src={logo} alt="Rock It Logo" />
      <h1>Climb Tracker</h1>
      <ClimbForm />

    </div>
  );
}

export default App
