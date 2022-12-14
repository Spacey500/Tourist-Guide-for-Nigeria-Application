<template>
    <div class="recipe-container">
    <div class="introo">
    <h1>Recipes</h1>
    <div class="intro-text">
    <p>{{intro}}</p>
    </div>
    </div>
    <div class="opt-container">
    <Options image="https://www.sainsburysmagazine.co.uk/uploads/media/1800x1800/08/12258-jollof-rice.jpg?v=1-0" 
    image2="https://simshomekitchen.com/wp-content/uploads/2020/03/puff-puff-pepper.jpg"
    image3="https://i.ytimg.com/vi/ZXM0ZZM9Mjs/maxresdefault.jpg"
    name="Jollof Rice" name2="Puff Puff" name3="Meat Pie"></Options>
</div>
</div>
<Footer1/>
</template>

<script>
import Options from '@/components/Options.vue';
import Footer1 from '@/components/Footer1.vue';
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'RecipesView',
  components: {
    Options, Footer1, Navigation
},
data:function(){
    return{
        intro:"Discover the delicious food of Nigeria! There are so many treats for you to try! If you cannot wait to try when you get here, here are the recipes to give you a glimpse of whats to come when you arrive!"
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

.intro-text{
    padding:0 4rem;
}

</style>
