<template>
    <div class="newCategorie">
        <h1>Add new Categorie</h1>
        <form class='newCategorieForm'>
        
                <label for="">Category label :</label>
                <input type="text" required v-model.lazy.trim="newCategory.Label" />
                <label for="">Date :</label>
                <input type="date" required v-model.lazy.trim="newCategory.Date" /><br>
                <label for="">vignette :</label>
                <input type="img" required v-model.lazy.trim="newCategory.vignette" />
                <button @click.prevent.stop="addCategory">Add new Category</button>
            
        </form>
    </div>
    
</template>
<script>
export default {
    data() {
    return {
        newCategory: [{
            Label:"",
            Date:"2021-09-05",
            vignette:"https://picsum.photos/32/32?random=1",
            iduser:""
        }],
    }
  },
  methods: {
      addCategory(){
          console.log("newCategory:",this.newCategory)
        this.$emit("newCategory",this.newCategory)
    }
  },
}
</script>
<style scoped>
    h1{
        padding:20px;

    }
    form {
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: auto;
    }
    label {
        text-align: left;
        font-weight: bold;
        margin-top: 5px;
    }
    button {
        margin: 1rem;
        background-color: #00d1b2;
    }
    input, button {
        height: 2rem;
        border-radius:5px;
    }
</style>