<template>
    <h1>Test Header</h1>
</template>
<script>
    import GoogleMaps from '../mixins/GoogleMaps.js';

    export default {
        mixins: [GoogleMaps],
        data: {
            test: 1
        },
        mounted() {
            console.log("test");
        }
    }
</script>