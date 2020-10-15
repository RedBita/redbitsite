import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#ff2400',
                secondary: '#000000',
                accent: '#8c9eff',
                error: '#b71c1c',                
            },
        },
    },
});
