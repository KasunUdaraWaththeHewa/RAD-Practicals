import React, { useState } from 'react';

function Toggle(){
    const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };
    return(
        <div>
            <button onClick={handleToggle}>
                {isOn ? 'ON' : 'OFF'}
            </button>
            {isOn && <p>The toggle is ON.</p>}
            {!isOn && <p>The toggle is Off.</p>}
        </div>
    );
}
export default Toggle;