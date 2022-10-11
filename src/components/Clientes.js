import { Component } from "react";
import Cliente from './Cliente'

class Clientes extends Component{
    render() {
        const { clientes, mostrarCliente } = this.props
        return (
            <div>
                {clientes.map((cliente) =>
                    <Cliente 
                        key={cliente.objectId}
                        cliente={cliente}
                        mostrarCliente={mostrarCliente}
                    />
                )}
            </div>
        )
    }
}

export default Clientes