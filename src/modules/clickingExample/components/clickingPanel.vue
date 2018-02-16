<template>
    <div class="clicking-panel">
        <md-button class="home-button md-icon-button md-raised" @click="homeButtonClicked" v-click-outside="homeButtonClickedOutside">
            <md-icon>home</md-icon>
        </md-button>
        <p class="clicking-data-text" v-if="this.clickingData && this.clickingData.homeButtonClickCount">{{$tc('clickingExample.homeButtonClicked', this.clickingData.homeButtonClickCount, { count: this.clickingData.homeButtonClickCount })}}</p>
        <p class="clicking-data-text" v-if="this.clickingData && this.clickingData.homeButtonClickOutsideCount">{{$tc('clickingExample.homeButtonClickedOutside', this.clickingData.homeButtonClickOutsideCount, { count: this.clickingData.homeButtonClickOutsideCount })}}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import * as dataModels from '../clickingExample.dataModels';

import ClickOutside from "../../../shared/directives/clickOutside";

@Component({directives: {'click-outside' : ClickOutside}})
export default class ClickedButton extends Vue {
    @Prop() clickingData: dataModels.ClickingData;

    homeButtonClicked() {
        this.$emit('homeButtonClicked');
    }

    homeButtonClickedOutside() {
        this.$emit('homeButtonClickedOutside');
    }
}
</script>

<style lang="scss" scoped>
    .clicking-data-text {
        user-select: none;
    }
</style>
