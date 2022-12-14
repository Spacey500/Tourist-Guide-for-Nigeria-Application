<template>
    <div class="menu">
     <div class="men-btn">
      <button @click="toggleShow" class="menu-btn"><font-awesome-icon icon="fa-solid fa-bars" style="font-size:x-large;"/></button>
     </div>
       <div class="menu-links" v-if="showMenu">
         <ul>
            <li><router-link to="/" class="link-text" class-active="active">Home</router-link></li>
            <li><router-link to="/about" class="link-text">Places</router-link></li>
            <li><router-link to="/about" class="link-text">Accomodation</router-link></li>
            <li><router-link to="/about" class="link-text">Recipes</router-link></li>
            <li><router-link to="/about" class="link-text">Naija!</router-link></li>
            <li><router-link to="/about" class="link-text">Contact Us</router-link></li>
          </ul>
       </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleShow: function () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style scoped>
a:hover {
      color:#2BA84A;;
    }
@media screen and (min-width:992px){
    .menu{
        display:none;
    }
}

@media screen and (max-width:992px) {

    .menu{
      margin:2rem 3rem;
      float:right;
      overflow: hidden;
    }
    nav li{
  width:100%;
   }
    
    .menu button{
      text-align:center;
    }
    .menu-btn{
      display:block;
        position:fixed;
    }

    .men-btn{
      position:absolute;
    }
    .menu-links{
      position:relative;
      top:3rem;
      overflow:hidden;
      display:flex;
      flex-direction:column;
      text-align: center;
      height:50vh;
    }
    .menu-links ul{
  list-style:none;
    }

    .link-text{
      display: block;
      padding:1rem 0;
      text-decoration:none;
      font-size:1.25rem;
      color: white;
    }

    ul{
      position:fixed;
      width:100%;
      top:5rem;
      left:0;
      background-color:#041010;
    }
}
/*
.slide-f-enter-active {
  transition: all ease-in-out 1s;
}

.slide-f-enter-from{
  opacity: 0;
}
*/
</style>/