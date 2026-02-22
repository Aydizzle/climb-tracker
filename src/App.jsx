import WallSection from "./components/WallSection"
import './App.css'

function App() {
  return (
    <div>
      <h1>Climb Tracker</h1>
      <WallSection wallName="Maria"/>
      <WallSection wallName="Bruny"/>
    </div>
  );
}

export default App