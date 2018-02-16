import { StoreOptions, Plugin } from 'vuex';

import VuexPersistence from 'vuex-persist';

import createLogger from 'vuex/dist/logger';

/* modules store module definitions */
import TopTwentyAlbumsModule from "../modules/topTwentyAlbums/topTwentyAlbums.module";
import ClickingExampleModule from "../modules/clickingExample/clickingExample.module";

declare var process : {
    env: {
      NODE_ENV: string
    }
}

interface ExtendedStoreOptions extends StoreOptions<null> {
    plugins?: Plugin<any>[] | undefined;
}

const vuexPersistLocal: VuexPersistence<null, any> = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage,
    modules: ['topTwentyAlbums', 'clickingExample']
});

const plugins: Plugin<any>[] | undefined = process.env.NODE_ENV !== 'production' ? [vuexPersistLocal.plugin, createLogger({})] : [vuexPersistLocal.plugin];

const storeOptions: ExtendedStoreOptions = {
    modules: {
        topTwentyAlbums: TopTwentyAlbumsModule,
        clickingExample: ClickingExampleModule
    },
    plugins: plugins
}

export default storeOptions;