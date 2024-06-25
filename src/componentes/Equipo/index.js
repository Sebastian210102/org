import "./equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) =>{
    //Destructuracion

    const { colorPrimario, colorSecuandario, titulo,id} = props.datos
    const {colaboradores, eliminarColaborador,actualizarColor,like }= props


    const obj = {

        backgroundColor: hexToRgba (colorPrimario,0.6)

    }


    //Mostrar lo que tienen algo o no
    return <>
    { 
    colaboradores.length  > 0 && 
        <section className="equipo" style={obj}>
        
        <input
            type ="color"
            className="input-color"
            value={colorPrimario}
            onChange={(evento)=>{
                actualizarColor(evento.target.value,id)
            }}
        />
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
           { 
           
                colaboradores.map((colaborador,index) => <Colaborador datos= {colaborador} 
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador = {eliminarColaborador}
                like={like}
                 />)
           
           }
        </div>

    </section>

        }
        </>
}

export default Equipo