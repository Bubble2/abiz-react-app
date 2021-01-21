import asyncLoad from './asyncLoad';

const routes = [
    {
        path: '/',
        exact: true,
        component: asyncLoad(() => import('@pages/spa2/index'))
    },
    {
        path: '/demo1',
        component: asyncLoad(() => import('@pages/spa2/demo1'))
    },
    {
        path: '/demo2',
        component: asyncLoad(() => import('@pages/spa2/demo2'))
    }
];

export default routes;