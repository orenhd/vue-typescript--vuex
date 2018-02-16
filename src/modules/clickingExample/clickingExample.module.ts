import { Module } from 'vuex';

import * as dataModels from "./clickingExample.dataModels";

interface state {
    userName: string;
    clickingData: dataModels.ClickingData | null;
}

const module:Module<state, null> = { //TODO: define state amd rootState models
    namespaced: true,
    state: {
        userName: 'World',
        clickingData: { homeButtonClickCount: 0, homeButtonClickOutsideCount: 0 }
    },
    mutations: {
        setUserName (state, userName: string) {
            state.userName = userName;
        },
        homeButtonClicked (state) {
            if (state.clickingData) state.clickingData.homeButtonClickCount++;
        },
        homeButtonClickedOutside (state) {
            if (state.clickingData) state.clickingData.homeButtonClickOutsideCount++;
        }
    },
    actions: {},
    getters: {}
}

export default module;