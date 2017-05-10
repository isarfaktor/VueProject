const gisview = require('./components/GISView.vue');

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
    gisview
  },
  data: {},
  methods: {
    init: function() {
      this.$broadcast('MapsApiLoaded');
    }
  }
});