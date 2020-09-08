import { lazy } from 'react';
const Event = lazy(() => import('../pages/event/index'));

export default [
    {
        path: '/',
        name: 'Index',
        component: Event,
        icon: '',
    },
];
