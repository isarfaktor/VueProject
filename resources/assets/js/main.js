import GISView from './components/GISView.vue';
// const GISView = require('./components/GISView.vue');
window.Vue = Vue;
window.Event = new class {
    constructor() {
        this.Vue = new Vue();
    }

    fire(event, data = null) {
        this.Vue.$emit(event, data);
    }

    listen(event, callback) {
        this.Vue.$on(event, callback);
    }
};

window.app = new Vue({
    el: '#app',
    components: {
        'gisview': {GISView}
    },
    data: {
    },
    methods: {
        init: function() {
            this.$broadcast('MapsApiLoaded');
        }
    }
});