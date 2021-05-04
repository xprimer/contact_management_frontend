import Login from '../views/login';
import Register from '../views/register'

const routes = [
    {path:'/login', component:  Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'}
]

export default routes;