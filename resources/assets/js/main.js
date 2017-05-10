const GISView = require('./components/GISView.vue');
import VueResource from 'vue-resource';

window.Vue = Vue;
Vue.use(VueResource);

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

var App = window.App = new Vue({
  el: '#app',
  components: {
    gisview: GISView
  },
  methods: {
    init: function() {
    }
  }
});