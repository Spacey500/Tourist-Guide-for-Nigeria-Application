<template>

    <div class="accom-container">
    <h1>Accomodation</h1>
    <p>{{intro}}</p>
    <div class="opt-container">
    <Options image="https://fastly.4sqi.net/img/general/600x600/26820576_LEseYxhjmoM0ro27nxbWXZKey5C_KVDfT61N6MKXHDw.jpg" 
    image2="https://cf.bstatic.com/xdata/images/hotel/max1024x768/149971619.jpg?k=e97ad89a3cb4a3ad2c07eee78f6bbea1c2e6dc634c502d610cb6b5edfb408209&o=&hp=1"
    image3="https://ak-d.tripcdn.com/images/2207180000014oulh5756_R_550_412_R5_Q70_D.jpg"
    name="Eko Hotel" name3="Hotel Transcorp" name2 ="Hotel Bon Voyage"></Options>
</div>
</div>
<Footer1/>
</template>

<script>
import Options from '@/components/Options.vue';
import Footer1 from '@/components/Footer1.vue';
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'PlacesView',
  components: {
    Options, Footer1,
},
data:function(){
    return{
        intro:"Discover the cool hotels of Nigeria! There are so many places for you to enjoy your stay and rest! Add these cool hotels as your new home here today!"
    }
}
}
</script>

<style scoped>
h1, p{
    text-align:center;
}

h1{
    padding-top:5rem;
    padding-bottom:2rem;
}

.opt-container{
    margin:200px;
    margin-bottom:0;
    display:flex;
    justify-content: center;
    align-items:center;
}

p{margin:0rem 1.25rem;}
</style>
