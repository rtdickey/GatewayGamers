import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    // updateCountWithProps() {
    //     this.setState((prevState, props) => (
    //         { count: prevState.count + parseInt(props.addValue) }
    //     ));
    // }

    increment() {
        /* This version of using setState when called back to back 5 times by incrementFive, only updates the state one time to improve performance */
        // this.setState({
        //     count: this.state.count + 1
        // });
        // console.log(this.state.count); //set state is asynchronous. callback example to show fix in decrement function

        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }
    
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    decrement() {
        // this.setState({
        //     count: this.state.count - 1
        // }, () => { console.log('Callback value', this.state.count)});
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    decrementFive() {
        this.decrement();
        this.decrement();
        this.decrement();
        this.decrement();
        this.decrement();
    }

    resetToZero() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <div>
                    <h3>Without Props</h3>
                    <button onClick={() => this.decrementFive()}>-5</button>
                    <button onClick={() => this.decrement()}>-1</button>
                    <button onClick={() => this.increment()}>+1</button>
                    <button onClick={() => this.incrementFive()}>+5</button>
                    <button onClick={() => this.resetToZero()}>Reset</button>
                </div>
                {/* <div>
                    <h3>Props</h3>
                    <button addValue="-5" onClick={() => this.updateCountWithProps()}>-5</button>
                    <button addValue="-1" onClick={() => this.updateCountWithProps()}>-1</button>
                    <button addValue="1" onClick={() => this.updateCountWithProps()}>+1</button>
                    <button addValue="5" onClick={() => this.updateCountWithProps()}>+5</button>
                    <button onClick={() => this.resetToZero()}>Reset</button>
                </div> */}
            </div>
        )
    }
}

export default Counter