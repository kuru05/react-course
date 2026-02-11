import React from 'react';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        alert("the component was just displayed");
    }

    componentDidUpdate() {
        alert("component was updated");
    }

    componentWillUnmount() {
        alert("le composant va être détruit");
    }

    handleClick = () => {
        this.setState((prevState) => ({
            clicks: prevState.clicks + 1
        }));
    }

    render() {
        return (
            <div>
                <p>{this.props.description}</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}