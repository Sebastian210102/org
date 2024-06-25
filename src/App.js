import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';
import Colaborador from './componentes/Colaborador/index.js';
import Footer from './componentes/Footer/index.jsx';

console.log(Header);


function App() {
  const [mostrarFormulario,actualizarMostrar] = useState (false)
  const [colaboradores, actualizarColaboradodres] = useState([
    {
      id: uuid(),
      foto: 'https://github.com/harlandlohora.png',
      nombre: 'Harland Lohora',
      puesto: 'Instructor',
      equipo: 'Programación',
      fav:true
    },
    {
      id: uuid(),
      foto: 'https://github.com/harlandlohora.png',
      nombre: 'Harland Lohora',
      puesto: 'Instructor',
      equipo: 'Front End',
      fav:false
    },
    {
      id: uuid(),
      foto: 'https://github.com/harlandlohora.png',
      nombre: 'Harland Lohora',
      puesto: 'Instructor',
      equipo: 'UX y Diseño',
      fav:false
    },
    {
      id: uuid(),
      foto: 'https://github.com/harlandlohora.png',
      nombre: 'Harland Lohora',
      puesto: 'Instructor',
      equipo: 'Programación',
      fav:false
    },
    {
      id: uuid(),
      foto: 'https://github.com/harlandlohora.png',
      nombre: 'Harland Lohora',
      puesto: 'Instructor',
      equipo: 'Inovación y Gestión',
      fav:false
    },
  ])
    //Lista de equipos
  const [Equipos, actualizarEquipos] = useState( [

    {
      id: uuid(),
      titulo:  "Programación",
      colorPrimario:"#57C278 ",
      colorSecuandario:"#D9F7E9"
    },
    
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecuandario:"#E8F8FF"
    },

    {
      id: uuid(),
      titulo:   "Data Science", 
      colorPrimario:"#A6D157 ",
      colorSecuandario:"#F0F8E2",
    },

    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69 ",
      colorSecuandario:"#FDE7E8",
    },

    {
      id: uuid(),
      titulo:   "UX y Diseño",
      colorPrimario:"#DB6EBF ",
      colorSecuandario:"#FAE9F5",
    }
    ,
    {
      id: uuid(),
      titulo:   "Movil",
      colorPrimario:"#FFBA05 ",
      colorSecuandario:"#FFF5D9",
    },
   
    { 
      id: uuid(),
      titulo:    "Inovación y Gestión",
      colorPrimario:"#FF8A29 ",
      colorSecuandario:"#FFEEDF",
    }
    
]   )

  //ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }


  //Registrar colaborador 

  const registrarColaborador = (Colaborador) =>{
    console.log("Nuevo Colaborador", Colaborador)
    
    //spread operator
    actualizarColaboradodres([...colaboradores, Colaborador])
  }
  //Eliminar Colaborador

  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador", id)
    const nuevoColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradodres(nuevoColaboradores)

  }
  //Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("Acutalizar : ", color,id)
    const equiposActualizados = Equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)

  }

  //Crear equipo

  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...Equipos, {...nuevoEquipo, id: uuid()}])
  }

  //Like
  const like = (id) =>{
    console.log("Like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradodres(colaboradoresActualizados)
  }





  return (
    <div >
      <Header />
      { 
      mostrarFormulario === true ? <Formulario Equipos= {Equipos.map((equipo) => equipo.titulo)}  registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} /> : <></> 
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
     {
     
      Equipos.map( (equipo) =>  <Equipo  
      datos={equipo} 
      key={equipo.titulo}
      //Filro para mostrar colboradores
      colaboradores = {colaboradores.filter(Colaborador => Colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      /> )
     
     }

     <Footer/>

    </div>

  );
}

export default App;
