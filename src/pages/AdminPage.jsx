import { useState, useEffect } from 'react';

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
            <select>
                <option value="">Choose a wall</option>
            </select>
        </div>
      )}
      </div>
    );

}

export default AdminPage;