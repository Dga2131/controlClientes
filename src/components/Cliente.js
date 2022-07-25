import { Component } from "react";
import Foto from './Foto'
import Button from "./Button";
import Modal from "./Modal";
import Verinfo from "./VerInfo";
import Formaddclient from "./Formaddclient";

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

    render() {
        const { cliente } = this.props
        const { esModalVisible, esModalVisible2, esModalVisible3 } = this.state   
        return (
            <div style={styles.cliente}>
                <ul style={styles.ul}>
                    <li style={styles.client}>
                        <Foto cliente = {cliente} />
                        <p>Nombre: <b>{cliente.name}</b></p>
                        <p>Plan: <b>{cliente.plan}</b></p> 
                        <Button onClick={() => this.mostrarModal()}>
                            Ver Info           
                        </Button>
                        <Modal 
                            esModalVisible={esModalVisible} 
                            mostrarModal={this.mostrarModal}
                            foto={<Foto cliente = {cliente} />} 
                            titulo={cliente.name} 
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
                            titulo={'Historial de: '+cliente.name} 
                            estadoOverlay = {true}
                            >
                            <Formaddclient />
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
                            <p style={styles.p}>{cliente.name} </p>
                        </Modal>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Cliente