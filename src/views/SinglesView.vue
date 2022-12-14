<template>
    <Singles></Singles>
    <Footer1/>
</template>

<script>
import Singles from '@/components/Singles.vue';
import Footer1 from '@/components/Footer1.vue';
import Navigation from '@/components/Navigation.vue'


export default {
  name: 'SinglesView',
  components: {
    Singles, Footer1, Navigation
},
data:function(){
    return{
        intro:"Discover the cool hotels of Nigeria! There are so many places for you to enjoy your stay and rest! Add these cool hotels as your new home here today!"
    }
}
}
</script>