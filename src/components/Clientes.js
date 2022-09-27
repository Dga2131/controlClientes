import { Component } from "react";
import Cliente from './Cliente'

class Clientes extends Component{
    render() {
        const { clientes } = this.props
        return (
            <div>
                {clientes.map((cliente) =>
                    <Cliente 
                        key={cliente.objectId}
                        cliente={cliente}
                    />
                )}
            </div>
        )
    }
}

export default Clientes