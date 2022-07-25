import { Component } from 'react';
import Clientes from './components/Clientes'
import Home from './components/Home';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Title from './components/Title';



class App extends Component {
  state = {
    clientes: [
      { name: 'Juan Jimenez', plan: 'Maximun Spiderman', img: '/clientes/jj.jpg' },
      { name: 'Mario Mendez', plan: 'Combo Superman', img: '/clientes/mm.jpg' },
      { name: 'Angela Aguilar', plan: 'Pollo KFC', img: '/clientes/aa.jpg' },
    ],
    login: false,
  }

  async componentDidMount() {
    const response = await fetch('/cliente/index', {
      method: "GET",
      mode: 'cors',
      headers:{
        "Content-Type": "application/json",
      }, 
    });
    console.log(response);
  }
  

  render() {
    return (
      <div>
        <NavBar />
        <Layout>
          <Home />
          <Title />
          <Clientes 
            clientes={this.state.clientes} 
          />
        </Layout>
      </div>
    )

  }


}

export default App;
