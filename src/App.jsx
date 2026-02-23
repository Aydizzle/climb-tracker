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
        <div style={{ textAlign: 'center', padding: '2rem'}}>
          <div className="spinner"></div>
          <p>Loading Walls...</p>
        </div>
      ) : (
        walls.map(wall => (
          <WallSection key={wall.id} wallName={wall.name} />
        ))
      )}
      <WallSection wallName="Wallly" />
    </div>
  );
}

export default App