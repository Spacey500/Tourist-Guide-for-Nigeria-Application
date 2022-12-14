<template>
<main class="page">
  <div class="recipe-page">
    <section class="recipe-hero">
      <img src="https://www.sainsburysmagazine.co.uk/uploads/media/1800x1800/08/12258-jollof-rice.jpg?v=1-0" class="img recipe-hero-img" />
      <article class="recipe-info">
        <h2>Jollof Rice</h2>
        <p>
          A classic Nigerian Dish! This is a delicacy that is like no other! The rice is rich with spices that will satisfy your hunger!
        </p>
        <div class="recipe-icons">
          <article>
            <font-awesome-icon icon="fa-regular fa-clock" />
            <h5>prep time</h5>
            <p>30 min</p>
          </article>
          <article>
            <font-awesome-icon icon="fa-regular fa-star" @click = "doSomething"/>
            <h5 style="padding-top:10px;">Add to Favorites</h5>
            <p></p>
          </article>
          <article>
            <font-awesome-icon icon="fa-solid fa-user-group" />
            <h5>serving</h5>
            <p>6 servings</p>
          </article>
        </div>
      </article>
    </section>
    <!-- recipe content -->
    <section class="recipe-content">
      <article>
        <h4 style="padding-bottom:1.25rem;">Instructions</h4>
        <!-- single instruction -->
        <div class="single-instruction">
          <header>
            <p>step 1</p>
          </header>
          <p>
            Prep the ingredients. Start by sauteeing the Onions. This should take about 3 to 5 minutes. The next thing is to stir in the Tomato paste. This adds a deep and rich tomato flavor; I simply fry this for another 5 minutes or thereabouts.
          </p>
        </div>
        <!-- end of single instruction -->
        <!-- single instruction -->
        <div class="single-instruction">
          <header>
            <p>step 2</p>
          </header>
          <p>
            Add the Ginger and Garlic and cook along with the Tomato paste for another two minutes. Add a variety of peppers. Then add the seasonings which are thyme, curry powder, salt, and magi.
          </p>
        </div>
        <!-- end of single instruction -->
        <!-- single instruction -->
        <div class="single-instruction">
          <header>
            <p>step 3</p>
          </header>
          <p>
            Once, the rice comes to a boil, reduce the heat to medium-low immediately and continue to cook until the rice is done about 20 to 25 minutes. Enjoy the rice with fried chicken and plantains. Eat Well!
          </p>
        </div>
        <!-- end of single instruction -->
      </article>
      <article class="second-column">
        <div>
          <h4 style="padding-bottom:1.25rem;">Ingredients</h4>
          <p class="single-ingredient">1 1/2 cups olive oil</p>
          <p class="single-ingredient">1/2 cup chicken stock</p>
          <p class="single-ingredient">1 cup tomato paste</p>
        </div>
        <div>
          <h4 style="padding-bottom:1.25rem;">Tools</h4>
          <p class="single-tool">Rice Cooker</p>
          <p class="single-tool">Large Heavy Pot With Lid</p>
          <p class="single-tool">Measuring Spoons</p>
          <p class="single-tool">Measuring Cups</p>
        </div>
      </article>
    </section>
  </div>
</main>
</template>

<script>
export default {
  data:function(){
      return{
          addFav: false
      }
  },
  methods:{
    doSomething: function(event){
      event.srcElement.style.color = 'lightgreen';
      console.log(event);
      this.addFav = true;
      
    }
    },
  computed:{
    addFav: function() {if(this.addFav = true)console.log ('Place has been added to favourites1');
  }
  }
}


</script>


<style scoped>
.recipe-hero {
  display: grid;
  gap: 3rem;
}

.recipe-hero-img {
  padding-left:2rem;
  text-align: center;
  height:300px;
  border-radius: 0.25rem;
}
.recipe-info p {
  color: #FCFFFC;
}
.recipe-icons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  text-align: center;
}
.recipe-icons i {
  font-size: 1.5rem;
  color: #2BA84A;
}
.recipe-icons h5,
.recipe-icons p {
  margin-bottom: 0;
  font-size: 0.85em;
}

.recipe-icons p {
  color: #FCFFFC;
}
.recipe-tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.7em;
  font-weight: 600;
}
.recipe-tags a {
  background:#2BA84A;
  border-radius: 0.25rem;
  color: #fff;
  padding: 0.05rem 0.5rem;
  margin: 0 0.25rem;
  text-transform: capitalize;
}
@media screen and (min-width: 992px) {
  .recipe-hero {
    grid-template-columns: 4fr 5fr;
    align-items: center;
  }
}
.recipe-content {
  padding: 3rem 0;
  display: grid;
  gap: 2rem 5rem;
}
@media screen and (min-width: 992px) {
  .recipe-content {
    grid-template-columns: 2fr 1fr;
  }
  .recipe-hero-img {
  padding-left:2rem;
  text-align: center;
  height:300px;
  width:600px;
  object-fit: cover;
  border-radius: 0.25rem;
}
}
.single-instruction header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: center;
}
.single-instruction header p {
  text-transform: uppercase;
  font-weight: 600;
  color:#2BA84A;
  margin-bottom: 0;
}
.single-instruction p {
  color: #FCFFFC;
}

.single-instruction header div {
  height: 2px;
  background: #FCFFFC;
}

.second-column {
  display: grid;
  row-gap: 2rem;
}

.single-ingredient {
  padding-bottom: 0.75rem;
  color:#FCFFFC;
}
.single-tool {
  padding-bottom: 0.75rem;
  color: #2BA84A;
  text-transform: capitalize;
}

.page{
    margin-top:2rem;
    padding-left:2rem;
    margin-bottom:0;
  background-color:#041010;
}

.single-instruction{
    padding-bottom:1.25rem;
}

</style>