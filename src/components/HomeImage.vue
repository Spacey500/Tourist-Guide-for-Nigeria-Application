<template>
    <div class="home-img">
        <div class="home-text">
        <h1>{{intro}}</h1>
        <p>{{intro2}}</p>
        <router-link to="/about"><button>Enquire Now</button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            intro:"Come to Nigeria",
            intro2: "Visit the most beautiful African Country",
        }
    }
}
</script>

<style scoped>
.home-img{
    background: url("https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80") center/cover no-repeat;
    height:90vh;
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%
}

.home-text{
    text-align:center;
    width:100%;
}

.home-text h1{
    color:#FCFFFC;
    font-size:5rem;
}

.home-text p{
    font-size:1.25rem;
}

button{
    background-color:#248232;
    padding:10px;
    border-radius:5px;
    color:white;
}
</style>