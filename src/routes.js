import Home from './views/Home.svelte';
import Team from './views/TeamViewer.svelte';
import Info from './views/Info.svelte';

let routes = [
    {
        name: '/',
        component:Home,
    },
    {
        name:'/teams',
        component: Team
    },
    {
        name:'/info',
        component: Info
    }
];

export default routes;