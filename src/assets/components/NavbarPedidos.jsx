import styleNavPedidos from '../css/navbarPedidos.module.css';
import logo from '../img/logo.png';

const NavbarPedidos = () => {
    return (
    <header className={styleNavPedidos.headerPrincipal}>
        <section className={styleNavPedidos.contenedorLogo}>
            <img className={styleNavPedidos.logoImage} src={logo} alt="logo"/>
            <article className={styleNavPedidos.logoTexto}>
                <p className={styleNavPedidos.logoTitulo}>Los pollos hermanos</p>
                <a href="#" className={"btn active p-1 " + styleNavPedidos.bottonVerMas}  role="button" data-bs-toggle="button" aria-pressed="true">Ver más</a>
            </article>
        </section>
        <article className={styleNavPedidos.contenedorBotonComprar}>
            <button className={"btn " + styleNavPedidos.btnPersonalizado3 + " fw-semibold p-1 p-md-2 mt-1 mt-md-0"}>Pagar $8000</button>
            <button className={"btn " + styleNavPedidos.btnPersonalizado3 +" p-1 p-md-2 ms-2 fw-semibold"}><i className="fa-solid fa-right-from-bracket"></i> Salir</button>
        </article>
        <nav className={styleNavPedidos.navPrincipal}>
            <article className={styleNavPedidos.datos}>
                <span className={styleNavPedidos.datoLogo}><i className="fa-solid fa-location-dot"></i> Calle Falsa 123</span>
                <span className={styleNavPedidos.datoLogo}><i className="fa-solid fa-clock"></i> Martes a Domingo de 18:00 a 23:59 hs.</span>
            </article>
            <article className={styleNavPedidos.datos}>
                <span className={styleNavPedidos.datoLogo}><i className="fa-solid fa-phone"></i> 3874123654</span>
                <span className={styleNavPedidos.datoLogo}><i className="fa-solid fa-envelope"></i> polloshermanos@gmail.com</span>
            </article>
            <article className={styleNavPedidos.datosRedes}>
                <span className={styleNavPedidos.redesTexto}>Nuestras redes</span>
                <div className={styleNavPedidos.redesNavContenedor}>
                    <a href="#" className={styleNavPedidos.redSocial} target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="#" className={styleNavPedidos.redSocial} target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" className={styleNavPedidos.redSocial} target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <button className={"btn "+ styleNavPedidos.btnPersonalizado3 + " p-2 ms-2 fw-semibold"}><i className="fa-solid fa-right-from-bracket"></i> Salir</button>
                </div>
            </article>
        </nav>
    </header>
    );
}

export default NavbarPedidos;
