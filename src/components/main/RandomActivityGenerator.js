import React from 'react';
import { NIGHTLIFE } from '../../data/activities';

function RandomActivityGenerator() {
    const [activity, setActivity] = React.useState(undefined);

    function shuffleActivities() {
        // 0 -> 10
        // Math.floor(Math.random() * 11); 
        let randomNumber = Math.floor(Math.random() * NIGHTLIFE.length);
        console.log(randomNumber);
        console.log(NIGHTLIFE[randomNumber]);
        setActivity(NIGHTLIFE[randomNumber]);
    }

    return (
        <div>
            {activity ? (
                <h3>{activity?.action} {activity?.name}</h3> 
            ) : (
                <h3>Please roll the dice to display a random activity suggestion.</h3>
            )}
            <button onClick={() => shuffleActivities()}>the dice</button>
        </div>
    );
}

export default RandomActivityGenerator;