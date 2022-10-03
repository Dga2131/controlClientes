import { Component } from "react";
import Pagos from "./Pagos";
import Button from "./Button";
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

    agregarPAgo = () => {
        const { cliente } = this.props
        const id = cliente.objectId
        axios.post(`/cliente/pago/${ id }`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.componentDidMount();
        })
    }

    render() {
        return (
            <div>
                <Pagos 
                    pagos = {this.state.pagos}
                />
                <Button onClick={() => {this.agregarPAgo()}}>
                    Agregar pago
                </Button >
            </div>
        )
    }
}

export default Verhistoria