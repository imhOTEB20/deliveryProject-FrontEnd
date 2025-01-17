import styleNavBarBienvenida from '../css/navBarBienvenida.module.css';
import style from '../css/style.module.css';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";

const NavBarBienvenida = () => {
    return (
        <header className={styleNavBarBienvenida.headerPrincilpal}>
            <nav className={"navbar navbar-expand-lg navbar-dark p-md-2 p-lg-3 "+ style.bgColorPrincipal}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to={routes.home} style={{fontSize: window.innerWidth >= 992 ? "1.25rem" : "0.875rem",}}><img className={styleNavBarBienvenida.logoNavBar} src={logo} alt="logo" /> Los pollos Hermanos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarMovies"
                aria-controls="navBarMovies" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBarMovies">
                    <ul className="navbar-nav ms-auto mb-lg-0 fw-bold">
                        <li className="nav-item mx-2" style={{fontSize: window.innerWidth >= 992 ? "1.25rem" : "0.875rem",}}>
                        <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li className="nav-item mx-2" style={{fontSize: window.innerWidth >= 992 ? "1.25rem" : "0.875rem",}}>
                        <a className="nav-link active" href="#">Menú</a>
                        </li>
                        <li className="nav-item mx-2" style={{fontSize: window.innerWidth >= 992 ? "1.25rem" : "0.875rem",}}>
                        <a className="nav-link active" href="#">Acerca de Nosotros</a>
                        </li>

                        <li className="nav-item dropdown mx-2" id="opciones-usuario" style={{fontSize: window.innerWidth >= 992 ? "1.25rem" : "0.875rem",}}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i className="fa-solid fa-user"></i>
                                <span id="nombre-usuario"></span>
                            </a>
                            <ul className={"dropdown-menu dropdown-menu-dark mb-sm-2 mb-lg-0 " + style.bgColorSecundario}>
                                <li>
                                <a className="dropdown-item text-light fw-bold" href="#" data-bs-toggle="modal"
                                    data-bs-target="#editarPerfilModal"><i className="fa-solid fa-user-pen"></i> Editar perfil</a>
                                </li>
                                <li>
                                <a className="dropdown-item text-light fw-bold" id="btnAdministracion" href="pages/administracion.html"><i
                                    className="fa-solid fa-user-tie"></i> Administrar</a>
                                </li>
                                <li>
                                <hr className="dropdown-divider bg-light" />
                                </li>
                                <li>
                                <a className="dropdown-item text-light fw-bold" id="btnCerrarSesion" href="#"><i
                                    className="fa-solid fa-door-open"></i> Salir</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item mx-2">
                        <button type="button" className={"btn fw-bold text-black mb-sm-2 mb-lg-0 fs-sm-6 fs-lg-5 " + style.btnPersonalizado4} id="boton-iniciar-sesion"
                            data-bs-toggle="modal" data-bs-target="#iniciarSesionModal" style={{fontSize: window.innerWidth >= 992 ? "1.25rem" : "0.875rem",}}>
                            Iniciar Sesión
                        </button>
                        </li>
                        <li className="nav-item mx-2">
                        <button className={"btn fw-bold text-black mb-sm-2 mb-lg-0 fs-sm-6 fs-lg-5 " + style.btnPersonalizado4} type="button" data-bs-toggle="modal"
                            data-bs-target="#suscripcionModal" style={{fontSize: window.innerWidth >= 992 ? "1.25rem" : "0.875rem",}}>
                            Suscripción
                        </button>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
    );
}

export default NavBarBienvenida;
