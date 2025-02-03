import styleFooterBienvenidad from '../css/footerBienvenida.module.css';

const FooterBienvenida = () => {
    return (
        <footer className={styleFooterBienvenidad.footerBienvenida}>
        <section className={styleFooterBienvenidad.sectionFooter}>
            <h4 className={styleFooterBienvenidad.tituloFooter}>Información</h4>
            <article className={styleFooterBienvenidad.articleFooter}>
                <a className={styleFooterBienvenidad.aFooter} href="#">Reservas</a>
                <a className={styleFooterBienvenidad.aFooter} href="#">Politica de privacidad</a>
                <a className={styleFooterBienvenidad.aFooter} href="#">Terminos y condiciones</a>
            </article>
        </section>
        <section className={styleFooterBienvenidad.sectionFooter}>
        <h4 className={styleFooterBienvenidad.tituloFooter}>Contacto</h4>
            <article class={styleFooterBienvenidad.articleFooter + styleFooterBienvenidad.contactos}>
            <p className={styleFooterBienvenidad.textoContacto}><i class={styleFooterBienvenidad.iContactos + " fa-solid fa-location-dot"} ></i>Gral. Paz 576, San Miguel de Tucumán</p>
                <p className={styleFooterBienvenidad.textoContacto}><i class={styleFooterBienvenidad.iContactos + " fa-solid fa-phone"}></i>0381339900</p>
                <p className={styleFooterBienvenidad.textoContacto}><i class={styleFooterBienvenidad.iContactos + " fa-solid fa-envelope"}></i>info@polloshnos.com</p>
            </article>
        </section>
        <section className={styleFooterBienvenidad.sectionFooter}>
        <h4 className={styleFooterBienvenidad.tituloFooter}>Horarios</h4>
            <article class={styleFooterBienvenidad.articleFooter}>
                <p className={styleFooterBienvenidad.textoContacto}>Lunes a sabados</p>
                <p className={styleFooterBienvenidad.textoContacto}>09AM - 12PM</p>
                <p className={styleFooterBienvenidad.textoContacto}>Domingos</p>
                <p className={styleFooterBienvenidad.textoContacto}>10AM - 10PM</p>
            </article>
        </section>
        <section className={styleFooterBienvenidad.sectionFooter}>
        <h4 className={styleFooterBienvenidad.tituloFooter}>Nuestras redes</h4>
            <article class={styleFooterBienvenidad.redes}>
                <i class={styleFooterBienvenidad.iRedes + " fa-brands fa-instagram"} ></i>
                <i class={styleFooterBienvenidad.iRedes + " fa-brands fa-twitter"} ></i>
                <i class={styleFooterBienvenidad.iRedes + " fa-brands fa-facebook-f"} ></i>
            </article>
        </section>
    </footer>
    );
}

export default FooterBienvenida
