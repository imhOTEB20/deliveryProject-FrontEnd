import stylePedidosPrincipal from '../css/pedidosPrincipal.module.css';
import BuscarPedido from './BuscarPedido';
import CategoriasPlatos from './CategoriasPlatos';
import PlatosSection from './PlatosSection';
import ProductoCarrito from './ProductoCarrito';

const PedidosPrincipal = () => {
    return (
        <main className={stylePedidosPrincipal.mainPrincipal}>
            <section className={stylePedidosPrincipal.principal}>
                <article className={stylePedidosPrincipal.principalVarios}>
                    <BuscarPedido/>
                    <CategoriasPlatos/>
                    <PlatosSection/>
                </article>
                <article className={stylePedidosPrincipal.principalPedido}>
                    <h4 className={stylePedidosPrincipal.tituloPedido}>Mi pedido</h4>
                        <ProductoCarrito nombre="Pollo frito" cantidad="2" precio="5000"/>
                        <ProductoCarrito nombre="Pollo combo" cantidad="1" precio="5500"/>
                    <div className={stylePedidosPrincipal.carritoTotal}>
                        <span className={stylePedidosPrincipal.total}>Total: $8000</span>
                        <button className={"btn " + stylePedidosPrincipal.btnPersonalizado3 +" p-1 my-2"}>Comprar</button>
                    </div>
                    <div className={stylePedidosPrincipal.carritoVacio}>
                        <i className={"fa-solid fa-bag-shopping " + stylePedidosPrincipal.logoPedidoVacio}></i>
                        <span className={stylePedidosPrincipal.textoPedidoVacio}>Pedido vacio</span>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default PedidosPrincipal;
