import { useState } from 'react';

function WallSection({ wallName }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {wallName} {isOpen ? '▼' : '▶'}
            </button>

            {isOpen && (
                <div>
                    <p>Content goes here - grades will be shown here</p>
                </div>
            )}
        </div>
    );
}

export default WallSection;