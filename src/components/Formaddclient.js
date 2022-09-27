import { Component } from "react";
import Button from "./Button";
import axios from 'axios';

class Formaddclient extends Component{
    state = {
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        telefono: "",
        localidad: "",
        colonia: "",
        calle: "",
        numero: "",
        latitud: "",
        longitud: "",
        tipo: "",
        costo: "",
        red: ""
    };


    
    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ 
            [name]: value
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    
        axios.post(`/cliente`, {     
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            apellidoMaterno: this.state.apellidoMaterno,
            telefono: this.state.telefono,
            direccion: { 
                localidad: this.state.localidad,
                colonia: this.state.colonia,
                calle: this.state.calle,
                numero: this.state.numero,
                ubicacion: {
                    latitud: this.state.latitud,
                    longitud: this.state.longitud,
                },
            },
            paquete: { 
                tipo: this.state.tipo,
                costo: this.state.costo,
                red: this.state.red,
            },
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange.bind(this)} required/>
                    </label>
                    <label>
                        Apellido Paterno:
                        <input type="text" name="apellidoPaterno" value={this.state.apellidoPaterno} onChange={this.handleChange.bind(this)} required/>
                    </label>
                    <label>
                        Apellido Materno:
                        <input type="text" name="apellidoMaterno" value={this.state.apellidoMaterno} onChange={this.handleChange.bind(this)} required/>
                    </label>
                    <label>
                        Teléfono:
                        <input type="text" name="telefono" value={this.state.telefono}  onChange={this.handleChange.bind(this)} required/>
                    </label>
                    <fieldset>
                        <legend>Dirección:</legend>
                            <label>
                                Calle:
                                <input type="text" name="calle" value={this.state.calle}  onChange={this.handleChange.bind(this)} required/>
                            </label>
                            <label>
                                No:
                                <input type="text" name="numero" value={this.state.numero}  onChange={this.handleChange.bind(this)} required/>
                            </label>
                            <label>
                                Colonia:
                                <input type="text" name="colonia" value={this.state.colonia}  onChange={this.handleChange.bind(this)} required/>
                            </label>
                            <label>
                                Localidad:
                                <input type="text" name="localidad" value={this.state.localidad}  onChange={this.handleChange.bind(this)} required/>
                            </label>
                    </fieldset>
                    <fieldset>
                        <legend>Ubicación:</legend>
                            <label>
                                Latitud:
                                <input type="text" name="latitud" value={this.state.latitud}  onChange={this.handleChange.bind(this)} required/>
                            </label>
                            <label>
                                Longitud:
                                <input type="text" name="longitud" value={this.state.longitud}  onChange={this.handleChange.bind(this)} required/>
                            </label>
                    </fieldset>
                    <fieldset>
                        <legend>Paquete Contratado:</legend>
                            <label>
                                Tipo:
                                <input type="text" name="tipo" value={this.state.tipo}  onChange={this.handleChange.bind(this)} required/>
                            </label>
                            <label>
                                Costo:
                                <input type="text" name="costo" value={this.state.costo}  onChange={this.handleChange.bind(this)} required/>
                            </label>
                            <label>
                                Red:
                                <input type="text" name="red" value={this.state.red}  onChange={this.handleChange.bind(this)} required/>
                            </label>
                    </fieldset>
                    <Button onClick={() => this.handleSubmit}>
                            Agregar Cliente
                    </Button >
                    <input type="reset" value="Limpiar Formulario" /> 
                </form>
            </div>
        )
    }
}

export default Formaddclient