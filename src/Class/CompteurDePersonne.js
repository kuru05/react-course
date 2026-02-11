import React, { Component } from 'react';

export default class CompteurDePersonne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    Increment = () => {
        this.setState((prevState) => ({
            count: prevState.count < 10 ? prevState.count + 1 : prevState.count
        }));
    }

    Decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count > 0 ? prevState.count - 1 : prevState.count
        }));
    }

    render() {
        return (
            <div>
                {this.props.description && <p>{this.props.description}</p>}

                <p>Nombre de personnes : {this.state.count}</p>

                <button onClick={this.Increment}>Inc.</button>
                <button onClick={this.Decrement}>Déc.</button>

                {this.state.count >= 10 ? <p>La pièce est pleine</p> : null}
            </div>
        );
    }
}