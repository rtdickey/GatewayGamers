import React from 'react'; // React needed for JSX

/*
    Functional Components (aka: stateless, dumb, presentational)
    1. Use these as much as possible
    2. Absence of 'this' keyword
    3. Solution without using state
    4. Mainly responsible for the UI

    In 2018, Hooks allows for use of state and other React features without writing a class.
*/

function Greet(props) {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}!</h1>
            {props.children}
        </div>
    );
}

// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}!</h1>
//             {props.children}
//         </div>
//     );
// }

export default Greet;