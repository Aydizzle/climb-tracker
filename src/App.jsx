import WallSection from "./components/WallSection"
import './App.css'
import {useState, useEffect} from 'react';

function App() {

  const [walls, setWalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWalls() {
    const response = await fetch('/api/getWalls');
    const data = await response.json();
    setWalls(data.walls);
    setLoading(false);
  }
  
  fetchWalls();
}, []);


  return (
    <div className="app-container">
      <h1>Climb Tracker</h1>
      {loading ? (
        <p>Loading Walls...</p>
      ) : (
        walls.map(wall => (
          <WallSection key={wall.id} wallName={wall.name} />
        ))
      )}
    </div>
  );
}

export default App