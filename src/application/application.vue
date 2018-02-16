<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{greeting}}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">{{$t("general.navigation")}}</md-toolbar>

        <md-list>
          <md-list-item to="/clicking-example" @click="menuVisible = false">
            <md-icon>mouse</md-icon>
            <span class="md-list-item-text">{{$t("clickingExample.clickingExample")}}</span>
          </md-list-item>

          <md-list-item to="/top-twenty" @click="menuVisible = false">
            <md-icon>album</md-icon>
            <span class="md-list-item-text">{{$t("topTwentyAlbums.topTwentyAlbums")}}</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VueI18n from 'vue-i18n';

/* module components */
import ClickingExample from "../modules/clickingExample/clickingExample.vue";
import TopTwentyAlbums from "../modules/topTwentyAlbums/topTwentyAlbums.vue";

@Component({components: {ClickingExample, TopTwentyAlbums}})
export default class Application extends Vue {

    // only app. component parameters are not managed by the store, 
    // in order to use the App material component, which makes use of the .sync modifier, out-of-the-box

    menuVisible: boolean = false;

    get greeting(): VueI18n.TranslateResult {
      let userName: string = this.$store.state.clickingExample.userName;
      if (userName) return this.$t("general.greeting", [userName]);
      else return ''
    }
}
</script>

<style lang="scss" scoped>
    .md-app {
        height: 100vh;
    }
</style>
