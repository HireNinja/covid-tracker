<template>
    <div class='menu'>
        <div class='item logo'>
            CovidTracker
        </div>
        <div class='item'>Home</div>
        <div class='item'>News</div>
        <div class='item'>Discusion</div>
        <div class='item search pull-right'>
            <el-select
                v-model="location"
                filterable
                remote
                placeholder="Please enter a keyword"
                :remoteMethod="searchLocation"
                @change="changeLocation"
                :loading="loading">
                <el-option
                    v-for="item in options"
                    :key="item.uuid"
                    :label="item.long_name"
                    :value="item">
                </el-option>
            </el-select>
        </div>
    </div>
</template>
<script>
import Location from '../services/location'
export default {
    data: () => ({
        activIndex: "home",
        loading: false,
        options: [],
        location: ""
    }),
    methods: {
        searchLocation: function(query){
            var loc = new Location(); 
            loc.getList({q: query}).then(response => {
                this.options = response.items;                
            })
        },
        changeLocation: function(query) {
            this.$session.set("location", query);
            location.reload();
        }
    },
    mounted: function() {
        this.location = this.$location.long_name;
    }
}
</script>
<style lang='scss' scoped>
.menu {
    border-bottom: 1px solid #efefef;
    position: fixed;
    width: 1240px;
    background-color: rgba(255,255,255, 0.9);
    z-index: 10000;
    top: 0;
    padding-top: 1rem;
    .search {
        margin-top: -0.5rem;
        .el-select{
            width: 400px;
        }
    }
    .item {
        display: inline-block;
        margin-left: 1rem;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        padding: 1rem 0.5rem;
        cursor: pointer;
    }
    .item:hover{
        color: #000;
    }
    .logo {
        text-transform: none !important;
        font-size: 1rem;
        margin-right: 3rem;
    }
}
.pull-right {
    float: right;
}
</style>