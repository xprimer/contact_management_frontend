import Login from '../views/login';
import Register from '../views/register';
import Home from '../views/home';
import Dashboard from '../views/dashboard';

const routes = [
    {path: '/' , component: Home , name: 'home'},
    {path:'/login', component:  Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'},
    {path: '/dashboard', component: Dashboard, name: 'dashboard'},
]

export default routes;