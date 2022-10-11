import { Component } from "react";
import Pago from './Pago'

class Pagos extends Component{
    render() {
        const { pagos, mostrarpago } = this.props
        return (
            <div>
                {pagos.map((pago) =>
                    <Pago 
                        key={pago.objectId}
                        pago={pago}
                        mostrarpago={mostrarpago}
                    />
                )}
            </div>
        )
    }
}

export default Pagos