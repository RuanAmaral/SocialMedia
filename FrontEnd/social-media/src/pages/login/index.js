import React from 'react'
import { InputDefault } from '../../components/input/inputDefault';
import { ButtonDefault } from '../../components/button/buttonDefault';
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
        <ButtonDefault Name = "Entrar" OnClick={()=>{alert(`${1+1}`)}}/>

    </div>
  )
}

export default Login