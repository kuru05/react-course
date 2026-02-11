import React, { Component } from 'react';

export default class GuessNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetNumber: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
            message: null,
            guess: ''
        };
    }

    handleInput = (e) => {
        const userGuess = parseInt(e.target.value, 10);

        this.setState({ guess: e.target.value });

        if (isNaN(userGuess)) {
            this.setState({ message: '' });
            return;
        }

        if (userGuess > this.state.targetNumber) {
            this.setState({ message: "Le nombre est plus petit" });
        } else if (userGuess < this.state.targetNumber) {
            this.setState({ message: "Le nombre est plus grand" });
        } else {
            this.setState({ message: "C'est juste !" });
        }
    }

    resetGame = () => {
        this.setState({
            targetNumber: Math.floor(Math.random() * 100) + 1,
            message: null,
            guess: ''
        });
    }

    render() {
        return (
            <div className="guess-number-game">
                <p>Devinez le nombre (entre 1 et 100)</p>
                <input
                    type="number"
                    value={this.state.guess}
                    onInput={this.handleInput}
                    placeholder="Entrez un nombre"
                    className="guess-input"
                />

                {this.state.message && (
                    <p className={`message ${this.state.message === "C'est juste !" ? "success" : "info"}`}>
                        {this.state.message}
                    </p>
                )}

                {this.state.message === "C'est juste !" && (
                    <button onClick={this.resetGame} style={{ marginTop: '10px' }}>Rejouer</button>
                )}
            </div>
        );
    }
}
