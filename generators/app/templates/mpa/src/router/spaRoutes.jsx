import asyncLoad from './asyncLoad';

const routes = [
    {
        path: '/',
        exact: true,
        component: asyncLoad(() => import('@pages/spa/index'))
    },
    {
        path: '/demo1',
        component: asyncLoad(() => import('@pages/spa/demo1'))
    },
    {
        path: '/demo2',
        component: asyncLoad(() => import('@pages/spa/demo2'))
    }
];

export default routes;