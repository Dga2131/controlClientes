import { Component } from "react";
import Button from "./Button";

const styles = {
    overlay:{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: 2,
        top: 0,
        left: 0,
        background: 'rgba(0,0,50,0.3)',
    
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container:{
        width: '900px',
        minHeight: '100px',
        maxHeight: '600px',
        background: '#fff',
        position: 'relative',
        bordeRadius: '5px',
        boxShadow: 'rgba(100,100,111, 0.2) 0px 7px 29px 0px',
        padding: '20px',
        color: '#1C236D',
        overflow: 'scroll',
    },
    headersmodal:{
        display: 'flex',
        alignItems: 'center',
        
        marginBottom: '20px',
        paddingBottom: '20px',
        borderBottom: '1px solid #e8e8e8',
    },
    h3: {
        fontWeight: '500',
        fontSize: '16px',
        color: '#1C236D',
    },
    button: {
        position: 'absolute',
        top: '30px',
        right: '30px',

        width: '40px',
        height: '40px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        transition: '.3s ease all',
        borderRadius: '5px',
        color: '#1C236D',
    },
    svg: {
        width: '100%',
        height: '100%',
    },
}

class Modal extends Component{
    render() {
        const { 
            esModalVisible,
            mostrarModal, 
            titulo = 'Alerta', 
            foto
            
        } = this.props
        return( 
            < >
                {esModalVisible &&
                    <div style={styles.overlay}>
                        <div style={styles.container}>
                            <div style={styles.headersmodal}>
                                {foto}
                                <h3 >{titulo}</h3>
                                <Button style={styles.button} onClick={mostrarModal}>
                                    <img src={'/cerrar.ico'} width="20" height="20" />
                                </Button> 
                                {/* <button >
                                    
                                </button> */}
                            </div>
                            <div>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                }
                
            </>
        )
    }
}

export default Modal;



