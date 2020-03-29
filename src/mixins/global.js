import Vue from 'vue'

Vue.mixin({
    data: () => ({
    }),
    computed: {
        $location: function() {
            let location = this.$session.get('location'); 
            return location;
        }
    },
    mounted: () => {

    },
    methods: {
        writeToSession: function(key, data){
            this.$session.set(key, data);
        }
    },
    filters: {
    }

});