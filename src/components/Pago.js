import { Component, alert } from "react";
import Button from "./Button";
import moment from "moment/moment";
import 'moment/locale/es';
import axios from 'axios';
import Modal from "./Modal";
import { Prev } from "react-bootstrap/esm/PageItem";


const styles = {
    pago: {
        backgroundColor: '#FFF',
        marginTop: 30,
        border: 'solid 1px #333',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3',
        borderRadius: '5px',
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    pag: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '15px 10px',
        borderBottom: 'solid 1px #aaa',
    },
    p: {
        color: ' #ff0000',
        fontWeight: 'bold',
        textAlign: 'center',

    }
}

class Pago extends Component {
    state = {
        
    }

    eliminar = () => {
        const { pago, mostrarpago } = this.props
        const id = pago.objectId
        console.log(id)
        axios.delete(`/cliente/pago/${ id }`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            if(res.status === 200){
                console.log('El pago fue eliminado exitosamente')
            } else {
                console.log(res.message)
            }
        })

        
    }

    render() {
        const { pago } = this.props
        
        return (
            <div style={styles.pago}>
                <ul style={styles.ul}>
                    <li style={styles.pag}>
                        <p>Paquete contratado: <b>{pago.paqueteTipo}</b></p>
                        <p>Pago $: <b>{pago.pago} </b></p>
                        <p>Fecha: <b>{ moment(pago.fecha).format("dddd DD [de] MMMM - HH:mm a")}</b></p>                 
                        <Button onClick={() => this.mostrarModal()}>
                            Imprimir
                        </Button>
                        <Button onClick={()=> {this.eliminar()}}>
                            Eliminar pago
                        </Button>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Pago