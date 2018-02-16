<template>
    <div class="top-twenty-albums">
        <genre-selection-bar 
            :genres="genres"
            :currentGenreId="currentGenreId"
            @genreSelected="loadAlbumEntriesByGenreId($event)"
        >
        </genre-selection-bar>
        <albums-list :listAlbumEntries="listAlbumEntries"></albums-list>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import GenreSelectionBar from "./components/genreSelectionBar.vue";
import AlbumsList from "./components/albumsList.vue";

import * as dataModels from './topTwentyAlbums.DataModels';
import * as viewModels from './topTwentyAlbums.ViewModels';

@Component({components: {GenreSelectionBar, AlbumsList}, directives: {}})
export default class TopTwentyAlbums extends Vue {
    
    /* Lifecycle Methods */

    beforeCreate() {
        this.$store.dispatch('topTwentyAlbums/loadGenreIds');
    }

    /* Actions Mapping */

    loadAlbumEntriesByGenreId(genreId: number) {
        this.$store.dispatch('topTwentyAlbums/loadAlbumEntriesByGenreId', genreId);
    }

    /* Getters Mapping */

    get genres(): dataModels.ITunesGenre[] {
        return this.$store.state.topTwentyAlbums.genres;
    }

    get currentGenreId(): number {
        return this.$store.state.topTwentyAlbums.currentGenreId;
    }

    get listAlbumEntries(): viewModels.ListAlbumEntry[] {
        return this.$store.getters['topTwentyAlbums/listAlbumEntries'];
    }
    
}
</script>

<style lang="scss" scoped>
    @import '~styles/variables'; //tilde to resolve 'like a module'
</style>
