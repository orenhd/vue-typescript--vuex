<template>
    <md-list class="md-triple-line">
        <md-list-item v-for="listAlbumEntry in listAlbumEntries" :key="listAlbumEntry.id">
            <md-avatar>
                <img :src="listAlbumEntry.thumbnail"></img>
            </md-avatar>
            <div class="md-list-item-text">
                <span>{{listAlbumEntry.title}}</span>
                <span>{{listAlbumEntry.artist}}</span>
                <p>{{listAlbumEntry.copyright}}</p>
            </div>
        </md-list-item>
    </md-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import * as viewModels from '../topTwentyAlbums.viewModels';

@Component({components: {}, directives: {}})
export default class AlbumsList extends Vue {

    @Prop() listAlbumEntries: viewModels.ListAlbumEntry[];
}
</script>

<style lang="scss" scoped>
    @import '~styles/variables'; //tilde to resolve 'like a module'
</style>
