<script>
    import GoogleMaps from '../mixins/GoogleMaps.js';

    export default {
        mixins: [GoogleMaps],
        data: {
            map: ''
        },
        created() {
            this.initMap();
        },
        methods: {
            initMap: function() {
                console.log("OK");
                this.map = new google.maps.Map(this.$refs.map), {
                    center: { lat: 83.298, lng: 35.555},
                    scrollwheel: false,
                    zoom: 4
                }
            }
        }
    }
</script>
