import "./Home.css"
import FotoPerrito from "../assets/Group 9.png"
import rectangulo from "../assets/Rectangle 5.png"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className= "fondo-home">
            <div className= "div-container-home">
                <div className= "foto-perrito-container">
                    <img className= "foto-perrito-home" src= {FotoPerrito}></img>
                </div>
                {/* <div>
                    <img src= {rectangulo}></img> 
                </div> */}
                <div className= "contenedor-titulo-home">
                    <div className= "titulo-home-container">
                        <p className= "titulo-home">All about dogs</p>
                    </div> 
                    <div className= "subtitulo-home-container">
                        <p className= "subtitulo-home">Toda la información sobre perros que buscas, está acá.</p>
                        <Link to= "/buscar"><button className= "boton-home">ver más</button> </Link>                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
