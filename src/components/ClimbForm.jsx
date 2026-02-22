import { useState } from 'react';
import './ClimbForm.css';

function ClimbForm () {

    const [climb, setClimb] = useState('');
    const [grade, setGrade] = useState('');
    const [notes, setNotes] = useState('');
    const [climber, setClimber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/addClimb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ climb, grade, notes, climber}),
        });

        if (response.ok) {
            setClimb('');
            setGrade('');
            setNotes('');
            setClimber('');
        }
    };

    return (
        <form className="climb-form"
        onSubmit={handleSubmit}>
            <input 
                type="text"
                value={climb}
                onChange={(e) => setClimb(e.target.value)}
                placeholder="Climb name"
                required
            />

            <input 
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Grade"
                required
            />

            <select
                value={climber}
                onChange={(e) => setClimber(e.target.value)}
                required
            >
                <option value="">Select climber</option>
                <option value="aidan">Aidan</option>
                <option value="Frances">Frances</option>
            </select>

            <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes"></textarea>
            <button className="submit-button" type="submit">Add Climb</button>
        </form>
    )
}

export default ClimbForm;