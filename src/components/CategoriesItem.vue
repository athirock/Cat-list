<template>
  <div id="List-categorie">
    <h1>List-categorie</h1>
    <li class="link">{{category.Label}} {{category.Date}}<a href="" @click.prevent.stop="deleteCategorie" >⊗</a></li>
  </div>
</template>
<script>
export default {
  name: 'List-categorie',
  props: {
    category:{
      type:Object
    }
  },
    methods:{
    deleteCategorie(){
      this.$emit("deleteCategorie")
    }
    }
}
</script>

<style scoped>
     
</style>