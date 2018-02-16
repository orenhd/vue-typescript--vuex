/**
 * index.ts
 * - Responsible only for init. of the Vue and Vuex instances, 
 * by loading the main Application Component, including its routing and store options.
 **/

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueI18n from 'vue-i18n';

import { Store } from "vuex"; 

import AppRoutes from "./application/application.routes";

import AppStoreOptions from "./application/application.store";

import AppI18n from "./application/application.i18n";

import Application from "./application/application.vue"

declare var VueMaterial: any;

Vue.use(VueMaterial.default);
Vue.use(Vuex);

const store: Store<any> = new Vuex.Store(AppStoreOptions);

const appRouter: VueRouter = new VueRouter({
    routes: AppRoutes
}) 

let vueInstance = new Vue({
    el: "#app",
    template: '<application></application>',
    store,
    components: { Application },
    router: appRouter,
    i18n: AppI18n
});