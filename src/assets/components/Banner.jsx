import styleBannerBienvenida from '../css/banner.module.css';

const Banner = () => {
    return (
        <section className={styleBannerBienvenida.banner}>
            <h1 className={styleBannerBienvenida.tituloPrincipal}>Bienvenido a Los Pollos Hermanos</h1>
            <p className={styleBannerBienvenida.parrafoTitulo}>¡Descubre una experiencia culinaria inigualable en nuestra parrillada excepcional! En cada bocado, transportamos tus sentidos a las vastas llanuras de Argentina, donde el arte de la parrilla es una tradición arraigada. Nuestro equipo apasionado de parrilleros maestros se esfuerza por ofrecerte el auténtico sabor de la carne asada a la parrilla, cuidadosamente sazonada y cocida a la perfección en brasas
            ardientes.</p>
        </section>
    )
}

export default Banner;
