import { Component } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Formaddclient from './Formaddclient'

const styles = {
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
    }
}

class Title extends Component{
    state = {
        esModalVisible: false,
    }

    mostrarModal = () => {
        this.setState({ esModalVisible: !this.state.esModalVisible })
    }

    render(){
        const { esModalVisible } = this.state 
        return(
            <div style={styles.title}>
                <h1>Clientes</h1>
                <Button onClick={() => this.mostrarModal()}>
                    Agregar Cliente
                </Button>
                <Modal 
                    esModalVisible={esModalVisible} 
                    mostrarModal={this.mostrarModal}
                    estadoOverlay = {true}
                    titulo={'Agregar Cliente'}>
                    <Formaddclient />
                </Modal>
            </div>
        )
    }
}

export default Title