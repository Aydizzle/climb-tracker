import { useState } from 'react';

function WallSection({ wallName }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="wall-section">
            <button className="wall-header" onClick={() => setIsOpen(!isOpen)}>
                {wallName} {isOpen ? '▼' : '▶'}
            </button>

            {isOpen && (
                <div className="wall-content">
                    <p>Content goes here - grades will be shown here</p>
                </div>
            )}
        </div>
    );
}

export default WallSection;