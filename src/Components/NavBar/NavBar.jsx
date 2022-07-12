
//con rafce abro el modelo basico

import carrito from '../img/carrito.jpg'
import CartWidget from './cartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
	<>	
		<nav className="navbar navbar-expand-md navbar-light fondoIndex sticky-top w-100" id="navHeader">
  			<div className="container-fluid">
				<a className="navbar-brand" href="index.html">
				<CartWidget/>
				</a>
				<button className="navbar-toggler bg-light p-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
   				</button>
    			<div className="collapse navbar-collapse" id="navbarNav">
      				<ul className="navbar-nav ms-auto">
						<li className="nav-item opciones"><a className="nav-link" aria-current="page" href="paginas/Bazar.html" >Bazar</a></li>
						<li className="nav-item opciones"><a className="nav-link" href="paginas/Living.html">Living</a></li>
						<li className="nav-item opciones"><a className="nav-link" href="paginas/Habitacion.html">Habitación</a></li>
						<li className="nav-item opciones"><a className="nav-link" href="paginas/Baños">Baños</a></li>
						<li className="nav-item opciones"><a className="nav-link" href="paginas/Jardin.htmlo">Jardin</a></li>
                        
					</ul>                    
				</div>
                <div id="sesion">
                    <button id="myBtn" className="btn btn-dark btn-lg active botonSesion" role="button" aria-pressed="true">Iniciar Sesión</button>
                </div>
                <div>
                <img src={carrito} className="carrito" alt="carrito" />
                </div>
			</div>
		</nav>
		</>

  )
}

export default NavBar
