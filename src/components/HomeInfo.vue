<template>
    <div class="home-info">
        <h2>{{info1}}<br> {{info12}}</h2>
        <div class="home-pics">
        <div class="desc1">
        <router-link to="/about">
        <img :src="image" @mouseover="mouseEvent1" @mouseleave="mouseLeave">
        <p>Explore Nigeria's Culture</p>
        </router-link>
        </div>
        <div class="desc2">
        <router-link to="/recipes">
        <img :src="image2" @mouseover="mouseEvent2" @mouseleave="mouseLeave">
        <p>Find Out About Our Delicious Food </p>
        </router-link>
        </div>
        <div class="desc3">
        <router-link to="/places">
        <img :src="image3" @mouseover="mouseEvent3" @mouseleave="mouseLeave">
        <p>Learn About Nigeria's Greatest Attractions</p>
        </router-link>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            info1:"Discover Our",
            info12:"Naija",
            image:"https://d1e00ek4ebabms.cloudfront.net/production/967c5548-b5a4-44ec-9ebe-bf8e612ad138.jpg",
            image2:"https://images.unsplash.com/photo-1607459758151-0c79481a18c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
            image3:"https://images.unsplash.com/photo-1639774275478-ca749e5efe1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        }
    },
    methods:{
        mouseEvent1:function(){
            this.info12 = 'Culture';
        },
        mouseEvent2:function(){
            this.info12 = 'Food';
        },
        mouseEvent3:function(){
            this.info12 = 'Landmarks';
    },
        mouseLeave:
            function(){
                this.info12="Naija";
            },
    }
}
</script>

<style>
.home-info{
    border-top: 1px black solid;
    background-color:#FCFFFC;
    height:70vh;
    color:#248232;
    text-align:center;
    font-size:2rem;
}
.home-info h2{
    padding-top:2rem;
}

img{
    height: 5rem;
    width:auto;
}

.home-pics{
    display:flex;
    flex-direction: row;
    font-size:1rem;
}

.home-pics img{
    max-width:400px;
    height:300px;
    border-radius:5%;
}

.desc1,.desc2, .desc3{
    padding:1.5rem 2rem;
}

a:link { 
    text-decoration: none; 
    color:#248232;
}
a:visited {text-decoration: none; color:#248232;}
a:hover{text-decoration: underline;}
a:active {text-decoration: underline;}

@media screen and (max-width: 992px) {
  .home-pics {
    height:auto;
    flex-direction: column;
  }

  .home-pics img{
    width: 100%;
    max-width:400px;
    height:200px;
    object-fit: cover;
    border-radius:5%;
}
    .home-info{
        height:180vh;
    }
}
</style>