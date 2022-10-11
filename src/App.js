import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Clientes from './components/Clientes'
import Home from './components/Home';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Title from './components/Title';
import axios from 'axios';



class App extends Component {
  state = {
    clientes: [],
    login: false,
  }

  componentDidMount() {
    axios.get(`/cliente`)
    .then(res => {
      const clientes = res.data;
      this.setState({ clientes });
    })  
  }

  render() {
    return (
      <div>
        <NavBar />
        <Layout>
          <Home />
          <Title
             mostarCliente ={this.componentDidMount()}
          />
          <Clientes 
            clientes={this.state.clientes} 
            mostarCliente ={this.componentDidMount()}
          />
        </Layout>
      </div>
    )

  }


}

export default App;
