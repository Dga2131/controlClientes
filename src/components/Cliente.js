import { Component, react } from "react";
import Foto from './Foto'
import Button from "./Button";
import Modal from "./Modal";
import Verinfo from "./VerInfo";
import axios from 'axios';
import Verhistoria from "./Verhistoria";


const styles = {
    cliente: {
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
    client: {
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

class Cliente extends Component {
    state = {
        esModalVisible: false,
        esModalVisible2: false,
        esModalVisible3: false,
    }

    

    mostrarModal = () => {
        this.setState({ esModalVisible: !this.state.esModalVisible })
    }

    mostrarModal2 = () => {
        this.setState({ esModalVisible2: !this.state.esModalVisible2 })
    }
    
    mostrarModal3 = () => {
        this.setState({ esModalVisible3: !this.state.esModalVisible3 })
    }


    eliminar = () => {
        const { cliente, mostrarCliente } = this.props
        const id = cliente.objectId
        console.log(id)
        axios.delete(`/cliente/${ id }`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            if(res.status == 200){
                console.log('El cliente fue eliminado exitosamente')
            } else {
                console.log(res.message)
            }
        })
        
    }

    render() {
        const { cliente } = this.props
        const { esModalVisible, esModalVisible2, esModalVisible3 } = this.state   

        return (
            <div style={styles.cliente}>
                <ul style={styles.ul}>
                    <li style={styles.client}>
                        <Foto />
                        <p>Nombre: <b>{cliente.nombre} {cliente.apellidoPaterno} {cliente.apellidoMaterno}</b></p>
                        <p>Plan: <b>{cliente.paquete.tipo}</b></p> 
                        <Button onClick={() => this.mostrarModal()}>
                            Ver Info           
                        </Button>
                        <Modal 
                            esModalVisible={esModalVisible} 
                            mostrarModal={this.mostrarModal}
                            foto={<Foto/>} 
                            titulo={cliente.nombre+' '+cliente.apellidoPaterno+' '+cliente.apellidoMaterno}
                            estadoOverlay = {true}
                            >
                            <Verinfo cliente = {cliente}/>
                        </Modal>
                        <Button onClick={() => this.mostrarModal2()}>
                            Historial de Pago
                        </Button >
                        <Modal 
                            esModalVisible={esModalVisible2} 
                            mostrarModal={this.mostrarModal2} 
                            titulo={'Historial de pago: '+cliente.nombre+' '+cliente.apellidoPaterno+' '+cliente.apellidoMaterno} 
                            estadoOverlay = {true}
                            >
                            <Verhistoria cliente = {cliente}/>
                        </Modal>
                        <Button onClick={() => this.mostrarModal3()}>
                            Eliminar
                        </Button>
                        <Modal 
                            esModalVisible={esModalVisible3} 
                            mostrarModal={this.mostrarModal3} 
                            titulo={'¡Advertencia!'}
                            >
                            <p style={styles.p}>¿Estás seguro de eliminar al cliente? </p>
                            <p style={styles.p}>{cliente.nombre} {cliente.apellidoPaterno} {cliente.apellidoMaterno}</p>
                            <Button onClick={() => {this.eliminar(); this.mostrarModal3()}  }  >
                                Eliminar
                            </Button>
                        </Modal>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Cliente