<template>
        <select class="genre-select" name="genre" :value="currentGenreId" @change="genreSelected($event.target.value)">
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{genre.title}}</option>
        </select>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import * as dataModels from '../topTwentyAlbums.DataModels';
import * as viewModels from '../topTwentyAlbums.ViewModels';

@Component({components: {}, directives: {}})
export default class GenreSelectionBar extends Vue {

    @Prop() genres: dataModels.ITunesGenre[];
    @Prop() currentGenreId: number;

    genreSelected(genreId: number) {
        this.$emit('genreSelected', genreId);
    }
    
}
</script>

<style lang="scss" scoped>
    @import '~styles/variables'; //tilde to resolve 'like a module'
</style>
