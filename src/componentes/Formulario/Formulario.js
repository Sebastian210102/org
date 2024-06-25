import { useState } from "react"
import "./Formulario.css"
import Campo   from "../Campo"
import ListaOpciones from "../listaOpciones"
import Boton from "../Boton/Boton"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState ("")  
    const [titulo, acutalizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


    const {registrarColaborador, crearEquipo} = props


    const manejarEnvio = (e) =>{
      e.preventDefault()
      console.log("Manejar Envio")
      let datosAEnviar = {
        nombre,
        puesto,
        foto,
        equipo
      }
      registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEnvio = (e) => {
      e.preventDefault()
      crearEquipo({titulo:titulo, colorPrimario: color})  //se pueden las dos, primero es el nombre del objeto y el segundo es lo que tenemos en el useState
    }

    return <section className="formulario">
         <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresa tu nomnre" 
                required 
                valor = {nombre} 
                actualizarValor={actualizarNombre}
            />

            <Campo 
                titulo="Puesto" 
                placeholder="Puesto de trabajo" 
                required
                valor = {puesto} 
                actualizarValor={actualizarPuesto}
            />

            <Campo
              titulo ="Foto " 
              placeholder="Ingresar enlace de foto" 
              required
              valor = {foto} 
                actualizarValor={actualizarFoto}
             />
            <ListaOpciones 
              valor={equipo} 
              actualizarEquipo={actualizarEquipo}
              Equipos= {props.Equipos}
            />
            
            <Boton>
              Crear
            </Boton>
         </form>

         <form onSubmit={manejarNuevoEnvio}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresa tu titulo" 
                required 
                valor = {titulo} 
                actualizarValor={acutalizarTitulo}
            />

            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor = {color} 
                actualizarValor={actualizarColor}
                type="color"
            />
              <Boton>
                Registrar Equipo
            </Boton>
            </form>
    </section>
}

export default Formulario