import "./Colaborador.css"
import { TiDelete } from "react-icons/ti";
import { FaRegHeart,FaHeart  } from "react-icons/fa";



const Colaborador = (props) =>{

    const {nombre, puesto, foto, equipo,id,fav} = props.datos
    const {colorPrimario, eliminarColaborador,like} = props
    return <div className="colaborador">

            <TiDelete onClick={()=>eliminarColaborador(id)} className="eliminar"/>
            <div className="encabezado" style={{backgroundColor:colorPrimario}}>
                <img src={foto} alt={nombre} />
            </div>

            <div className="info">
                <h4> {nombre}</h4>
                <h5>{puesto}</h5>
                
                {
                    //Mostrar favorito o no
                    fav === true ? <FaHeart color="red"  onClick={()=>like(id)}/> : <FaRegHeart  onClick={()=>like(id)}/>

                }
                
                
            </div>

    </div>
}

export default Colaborador