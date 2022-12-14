<template>
  <body class="home">
    <HomeImage/>
    <HomeInfo/>
    <Footer1/>
  </body>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import HomeImage from '@/components/HomeImage.vue';
import HomeInfo from '@/components/HomeInfo.vue';
import Footer1 from '@/components/Footer1.vue';
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'HomeView',
  components: {
    HomeImage, HomeInfo, Footer1, Navigation,
}
}
</script>

<style scoped>

.home{
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - (6rem + 4rem));
  position:relative;
}
</style>