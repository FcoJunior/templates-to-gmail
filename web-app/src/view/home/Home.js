import React from 'react';

const click = () => {
    window.parent.postMessage({
        action: 'WriteTemplate',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, '*');
}

const Home = () => {
    return(
        <div>
            <button onClick={click}>Click here</button>
        </div>
    )
}

export default Home;