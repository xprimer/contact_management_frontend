import Login from '../views/login';
import Register from '../views/register';
import Home from '../views/home';

const routes = [
    {path: '/' , component: Home , name: 'home'},
    {path:'/login', component:  Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'}
]

export default routes;