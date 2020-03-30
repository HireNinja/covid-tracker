<template>
  <div id="home">
      <stats :tracker="tracker"></stats>
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
import Home from '../services/home';

export default {
    components: {
        Stats,
        Chart
    },
    data: () => ({
        tracker: [],
        cases: [],
        map: null,
        google: null,
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
        refreshHome: function () {
            var home = new Home(); 
            home.getList({location: this.$location.uuid}).then(response => {
                this.tracker = response.tracker;
                this.cases = response.cases; 
                this.renderCases();
            })
        },
        renderCases: function() {
            

            this.cases.map((loc) => {
                console.log(Math.sqrt(loc.total_confirmed) * 1000);
                return new this.google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: this.map,
                    center: {lat: loc.position[0], lng: loc.position[1]},
                    title: loc.total_confirmed.toString(),
                    radius: loc.total_confirmed * 200
                })
            });
        }
    },
    async mounted() {
        try {
            this.google = await gmapsInit();
            // const geocoder = new this.google.maps.Geocoder();
            this.map = new this.google.maps.Map(this.$refs['map'],{
                zoom: 5,
                options: this.options,
                center: {lat: this.$location.position[0], lng: this.$location.position[1]}
            });
            this.refreshHome();
            // this.map.fitBounds(this.$location.viewport);
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
