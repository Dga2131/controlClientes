import { Component } from "react";

class Verinfo extends Component{
    render() {
        const { cliente } = this.props
        return (
            <div>
                <p> Plan: {cliente.plan} </p>
            </div>
        )
    }
}

export default Verinfo