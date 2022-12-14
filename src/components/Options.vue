<template>
    <div class="container">
    <div class="one">
    <router-link to="/singles"><img :src="image"/></router-link>
    <p>{{name}}</p>
    </div>
    <div>
    <router-link to="/singles"><img :src = "image2"/></router-link>
    <p>{{name2}}</p>
    </div>
    <div>
    <router-link to="/singles"><img :src = "image3"/></router-link>
    <p>{{name3}}</p>
    </div>
    </div>
</template>

<script>
export default {
    props:{
        image:{
            type: String
        },
        image2:{
            type:String
        },
        image3:{
            type:String
        },
        name2:{
            type:String
        },
        name:{
            type:String
        },
        name3:{
            type:String
        }
    },
  }
</script>

<style scoped>
.container{
    width:auto;
    height:50%;
    display:grid;
    gap:1rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top:-6rem;
    margin-bottom:0;
}

.container:last-child{
    grid-column-start: 3;
    grid-column-end: 4;
}

img{
    height:400px;
    width:400px;
    object-fit:cover;

}

@media screen and (max-width:992px){
    .container{
        display:grid;
        grid-template-columns: repeat(1, 1fr);

    }

    img{
        height:auto;
        min-width:10rem;
        object-fit:cover;
    }
}

@media screen and (max-width:410px){
    img{
        height:300px;
        width:300px;
        object-fit:cover;
        margin-right:2rem;
        margin-left:2rem;
    }

    p{
        margin-right:2rem;
        margin-left:2rem;
    }
}
</style>