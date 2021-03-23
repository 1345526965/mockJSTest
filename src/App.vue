<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
     <router-link to="/">HelloWorld</router-link>
    
         <router-link to="/formtest" >Form</router-link>
         <router-link to="/test" >test</router-link>
    
     <keep-alive> 
              <router-view  v-if="$route.meta.iskeepalive"></router-view>
     </keep-alive>
     <router-view  v-if="!$route.meta.iskeepalive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
