<template>
  <header>
  <Navigation class="no-scroll"/>
  </header>
  <router-view/>
</template>

#This vue contains the navigation that is found on every page
#It is the root of the document

<script>
import Navigation from './components/Navigation.vue'
import Footer1 from './components/Footer1.vue'
export default {
  components: { Navigation, Footer1},
}
</script>

<style>
*{
  margin:0;
}

html,
body {
  background-color:#041010;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color:#FCFFFC;
}

header.no-scroll{
  overflow: hidden;
  position: fixed !important;
}
/*Phone screen*/
@media screen and (max-width:576px) and (min-width:0px){
}
/*Ipad screen*/
@media screen and (max-width:992px) and (min-width:768px){
}
</style>

