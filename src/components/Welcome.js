import React, { Component } from 'react'; //Component needed for class

/*
    Class Components (aka: stateful, dumb, container)
    1. More feature rich
    2. Maintain their own private data (state)
    3. Complex UI Logic
    4. Provide lifecycle hooks
*/

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name} a.k.a. {this.props.heroName}!</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;