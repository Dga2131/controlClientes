import { Component } from "react";

const styles = {
    foto: {
        marginTop: 30,
    }
}

class Foto extends Component {
    render() {
        const { cliente } = this.props
        return(
            <div style={styles.foto}>
                <img alt={cliente.name} src={cliente.img} width="100" height="100" />
            </div>
        )
    }
}

export default Foto