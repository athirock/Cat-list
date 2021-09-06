<template>
  <div class="home">
    <SearchCategory/>
    <AddCategorieForm @addCategory="addCategory"/>
    <CategoriesItem :data-key="index" :category="categorie" v-for="(categorie, index) in categories" :key="index"></CategoriesItem>
  
  </div>
</template>

<script>

import CategoriesItem from '@/components/CategoriesItem.vue'; // @ is an alias to /src
import SearchCategory from '@/components/SearchCategory.vue';
import AddCategorieForm from '@/components/AddCategorieForm.vue';
import categoriesReques from '@/services/request.js'

export default {
  name: 'Home',
  components: {
    CategoriesItem,
    SearchCategory,
    AddCategorieForm,
  },
  data(){
    return {
    categories:[],
    }
  },
  methods:{
    addCategory(newCategory) {
      categoriesReques.newCategorie(newCategory)
      .then( response => {
        console.log("esta respuesta es del home",response)
        this.categories.push(newCategory)
        })
      .catch(error => console.log(error))
    },
    created(){
      categoriesReques.listing()
      .then(response => {
        console.log(response)
        })
      .catch (error => console.log(error))
    }
  }
}

</script>
npm