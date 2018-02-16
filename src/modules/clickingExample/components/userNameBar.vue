<template>
    <div>
        <md-field>
            <label>User Name</label>
            <md-input :value="userName" @change="userNameChanged($event.target.value)"></md-input>
        </md-field>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({components: {}, directives: {}})
export default class UserNameBar extends Vue {

    @Prop() userName: string;

    userNameChanged(userName: string) {
        this.$emit('userNameChanged', userName);
    }
    
}
</script>

<style lang="scss" scoped>
    @import '~styles/variables'; //tilde to resolve 'like a module'

    .genre-select {
        height: 2em;
        font-size: 1em;
        margin: 0.25em 1em;
    }
    
</style>
