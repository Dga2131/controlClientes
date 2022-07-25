import { Component, useState } from "react";

const styles={
    form:{}
}

class Formlogin extends Component{
    render() {
        
        return (
            <div>
                <form>
                    <label>
                        Nombre Usuario:
                        <input 
                            type={'email'}
                            name={'email'}
                            placeholder={'Email'}
                            autoComplete='off'
                          
                        />
                    </label>
                    <label>
                        Contraseña:
                        <input 
                            type={'password'}
                            name={'password'}
                            placeholder={'Contraseña'}
                            autoComplete='off'
                        />
                    </label>
                    <input type={'submit'} value={'Enviar'} />
                </form>
            </div>
        )
    }
}

export default Formlogin