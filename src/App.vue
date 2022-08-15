<template>
  <div id="app">
    <h3>Bags Store</h3>
    <img
      alt="E-commerce logo"
      src="https://photo-cdn2.icons8.com/cfD33FbEpD4Srs0gXnuRWXFlet6KXB0dnU-YHbZTVzU/rs:fit:715:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMS9lY2JjNzFj/YS00NjU2LTRjNWIt/OTM1MC0wMTBlMTI4/N2I4ODYuanBn.jpg"
      width="25%"
    />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cursor {
  cursor: pointer;
}
</style>