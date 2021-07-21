import { lazy } from 'react'
import Home from 'views/home';
const BackEndLayoutRoute = lazy(() => import('views/layout/BackEndRoutes'));

const routes = [
    {
        path: '/home',
        component: Home,
        layout: BackEndLayoutRoute
    },
    {
        path: '/',
        component: Home,
        layout: BackEndLayoutRoute
    }
]

export default routes;
