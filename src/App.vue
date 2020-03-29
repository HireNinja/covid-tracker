<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      activeIndex: "home"
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app {
  width: 1240px;
  margin: auto;
  margin-top: 7rem;
  .el-menu {
    .m-r{
      margin-right: 5rem;
    }
  }
  .el-menu-item {
    text-align: right;
  }
}


</style>
