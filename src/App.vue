<template>
  <div id="app">

    <el-menu :default-active="activeIndex" mode="horizontal" :router="true">
      <el-menu-item class='m-r'>CovidTracker</el-menu-item>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="news">News</el-menu-item>
      <el-menu-item index="discussions">Discussions</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>

export default {
  components: {
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
