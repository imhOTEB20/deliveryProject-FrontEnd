import styleCardBienvenidad from '../css/cardBienvenidad.module.css';

const CardBienvenida = () => {
    return (
        <section className={styleCardBienvenidad.cards}>
            <article className={styleCardBienvenidad.card}>
                <i className={styleCardBienvenidad.logo + " fa-solid fa-user-tie"}></i>
                <h3 className={styleCardBienvenidad.tituloCard}>Master Chefs</h3>
                <p>Nuestros apasionados chefs,
                    expertos en el arte de la parrilla, dan
                    vida a cada corte de carne con
                    maestría y creatividad, creando una
                    experiencia culinaria única y llena de
                    sabor en cada plato que servimos.</p>
            </article>
            <article className={styleCardBienvenidad.card}>
            <i className={styleCardBienvenidad.logo + " fa-solid fa-utensils"}></i>
                <h3 className={styleCardBienvenidad.tituloCard}>Comida de calidad</h3>
                <p>En nuestra parrillada, la calidad de la comida es nuestro sello distintivo.Seleccionamos cuidadosamente los ingredientes más frescos y los cortes de carne más jugosos para garantizar que cada bocado sea una explosión de auténtico placer gastronómico.
                </p>
            </article>
            <article className={styleCardBienvenidad.card}>
            <i className={styleCardBienvenidad.logo + " fa-solid fa-cart-plus"}></i>
                <h3 className={styleCardBienvenidad.tituloCard}>Ordena en linea</h3>
                <p className={styleCardBienvenidad.textoCard}>
                    Explora nuestra deliciosa oferta desde la comodidad de tu hogar. Nuestra plataforma de orden en línea te permite seleccionar tus platos favoritos y personalizar cada detalle de tu pedido para disfrutar de la experiencia de nuestra parrilla en cualquier lugar que te encuentres.
                </p>
            </article>
            <article className={styleCardBienvenidad.card}>
                <i className={styleCardBienvenidad.logo +" fa-solid fa-users"}></i>
                <h3 className={styleCardBienvenidad.tituloCard}>Atención al cliente</h3>
                <p className={styleCardBienvenidad.textoCard}>La satisfacción de nuestros clientes es nuestra máxima prioridad. Nuestro equipo está comprometido en brindarte un servicio excepcional y amable en cada visita. Desde el momento en que entras hasta el último bocado, te aseguramos una atención al cliente de primer nivel que completamenta a la perfección nuestra deliciosa comida y ambiente acogedor.</p>
            </article>
        </section>
    )
}

export default CardBienvenida
