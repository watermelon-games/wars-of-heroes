import Login from '../pages/auth/login'
import Logout from '../pages/logout';
import Register from '../pages/auth/register'
import CharacterInfo from '../pages/character/character-info';
import CharacterCreate from '../pages/character/character-create';
import NoMatch from '../pages/404'
import Home from '../pages/home';
import Inventory from '../pages/inventory/inventory';

const routes = [
    {
        path: '/',
        exact: true,
        auth: true,
        component: Home
    }, {
        path: '/inventory',
        exact: true,
        auth: true,
        component: Inventory
    }, {
        path: '/character',
        exact: true,
        auth: true,
        component: CharacterInfo
    }, {
        path: '/character/create',
        exact: true,
        auth: true,
        component: CharacterCreate
    }, {
        path: '/login',
        exact: true,
        auth: false,
        component: Login
    }, {
        path: '/logout',
        exact: true,
        auth: true,
        component: Logout
    }, {
        path: '/register',
        exact: true,
        auth: false,
        component: Register
    }, {
        path: '',
        exact: true,
        auth: false,
        component: NoMatch
    }
];

export default routes;
