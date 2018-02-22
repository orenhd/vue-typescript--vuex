import VueI18n from 'vue-i18n';

const i18n = new VueI18n({
    locale: 'en',
    messages: {
        en: {
            general: {
                navigation: 'Navigation',
                greeting: 'Hello, {0}'
            },
            clickingExample: {
                userName: 'User Name',
                clickingExample: 'Clicking Example',
                homeButtonClicked: 'Home button was clicked 1 time | Home button was clicked {count} times',
                homeButtonClickedOutside: 'Home button was clicked outside 1 time | Home button was clicked outside {count} times'
            },
            topTwentyAlbums: {
                topTwentyAlbums: 'Top Twenty Albums'
            }
        }
    }
})

export default i18n;