import { RouteConfig } from 'vue-router';

import TopTwentyAlbums from "./topTwentyAlbums.vue";

const routes: RouteConfig[] =  [
    { path: '/', redirect: '/top-twenty' },
    { path: '/top-twenty', component: TopTwentyAlbums}
];

export default routes;