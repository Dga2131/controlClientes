import { Component } from "react";

const styles = {
    layout:{
        backgroundColor: '#fff',
        color: '#1C236D',
        alignItems: 'center',
        display: 'flex',
        flexDirection:'column',
        margin: '50px',
        paddin: '20px'
    },
    container:{
        width: '100%',
        

    }
}

class Layout extends Component {
    render(){
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout