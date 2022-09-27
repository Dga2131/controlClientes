import { Component } from "react";
import Pagos from "./Pagos";
import axios from "axios"

class Verhistoria extends Component{
    state = {
        pagos: [],
        id: ''
    }

    componentDidMount() {
        const { cliente } = this.props
        const id = cliente.objectId
        axios.get(`/cliente/pago/${ id }`)
        .then(res => {
          const pagos = res.data;
          this.setState({ pagos });
          console.log(pagos)
        }) 
        
    }

    render() {
        return (
            <div>
                <Pagos 
                    pagos = {this.state.pagos}
                />
            </div>
        )
    }
}

export default Verhistoria