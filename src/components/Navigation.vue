<template>
    <nav v-bind:class="{applySpace:showMenu}">
    <div class="navbar">
      <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/"><img src="https://spacey500.github.io/hosted-assets/logo1.png" class="nav-img"/></router-link>
        </div>
        <div class="nav-links">
          <ul>
            <li><router-link to="/" class="link-text">Home</router-link></li>
            <li><router-link to="/places" class="link-text">Places</router-link></li>
            <li><router-link to="/accom" class="link-text">Accomodation</router-link></li>
            <li><router-link to="/recipes" class="link-text">Recipes</router-link></li>
            <li><router-link to="/naija" class="link-text">Naija!</router-link></li>
            <li><router-link to="/about"><button style="color:white" class="nav-but" id="contact">Contact Us</button></router-link></li>
          </ul>
     </div>
    </div>
    <div class="menu-btnn">
        <div class="menu">
     <div class="men-btn">
      <button @click="toggleShow" class="menu-btn"><font-awesome-icon icon="fa-solid fa-bars" style="font-size:x-large;"/></button>
     </div>
       <div class="menu-links" v-if="showMenu">
         <ul>
            <li><router-link to="/" class="link-text1" class-active="active">Home</router-link></li>
            <li><router-link to="/places" class="link-text1">Places</router-link></li>
            <li><router-link to="/accom" class="link-text1">Accomodation</router-link></li>
            <li><router-link to="/recipes" class="link-text1">Recipes</router-link></li>
            <li><router-link to="/naija" class="link-text1">Naija!</router-link></li>
            <li><router-link to="/about" class="link-text1">Contact Us</router-link></li>
          </ul>
       </div>
    </div>
    </div>
    </div>
  </nav>
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
    },
  }
}
</script>

<style scoped>
*{
  margin:0;
}

html,
body {
  background-color:#041010;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color:#FCFFFC;
}
.navbar{
  display:flex;
  flex-direction:row;
  justify-items: center;
  max-height:80px;
}

.nav-logo img{
  width:auto;
  height:75%;
}

.nav-container{
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin:1rem;
  margin-left:3rem;
}

.navbar{
  display:flex;
  flex-direction:row;
  justify-items: center;
  max-height:80px;
}

.nav-logo img{
  width:auto;
  height:75%;
}

@media screen and (min-width:992px)  {
  .nav-container{
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin:1rem;
  margin-left:3rem;
}

.navbar{
  padding-bottom:1rem;
}

.nav-logo img{
  padding-top:10px;
}
.menu-btnn{
    display:none;
}

.nav-links{
  margin:1rem;
  justify-items: center;
  margin-left:8rem;
}

.nav-links ul{
  list-style:none;
  float:right;
}

.nav-links li{
  display:inline;
  padding: 14px 16px;
}

.link-text {
  color:#FCFFFC;
  text-decoration: none;
}

#contact{
  color:#FCFFFC;
  text-decoration: none;
}
.nav-but{
  padding:10px;
  background-color:#248232;
}
}

@media screen and (min-width: 0px) and (max-width: 992px) {
    .nav-links {
        display: none;
    }
    /* hide it elsewhere */
}

@media screen and (max-width:992px){
  .nav-logo{
    display:flex;
    justify-content: flex-start;
  }

  .applySpace{
    height:475px;;
  }

  .menu-btnn{
  width:100%;
}

a:hover {
      color:#2BA84A;;
    }
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
      background-color:blue;
      overflow: hidden;
    }
    .menu-links ul{
  list-style:none;
    }

    .link-text1{
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
      overflow: hidden;
    }
}

</style>