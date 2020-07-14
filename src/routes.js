// export default routes;
import LoginLayout from './components/layouts/Theme/LoginLayout'
import NotFound from './components/layouts/Theme/NotFoundLayout'
import DashboardLayout from './components/layouts/Theme/DashboradLayout'
const routes = [
    {
        path: '/',
        exact: true,
        component: LoginLayout,
        id: '/'
    },
    {
        path: '/login',
        exact: true,
        component: LoginLayout,
        id: 'login'
    },
    {
        path: '/dashboard',
        exact: true,
        component: DashboardLayout,
        id: 'dashboard',
    },
    {
        path: '/product',
        component: DashboardLayout,
        id: 'product',
    },
    {
        path: '/product/edit-product/:id',
        component: DashboardLayout,
        id: 'editProduct',
    },
    {
        path: '/product/detail-product/:id',
        component: DashboardLayout,
        id: 'detailProduct'
    },
    {
        path: '/review',
        component: DashboardLayout,
        id: 'review',
    },
    {
        path: '/order',
        component: DashboardLayout,
        id: 'order',
    },
    {
        path: '/blog',
        component: DashboardLayout,
        id: 'blog',
    },
    {
        path: '/voucher',
        component: DashboardLayout,
        id: 'voucher',
    },
    {
        path: '/report',
        component: DashboardLayout,
        id: 'report',
    },
    {
        path: '/user',
        component:  DashboardLayout,
        id: 'user',
    },
    {
        path: '/profile',
        component: DashboardLayout,
        id: 'profile',
    },
    {
        component: NotFound,
        id: 'NotFound'
    },
]
export default routes;