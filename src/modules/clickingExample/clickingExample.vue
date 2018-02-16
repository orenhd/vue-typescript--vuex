<template>
    <div class="clicking-example">
        <user-name-bar
            :userName="userName"
            @userNameChanged="setUserName($event)"
        >
        </user-name-bar>
        <clicking-panel
            :clickingData="clickingData"
            @homeButtonClicked="homeButtonClicked()"
            @homeButtonClickedOutside="homeButtonClickedOutside()"
        >
        </clicking-panel>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import UserNameBar from "./components/userNameBar.vue";
import ClickingPanel from "./components/clickingPanel.vue";

import ClickOutside from "../../shared/directives/clickOutside";

import * as dataModels from "./clickingExample.dataModels";

@Component({components: {UserNameBar, ClickingPanel}})
export default class ClickingExample extends Vue {

    /* Map Mutations */
    setUserName(userName: string) {
        this.$store.commit('clickingExample/setUserName', userName);
    }

    homeButtonClicked() {
        this.$store.commit('clickingExample/homeButtonClicked');
    }

    homeButtonClickedOutside() {
        this.$store.commit('clickingExample/homeButtonClickedOutside');
    }

    /* Map Getters */
    get userName(): string {
        return this.$store.state.clickingExample.userName;
    }

    get clickingData(): dataModels.ClickingData {
        return this.$store.state.clickingExample.clickingData;
    }
}
</script>

<style lang="scss" scoped>
    @import '~styles/variables'; //tilde to resolve 'like a module'
</style>
