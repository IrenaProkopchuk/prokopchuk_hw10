import React, { useState } from 'react';
import Private from '../Private/Private';

const PrivateRoute = () => {
    const [isAdult, setIsAdult] = useState(false);
    if (!isAdult) {
        return (
            <div>
                <button onClick={() => setIsAdult(true)} >I am over 18 years old</button>
            </div>
        )
    }
    return <Private/>
}

export default PrivateRoute;