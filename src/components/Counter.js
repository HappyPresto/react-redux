import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick = {this.handleIncrement}>Increment me</button>
            </div>
        )
    }

    handleIncrement = () => {
        const {increment} = this.props
        increment()
    }
}

/*function mapStateToProps(state) { // текущее состояние нашего стора
    return {
        counter: state.count
    }
}

const mapToDispatch = {
    dispatchIncrement: increment
}

const decorator = connect(mapStateToProps, mapToDispatch)

export default decorator(Counter)*/

export default connect((state) => ({
    counter: state.count
}), {increment})(Counter)