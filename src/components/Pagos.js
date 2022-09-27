import { Component } from "react";
import Pago from './Pago'

class Pagos extends Component{
    render() {
        const { pagos } = this.props
        return (
            <div>
                {pagos.map((pago) =>
                    <Pago 
                        key={pago.objectId}
                        pago={pago}
                    />
                )}
            </div>
        )
    }
}

export default Pagos