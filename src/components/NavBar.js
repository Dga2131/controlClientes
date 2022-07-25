import { Component } from "react";
import Logo from './Logo'
import Button from './Button'
import Modal from "./Modal";
import Formlogin from "./Formlogin"

const styles = {
    navbar: {
        
        background: 'linear-gradient(90deg, rgba(20,25,78,1) 0%, rgba(164,170,232,1) 35%, rgba(255,255,255,1) 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.7)',
    }
}

class NavBar extends Component {
    state = {
        esModalVisible: false,
    }

    mostrarModal = () => {
        this.setState({ esModalVisible: !this.state.esModalVisible })
    }

    render() {  
        const { esModalVisible } = this.state    
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Button onClick={() => this.mostrarModal()}>
                    Iniciar Sesión
                </Button>
                <Modal 
                    esModalVisible={esModalVisible} 
                    mostrarModal={this.mostrarModal}
                    estadoOverlay = {true}
                    titulo={'Iniciar Sesión'}>
                    <Formlogin />
                </Modal>
            </nav>
        )
    }
}

export default NavBar