import { Component } from "react";

const styles ={
    logo:{
        fontWeight: '700',
        fontSize: '2rem'
    }
}

class Logo extends Component{
    render() {
        return(
            <div style={styles.logo}>
                Control de Clientes
            </div>
        )
    }
}

export default Logo