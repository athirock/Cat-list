<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/ListingOfFavoritesItems"> 
      <img  class='icon' src="./assets/heart.svg" alt="favorites"/></router-link>
      <router-link to="/"> 
      <img class='icon' src="./assets/home.svg" alt="home"/></router-link> 
      <router-link to="/ListingOfAllItems">
      <img class='icon' src="./assets/align-justify.svg" alt="list"/></router-link>
      
      
    </div>
    
  </div>
</template>

<style lang="scss">
@import '~bulma';
#app {
  background: linear-gradient(138.13deg, #22343C 25.87%, #1F2E35 100%);
;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e3e3e3;
}
.icon{
  height:24 px;
  width: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
