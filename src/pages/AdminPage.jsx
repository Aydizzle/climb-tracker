import { useState, useEffect } from 'react';
import { grades } from '/.const/grades';

function AdminPage() {
    const [walls, setWalls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedWall, setSelectedWall] = useState('');

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
        <div>
            <h1>Admin Page</h1>
        {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem'}}>
          <div className="spinner"></div>
          <p>Loading Walls...</p>
        </div>
      ) : (
        <div>
            <select 
                value={selectedWall}
                onChange={(e) => setSelectedWall(e.target.value)}
            >
                <option value="">Choose a wall</option>
                {walls.map(wall => (
                    <option key={wall.id} value={wall.id}>
                        {wall.name}
                    </option>
                ))}
            </select>
            {selectedWall && (
                <div>
                    {grades.map(grade =>
                        <div key={grade.name}>
                            <label style={{ backgroundColor: grade.color, padding: '5px' }}>{grade.name}</label>
                            <input placeholder='number of climbs' type="number" />
                        </div>
                    )

                    
                    }
                </div>
            )}

        </div>
      )}
      </div>
    );

}

export default AdminPage;