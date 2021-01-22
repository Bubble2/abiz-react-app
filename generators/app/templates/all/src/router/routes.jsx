import asyncLoad from './asyncLoad';

const routes = [
    {
        path: '/',
        exact: true,
        component: asyncLoad(() => import('@pages/index'))
    },
    {
        path: '/demo1',
        component: asyncLoad(() => import('@pages/demo1'))
    },
    {
        path: '/demo2',
        component: asyncLoad(() => import('@pages/demo2'))
    }
];

export default routes;