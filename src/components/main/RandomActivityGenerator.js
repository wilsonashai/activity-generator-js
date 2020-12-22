import React from 'react';

function RandomActivityGenerator() {
    const [activity, setActivity] = React.useState(undefined);

    return (
        activity ? (
            <h3>{activity}</h3> 
        ) : (
           <h3>Please roll the dice to display a random activity suggestion.</h3>
        )
    );
}

export default RandomActivityGenerator;