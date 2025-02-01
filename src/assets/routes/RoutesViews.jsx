import { Route, Routes } from 'react-router-dom';
import { routes } from '../utils/routes';
import BienvenidaPage from '../pages/BienvenidaPage';
import PedidosPage from '../pages/PedidosPage';

const RoutesViews = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<BienvenidaPage/>}/>
            <Route path={routes.pedidos} element={<PedidosPage/>}/>
        </Routes>
    );
}

export default RoutesViews;
