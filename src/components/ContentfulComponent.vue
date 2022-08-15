<template> 
  <div> 
    <router-link to="/cart"><h3>Open Cart</h3></router-link>
    <div v-if="theBags"> 
      <div :key="bag.fields.title" v-for="bag in theBags"> 
        <div class="indi__item"> 
          <img class="indi__img" :src="bag.fields.imageUrl" /> 
          <h3>{{ bag.fields.title }}</h3> 
          <h3>Description: {{ bag.fields.description }}</h3> 
           <button @click="addToCart(bag.fields)">Add to cart</button> 
        </div> 
      </div> 
    </div> 
  </div> 
</template> 
<script> 
import axios from "axios"; 
 
export default { 
  name: "ContentfulComponent", 
  data() { 
    return { 
      theBags: [], 
    }; 
  }, 
  methods: { 
    getBags() { 
      axios 
        .get( 
          "https://cdn.contentful.com/spaces/scbyi40j773n/environments/master/entries?access_token=f-w7lv3wOmNC2nSi9eYfbGDbbgDBBdYVsOBk-ieIy9k"
        ) 
        .then((res) => { 
          console.log(res.data.items); 
          this.theBags = res.data.items; 
        }); 
    }, 
    addToCart(item) { 
      if (!localStorage.getItem("cart")) { 
        localStorage.setItem("cart", JSON.stringify([])); 
      } 
      //console.log(item); 
      let cartItems = []; 
      cartItems = JSON.parse(localStorage.getItem("cart")) || []; 
 
 
      localStorage.getItem("cart"); 
      cartItems.push(item); 
      console.log(cartItems); 
 
 
      localStorage.setItem("cart", JSON.stringify(cartItems)); 
      alert("added to cart"); 
}, 

  }, 
  mounted() { 
    this.getBags(); 
  }, 
}; 
</script>

<style>
.indi__item {
  border: 1px solid black;
  margin-bottom: 2rem;
  padding: 0.5rem;
  display: grid;
  justify-items: center;
}
.indi__img {
  height: 16rem;
  margin-bottom: 1rem;
}
</style>
