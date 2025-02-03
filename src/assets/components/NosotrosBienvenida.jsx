import styleNosotrosBienvenida from '../css/nosotrosBienvenida.module.css';
import about1 from "../img/about-1.jpg";
import about2 from "../img/about-2.jpg";
import about3 from "../img/about-3.jpg";
import about4 from "../img/about-4.jpg";

const NosotrosBienvenida = () => {
    return (
        <section className={styleNosotrosBienvenida.nosotros}>
            <article className={styleNosotrosBienvenida.imagenes}>
                <div className={styleNosotrosBienvenida.imgs1}>
                    <img className={styleNosotrosBienvenida.imgG} src={about1} alt="about-1"/>
                    <img className={styleNosotrosBienvenida.imgP} src={about2} alt="about-3"/>
                </div>
                <div className={styleNosotrosBienvenida.imgs2}>
                    <img className={styleNosotrosBienvenida.imgP} src={about3} alt="about-2"/>
                    <img className={styleNosotrosBienvenida.imgG} src={about4} alt="about-4"/>
                </div>
            </article>
            <article className={styleNosotrosBienvenida.descripcion}>
                <h3 className={styleNosotrosBienvenida.tituloNosotros}>-Nosotros-</h3>
                <h2 className={styleNosotrosBienvenida.subtituloNosotros}><i className= {styleNosotrosBienvenida.logoNosotros + " fa-solid fa-utensils"}></i> Los Pollos Hermanos</h2>
                <p className={styleNosotrosBienvenida.textoNosotros}>En nuestra restaurante, el aroma irresistible del humo y la carne cocinándose se
                    mezclan en una danza seductora que despierta tu apetito. Cada corte de carne
                    es seleccionado con esmero, asegurando la frescura y la calidad que mereces.
                    Desde los cortes más tiernos y jugosos hasta los sabores audaces y ahumados
                    de las costillas, te garantizamos un viaje sensorial que te dejará ansiando cada
                    siguiente visita.
                    Ya sea que te encuentres celebrando un momento especial o simplemente
                    deseando un festín inolvidable, nuestra parrillada es el lugar perfecto para
                    compartir con los tuyos. Acompaña tus platos principales con una selección de
                    guarniciones y salsas artesanales, todo preparado para complementar y realzar
                    la experiencia. Ven y únete a nosotros en un banquete donde el fuego, el sabor y
                    la hospitalidad se unen para crear recuerdos duraderos. ¡Te esperamos en
                    nuestra parrillada para compartir contigo un festín que deleitará tus sentidos y
                    te hará volver por más!</p>
            </article>
        </section>
    );
}

export default NosotrosBienvenida;
