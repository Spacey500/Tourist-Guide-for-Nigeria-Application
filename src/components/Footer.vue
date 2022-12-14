<template>
    <footer>
        <div class="foot-container">
        <div class="foot-img">
        <img :src="logo"/>
        </div> 
        <div class="about">
            <h4>About Us</h4>
            <p>Welcome To Naija is a tourist guide web application that is designed to help tourists gain interest in Nigeria.
                We provide tips on how to navigate Nigeria to make tourists who decide to come make their stay worthwhile.
            </p>
        </div>
        <div class="services">
            <h4>Services</h4>
            <br>
                <p>Places</p>
                <br>
                <p>Accomodation Listings</p>
                <br>
                <p>Recipes</p>
                <br>
                <p>Blog</p>
        </div>
        <div class="subscribe">
            <h4>Join Our Newsletter</h4>
            <label for="Email"></label>
            <input type="text" id="email" name="email">
            <button>Subscribe</button>
        </div>
    </div>
</footer>
</template>
<script>
export default {
    data: function () {
      return {
        logo:"https://spacey500.github.io/hosted-assets/logo1.png",
      }
    },
  }
  </script>
  

<style scoped>
footer{
    width:100%;
    height:50vh;
    background-color:#041010;
    display:flex;
    align-items:center;
}

.foot-container{
    display:flex;
    align-content: center;
}

.foot-logo{
    height:2rem;
    width:auto;
}

.about{
    height:auto;
    width:20%;
}

.foot-img img{
  width:100%;
  height:auto;
}

.services br{
    line-height: 1px;
}

div{
    padding:1.3rem;
}

h4{
    padding-bottom:.75rem;
}

@media screen and (max-width:992px){
    footer{
        height:110vh;
        background-color:#041010;
        position:relative;
    }

    .foot-container{
        position:absolute;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top:0;
    }

    .foot-img{
        height:5rem;
        width:5rem;
        text-align:center;
    }

    .about{
    height:200px;
    width:400px;
    }
    .about h4{
        text-align:center;
    }

    .services{
        margin-top:0;
    }
}
</style>