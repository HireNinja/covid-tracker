<template>
  <div id="home">
      <stats></stats>
      <div id='map' ref='map'></div>

      <div class='charts'>
          <el-row>
              <el-col :span="12">
                 <chart></chart> 
              </el-col>
              <el-col :span="12">
                 <chart></chart> 
              </el-col>
          </el-row>            
      </div>
  </div>
</template>

<script>
import gmapsInit from '../services/gmap';
import Stats from '../components/Stats';
import Chart from '../components/Chart';

export default {
    components: {
        Stats,
        Chart
    },
    data: () => ({
        map: null,
        options: {
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
            disableDefaultUi: false
        },
        markers: [
            {
                position: {lat:10, lng:10}
            }
        ]
    }),
    methods: {
        
    },
    async mounted() {
        try {
            const google = await gmapsInit();
            const geocoder = new google.maps.Geocoder();
            const map = new google.maps.Map(this.$refs['map'],{
                zoom: 6,
                options: this.options
            });
            geocoder.geocode({ address: this.$location.long_name }, (results, status) => {
                if (status !== 'OK' || !results[0]) {
                throw new Error(status);
                }
                //console.log(this.$location.position);
                //console.log(results[0].geometry.location);
                // console.log(results[0].geometry.viewport);
                // console.log(this.$location.viewport);

                var lat = this.$location.position[0];
                var lng = this.$location.position[1];
                map.setCenter({lng: lng, lat: lat});
                map.fitBounds(results[0].geometry.viewport);
            });
        } catch (error) {
            console.error(error);
        }
    }
}
</script>

<style scoped>
    #map {
        height: 40vh;
        width: 100%;
        background: #eee;
    }
    .charts {
        margin-top: 3rem;
    }
</style>
