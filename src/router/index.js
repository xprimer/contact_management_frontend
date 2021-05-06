import Login from '../views/login';
import Register from '../views/register';
import Home from '../views/home';
import Dashboard from '../views/dashboard';
import Contacts from '../views/contacts.vue';
import Summary from '../views/summary.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    {
        path: '/dashboard', component: Dashboard, name: 'dashboard',
        children: [
            { path: 'contacts', component: Contacts, name: 'dashboard-contacts' },
            { path: '/', component: Summary, name: 'dashboard-summary' }
        ]
    },
]

export default routes;