import React, { Component } from 'react';

/*
*
    Functional Components (aka: stateless, dumb, presentational)
    1. Use these as much as possible
    2. Absence of 'this' keyword
    3. Solution without using state
    4. Mainly responsible for the UI
*
*/

const Greet = () => <h1>Hello Kevin, Bryce, and Ryan!</h1>;

/*
*
    Class Components (aka: stateful, dumb, container)
    1. More feature rich
    2. Maintain their own private data (state)
    3. Complex UI Logic
    4. Provide lifecycle hooks
*
*/

// class Greet extends Component {
//     render() {
//         return <h1>Hello Kevin, Bryce, and Ryan!</h1>;
//     }
// }

export default Greet;