import { Component } from "react";

class Verinfo extends Component{
    render() {
        const { cliente } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" value={cliente.nombre} readOnly />
                    </label>
                    <label>
                        Apellido Paterno:
                        <input type="text" value={cliente.apellidoPaterno} readOnly />
                    </label>
                    <label>
                        Apellido Materno:
                        <input type="text" value={cliente.apellidoMaterno} readOnly />
                    </label>
                    <label>
                        Teléfono:
                        <input type="text" value={cliente.telefono}  readOnly/>
                    </label>
                    <fieldset>
                        <legend>Dirección:</legend>
                            <label>
                                Calle:
                                <input type="text" value={cliente.direccion.calle} readOnly />
                            </label>
                            <label>
                                No:
                                <input type="text" value={cliente.direccion.numero}  readOnly/>
                            </label>
                            <label>
                                Colonia:
                                <input type="text" value={cliente.direccion.colonia} readOnly />
                            </label>
                            <label>
                                Localidad:
                                <input type="text" value={cliente.direccion.localidad} readOnly />
                            </label>
                    </fieldset>
                    <fieldset>
                        <legend>Ubicación:</legend>
                            <label>
                                Latitud:
                                <input type="text" value={cliente.direccion.ubicacion.latitud} readOnly />
                            </label>
                            <label>
                                Longitud:
                                <input type="text" value={cliente.direccion.ubicacion.longitud} readOnly />
                            </label>
                    </fieldset>
                    <fieldset>
                        <legend>Paquete Contratado:</legend>
                            <label>
                                Tipo:
                                <input type="text" value={cliente.paquete.tipo}  readOnly/>
                            </label>
                            <label>
                                Costo:
                                <input type="text" value={cliente.paquete.costo} readOnly />
                            </label>
                            <label>
                                Red:
                                <input type="text" value={cliente.paquete.red} readOnly />
                            </label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Verinfo


    
  