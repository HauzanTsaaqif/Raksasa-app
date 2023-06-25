import '../CSS/clock.css';
import React, { useState } from 'react';

import imgClock from '../assets/materi/clock_img.svg';

function ClockItem({ selectedHour, onHourChange }) {
    const [rotationAngle, setRotationAngle] = useState(0);

    const handleRangeChange = (event) => {
        const angle = parseInt(event.target.value, 10);
        const roundedAngle = Math.round(angle / 30) * 30; // Menggunakan 30 sebagai faktor magnet
        setRotationAngle(roundedAngle);
        const hours = Math.floor((roundedAngle / 360) * 12);
        onHourChange(hours);
    };

    return (
        <div className="clock">
            <img src={imgClock} alt="" />
            <div className="hour-hand" style={{ transform: `rotate(${rotationAngle}deg)` }}></div>
            <h1 className="selected-hour">Jam :</h1>
            <input
                type="range"
                min="0"
                max="360"
                value={rotationAngle}
                onChange={handleRangeChange}
                className="rotation-range"
            />
        </div>
    );
}

export default ClockItem;
