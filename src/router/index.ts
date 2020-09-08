import { lazy } from 'react';
// import { Router, Route, Switch } from 'dvajs/router';
// import { History } from 'history';
const Event = lazy(() => import('../pages/event/index'));

// import { IconWorkOrder } from '@/components/icon';

export default [
    {
        path: '/',
        name: 'Index',
        component: Event,
        icon: '',
    },
];
