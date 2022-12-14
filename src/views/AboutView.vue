<template>
  <Contact/>
  <Footer1/>
</template>

<script>
import Contact from '@/components/Contact.vue';
import Footer1 from '@/components/Footer1.vue';
import Navigation from '@/components/Navigation.vue'


export default {
  name: 'AboutView',
  components: {
    Contact, Footer1, Navigation
},
data:function(){
    return{
        intro:"Discover the cool hotels of Nigeria! There are so many places for you to enjoy your stay and rest! Add these cool hotels as your new home here today!"
    }
}
}
</script>
