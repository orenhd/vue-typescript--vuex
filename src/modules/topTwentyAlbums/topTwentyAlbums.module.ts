import { Module } from 'vuex';

import * as ITunesService from "./services/iTunes.service";

import * as dataModels from './topTwentyAlbums.dataModels';

import * as viewModels from './topTwentyAlbums.viewModels';

import * as utils from './topTwentyAlbums.utils';

interface state {
    genres: dataModels.ITunesGenre[];
    albumEntries: dataModels.ITunesAlbumEntry[];
    currentGenreId: number | null;
}

const module:Module<state, null> = {
    namespaced: true,
    state: {
        genres: [],
        albumEntries: [],
        currentGenreId: null
    },
    mutations: {
        setGenres(state, genres: dataModels.ITunesGenre[]) {
            state.genres = genres;
        },
        setAlbumEntries(state, albumEntries: dataModels.ITunesAlbumEntry[]) {
            state.albumEntries = albumEntries;
        },
        setCurrentGenreId(state, genreId: number) {
            state.currentGenreId = genreId;
        }
    },
    actions: {
        loadGenreIds({ dispatch, commit, state }) {
            if (!state.currentGenreId)
                ITunesService.getGenres().then((genres: dataModels.ITunesGenre[]) => {
                    commit('setGenres', genres);
                    if (genres && genres[0]) {
                        //loading genre ids is always followed by loading the selected genre albums list
                        dispatch('loadAlbumEntriesByGenreId', genres[0].id);
                    }
                })
        },
        loadAlbumEntriesByGenreId({ commit, state }, genreId: number) {
            ITunesService.getTopTwentyAlbumsByGenreId(genreId).then((albumEntries: dataModels.ITunesAlbumEntry[]) => {
                commit('setCurrentGenreId', genreId);
                commit('setAlbumEntries', albumEntries);
            });
        }
    },
    getters: {
        listAlbumEntries(state): viewModels.ListAlbumEntry[] {
            return utils.mapToListAlbumEntries(state.albumEntries);
        }
    }
}

export default module;