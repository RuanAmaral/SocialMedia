import React from 'react'
import { InputDefault } from '../../components/input/inputDefault';

function Login() {
  return (
    <div>
        <InputDefault
        typeI = "text"
        autocomplete = "on"
        value ={null}
        placeholder = "Usuario"
        />
        <InputDefault
        typeI = "password"
        autocomplete = "on"
        value ={null}
        placeholder = "Digite sua senha"/>
    </div>
  )
}

export default Login