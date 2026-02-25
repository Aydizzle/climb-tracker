import { useState, useEffect } from 'react';
import { GRADES } from '../constants/grades';

function AdminPage() {
    const [walls, setWalls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedWall, setSelectedWall] = useState('');
    const [gradeCounts, setGradeCounts] = useState({});

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
                style={{ 
                    display: 'block',
                    margin: '0 auto',
                    width: '200px',
                    backgroundColor: 'pink'
                    
                }}
                value={selectedWall}
                onChange={(e) => setSelectedWall(e.target.value)}
            >
                <option value="">Choose a wall</option>
                {walls.map(wall => (
                    <option key={wall.id} value={wall.id}>
                        {wall.name}
                    </option>
                ))}
                <option> I'm a wall </option>
            </select>
            {selectedWall && (
                <div>
                    {GRADES.map(grade =>
                        <div key={grade.name}>
                            <label style={{    
                                background: 
                                    grade.name == 'Wild' ? 'linear-gradient(90deg, red, orange, yellow, green, blue, purple)'
                                    : grade.color, 
                                padding: '5px' }}>
                            {grade.name}</label>
                            <input 
                            placeholder='number of climbs' 
                            type="number"
                            value={gradeCounts[grade.name] || ''}
                            onChange={(e) => setGradeCounts({
                                ...gradeCounts,
                                [grade.name]: e.target.value
                            })}
                            />
                        <button onClick={handleSubmit}>Submit Climbs</button>
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