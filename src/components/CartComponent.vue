<template> 
  <div> 
    <h1>Cart</h1> 
    <div v-for="item of cart" :key="item.id"> 
      <div class="indi__item"> 
        <p>{{ item.name }}</p> 
        <img class="indi__img" :src="item.imageUrl" /> 
        <button @click="removeFromCart(item.imageUrl)">Remove from cart</button> 
      </div> 
    </div> 
    <router-link to="/"><h3>Back to store</h3></router-link> 
  </div> 
</template> 
 
<script> 
export default { 
  name: "CartComponent", 
  data() { 
    return { 
      cart: [], 
    }; 
  }, 
  methods: { 
    removeFromCart(itemId) { 
      const cartItems = JSON.parse(localStorage.getItem("cart")); 
      const index = cartItems.findIndex(({ imageUrl }) => imageUrl === itemId); 
      cartItems.splice(index, 1); 
      localStorage.setItem("cart", JSON.stringify(cartItems)); 
      this.cart = JSON.parse(localStorage.getItem("cart")); 
    }, 
    getCart() { 
      if (!localStorage.getItem("cart")) { 
        localStorage.setItem("cart", JSON.stringify([])); 
      } 
      this.cart = JSON.parse(localStorage.getItem("cart")); 
    }, 
  }, 
  beforeMount() { 
    this.getCart(); 
  }, 
}; 
</script>
