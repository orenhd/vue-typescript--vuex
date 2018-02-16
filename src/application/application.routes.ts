import { RouteConfig } from 'vue-router';

/* modules routes */
import TopTwentyAlbumsRoutes from "../modules/topTwentyAlbums/topTwentyAlbums.routes";
import ClickingExampleRoutes from "../modules/clickingExample/clickingExample.routes";

/* module components */
import ClickingExample from "../modules/clickingExample/clickingExample.vue";
import TopTwentyAlbums from "../modules/topTwentyAlbums/topTwentyAlbums.vue";

const routes: RouteConfig[] =  [
    ...TopTwentyAlbumsRoutes,
    ...ClickingExampleRoutes
];

export default routes;