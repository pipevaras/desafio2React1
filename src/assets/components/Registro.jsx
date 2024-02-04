import React from 'react'
import { useState } from 'react'
import Formulario from './Formulario'
import { SocialButton } from './SocialButton'
import './Registro.css'

const Registro = () => {
  const socialIcons = ['twitter', 'facebook', 'github']
  return (
    <>
      <div className="registro">
        <h1>Crea una cuenta</h1>
        <SocialButton icons={socialIcons} />
        <h6>O usa tu email para registrarte</h6>
        <Formulario></Formulario>
      </div>
    </>
  )
}

export default Registro
