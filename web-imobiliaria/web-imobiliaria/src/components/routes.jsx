import {createBrowserRouter} from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { CadastroImovel } from '../pages/CadastroImovel/CadastroImovel';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    }, 
    {
        path: "/cadastro",
        element: <CadastroImovel/>,
    }
]);