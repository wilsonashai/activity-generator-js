import React from 'react';
import _ from 'lodash';
import { NIGHTLIFE } from '../../data/activities';

function RandomActivityGenerator() {
    const [activity, setActivity] = React.useState(undefined);

    function shuffleActivities() {
        let randomNumber = _.random(NIGHTLIFE.length-1);
        // might only need 1 random number? roll 7, then just count down or up?
        // add previously rolled numbers
        console.log(randomNumber);
        console.log(NIGHTLIFE[randomNumber]);
        setActivity(NIGHTLIFE[randomNumber]);
    }

    return (
        <div>
            {activity ? (
                <h3>{activity.action} {activity.name}</h3> 
            ) : (
                <h3>Please roll the dice to display a random activity suggestion.</h3>
            )}
            <button onClick={() => shuffleActivities()}>the dice</button>
        </div>
    );
}

export default RandomActivityGenerator;