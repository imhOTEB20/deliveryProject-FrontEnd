import { Route, Routes } from 'react-router-dom';
import { routes } from '../utils/routes';
import BienvenidaPage from '../pages/BienvenidaPage';

const RoutesViews = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<BienvenidaPage/>}/>
        </Routes>
    );
}

export default RoutesViews;
