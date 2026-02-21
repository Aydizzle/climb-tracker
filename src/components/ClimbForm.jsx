import { useState } from 'react';

function ClimbForm () {

    const [climb, setClimb] = useState('');
    const [grade, setGrade] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/addClimb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ climb, grade, notes}),
        });

        if (response.ok) {
            setClimb('');
            setGrade('');
            setNotes('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={climb}
                onChange={(e) => setClimb(e.target.value)}
                placeholder="Climb name" 
            />
            <input 
                type="text" 
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Grade" 
            />
            <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes"></textarea>
            <button type="submit">Add Climb</button>
        </form>
    )
}

export default ClimbForm;