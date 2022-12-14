<template>
    <div class="nav-links">
          <ul>
            <li><router-link to="/" class="link-text">Home</router-link></li>
            <li><router-link to="/about" class="link-text">Places</router-link></li>
            <li><router-link to="/about" class="link-text">Accomodation</router-link></li>
            <li><router-link to="/about" class="link-text">Recipes</router-link></li>
            <li><router-link to="/about" class="link-text">Naija!</router-link></li>
            <li><button class="nav-but"><router-link to="/about" id="contact">Contact Us</router-link></button></li>
          </ul>
     </div>
</template>

<script>
export default {
  name: 'NavbarPC',
  props: {
    msg: String
  }
}
</script>
<style scoped>
@media screen and (min-width: 992px){
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

a:hover {
      color:#2BA84A;;
    }
</style>
