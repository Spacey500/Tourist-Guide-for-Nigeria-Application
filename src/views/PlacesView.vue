<template>
    
    <div class="place-container">
    <h1>Places</h1>
    <p>{{intro}}</p>
    <div class="opt-container">
    <Options image="https://fastlagos.com/wp-content/uploads/2020/03/Freedom-Park-Lagos-VisitNigeriaNow-2-640x440-1.jpg" 
    image2="https://onlybyland.com/wp-content/uploads/2021/10/Lekkiconservationclub22.jpg"
    image3="https://img.atlasobscura.com/A2O_gMf13loV1Sq_AxlK4wXQknML34VmsnGDyokK-3U/rs:fill:580:580:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy84MjNk/MDZhMi03NTM3LTQ4/MTgtYWJlMi03OWZm/NWJjYmJiYmQyNzM3/YTYxMzFkNzRmNjEz/M2JfR2V0dHlJbWFn/ZXMtNDgxNjYwOTc5/LmpwZw.jpg"
    name="Freedom Park" name2="Lekki Conservation Centre" name3="Zuma Rock"></Options>
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
    Options, Footer1
},
data:function(){
    return{
        intro:"Discover the cool landmarks of Nigeria! There are so many places for you to visit! Add these cool places to your itineary today!"
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
    margin-bottom: 0;
    display:flex;
    justify-content: center;
    align-items:center;
}

p{margin:0rem 1.25rem;}

@media screen and (max-width:410px){
    p{
        margin:0rem 1.25rem;
    }
}
</style>
